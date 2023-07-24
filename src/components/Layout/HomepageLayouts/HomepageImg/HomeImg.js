import React, { useEffect } from "react";
import { ReactComponent as Svg } from "./student.svg";

export default function StudentImg() {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      window.setTimeout(
        document.querySelector("svg").classList.add("animated"),
        1000
      );
    });
  }, []);
  return <Svg />;
}
