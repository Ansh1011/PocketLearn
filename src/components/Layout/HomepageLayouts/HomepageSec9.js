import React from "react";
import Hp9Style from "../LayoutStyles/HomepageSec9.module.css";
import HomepageSec10 from "./HomepageSec10";

const HomepageSec9 = () => {
  return (
    <div>
      <div className={Hp9Style.homeInvestorSectionContainer}>
        <div className={Hp9Style.maxWidthContainer}>
          <HomepageSec10 />
        </div>
      </div>
    </div>
  );
};

export default HomepageSec9;
