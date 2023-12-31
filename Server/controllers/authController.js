import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import userQueryModel from "../models/userQueryModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (request, response) => {
  try {
    const { name, email, phone, password } = request.body;
    //validation
    if (!name) {
      return response.send({ error: "Name is Required" });
    }
    if (!email) {
      return response.send({ error: "Email is Required" });
    }
    if (!phone) {
      return response.send({ error: "Phone no. is Required" });
    }
    if (!password) {
      return response.send({ error: "Password is Required" });
    }

    //check User
    const existingUser = await userModel.findOne({ email });
    // existing User
    if (existingUser) {
      return response.status(200).send({
        success: false,
        message: "Already Registered user , Please Login ",
      });
    }

    //register User
    const hashedPassword = await hashPassword(password);

    //save user
    const user = await new userModel({
      name,
      email,
      phone,
      password: hashedPassword,
    }).save();

    response.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

export const loginController = async (request, response) => {
  try {
    //validation
    const { email, password } = request.body;
    if (!email || !password) {
      return response.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return response.status(404).send({
        success: false,
        message: "Email is not Registered",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return response.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    response.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    response.send(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

export const testController = (request, response) => {
  try {
    response.send("Procted Route reached by admin");
  } catch (error) {
    console.log(error);
    response.send({ error });
  }
};

export const registerQuery = async (request, response) => {
  try {
    const { name, email, phone, query } = request.body;
    //validation
    if (!name) {
      return response.send({ error: "Name is Required" });
    }
    if (!email) {
      return response.send({ error: "Email is Required" });
    }
    if (!phone) {
      return response.send({ error: "Phone no. is Required" });
    }
    if (!query) {
      return response.send({ error: "Query no. is Required" });
    }

    const userQuery = await new userQueryModel({
      name,
      email,
      phone,
      query,
    }).save();

    response.status(201).send({
      success: true,
      message: "Your Query sent successfully.\n Thanks for Connecting.",
      userQuery,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};
