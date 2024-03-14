"use client";

import { useState } from "react";
import Tab from "./Tab/Tab";

function MobileMenu() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className=" bg-white shadow-md flex justify-around p-2">
      <Tab
        imgSrc="/utils/icons/Home.png"
        activeImgSrc="/utils/icons/Home-active.png"
        label="홈"
        isActive={activeTab === "home"}
        onClick={() => setActiveTab("home")}
      />
      <Tab
        imgSrc="/utils/icons/User.png"
        activeImgSrc="/utils/icons/User-active.png"
        label="마이"
        isActive={activeTab === "my"}
        onClick={() => setActiveTab("my")}
      />
      <Tab
        imgSrc="/utils/icons/Burger.png"
        activeImgSrc="/utils/icons/Burger-active.png"
        label="카테고리"
        isActive={activeTab === "category"}
        onClick={() => setActiveTab("category")}
      />
    </div>
  );
}

export default MobileMenu;
