import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import HomepageSec1 from "./Layout/HomepageLayouts/HomepageSec1";
import HomepageSec2 from "./Layout/HomepageLayouts/HomepageSec2";
import HomepageSec3 from "./Layout/HomepageLayouts/HomepageSec3";
import HomepageSec4 from "./Layout/HomepageLayouts/HomepageSec4";

const FrontPage = () => {
  return (
    <div>
      <Header />
      <HomepageSec1 />
      <HomepageSec2 />
      <HomepageSec3 />
      <HomepageSec4 />
      <Footer />
    </div>
  );
};

export default FrontPage;
