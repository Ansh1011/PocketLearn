import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import HomepageSec1 from "./Layout/HomepageLayouts/HomepageSec1";
import HomepageSec2 from "./Layout/HomepageLayouts/HomepageSec2";

const FrontPage = () => {
  return (
    <div>
      <Header />
      <HomepageSec1 />
      <HomepageSec2 />
      <Footer />
    </div>
  );
};

export default FrontPage;
