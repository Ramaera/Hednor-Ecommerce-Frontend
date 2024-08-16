import React from "react";
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";

export const Header = () => {
  return (
    <div className="relative">
      <MainHeader />
      <SubHeader />
    </div>
  );
};
