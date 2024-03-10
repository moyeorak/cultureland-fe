"use client";

import { useState } from "react";
import ActiveTab from "../ActiveTab";
import InfoSection from "../InfoSection";
import ReviewSection from "../ReveiewSection/ReviewSection";
interface DetailTabSectionProps {
  eventId: number;
}

function DetailTabSection({ eventId }: DetailTabSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className=" justify-center flex gap-x-11 transition h-14  mb-10">
        <div className="flex flex-col w-[52px] items-center">
          <button
            onClick={() => setActiveTab(0)}
            className="text-fs-28 font-bold w-[52px]"
          >
            <p className="h-[35px]">안내</p>
          </button>
          {activeTab === 0 && <ActiveTab />}
        </div>

        <div className="flex flex-col w-[52px] items-center">
          <button
            onClick={() => setActiveTab(1)}
            className="text-fs-28 font-bold w-[52px]"
          >
            <p className="h-[35px] ">리뷰</p>
          </button>
          {activeTab === 1 && <ActiveTab />}
        </div>
      </div>
      <section>
        {activeTab === 0 && <InfoSection />}
        {activeTab === 1 && <ReviewSection eventId={eventId} />}
      </section>
    </>
  );
}

export default DetailTabSection;
