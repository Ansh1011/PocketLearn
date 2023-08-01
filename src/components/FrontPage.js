import React, { useEffect, useState } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import HomepageSec1 from "./Layout/HomepageLayouts/HomepageSec1";
import HomepageSec2 from "./Layout/HomepageLayouts/HomepageSec2";
import HomepageSec3 from "./Layout/HomepageLayouts/HomepageSec3";
import HomepageSec4 from "./Layout/HomepageLayouts/HomepageSec4";
import HomepageSec5 from "./Layout/HomepageLayouts/HomepageSec5";
import HomepageSec8 from "./Layout/HomepageLayouts/HomepageSec8";
import HomepageSec9 from "./Layout/HomepageLayouts/HomepageSec9";
import HomepageSec10 from "./Layout/HomepageLayouts/HomepageSec10";
import ModalPopUp from "./Layout/Auth/ModalPopUp";


const FrontPage = () => {
  return (
    <div>
      <Header />
      <ModalPopUp />
      <HomepageSec1 />
      <HomepageSec2 />
      <HomepageSec3 />
      <HomepageSec4 />
      <HomepageSec8 />
      <HomepageSec9 />
      <Footer />
    </div>
  );
};

export default FrontPage;
