import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FrontPage from "./components/FrontPage";
import { Routes, Route } from "react-router-dom";
import SuccessSt1 from "./components/Layout/SuccessStories/SuccessSt1";
import ProgramPage1 from "./components/Layout/ProgramsLayout/ProgramPage1";
import LoginRegister from "./components/Layout/Auth/LoginRegister";
import ComingSoon from "./components/Layout/ComingSoon/ComingSoon";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/programs" element={<ProgramPage1 />} />
        <Route path="/success-stories" element={<SuccessSt1 />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
