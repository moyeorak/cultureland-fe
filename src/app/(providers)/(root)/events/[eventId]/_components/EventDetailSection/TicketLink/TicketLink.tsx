"use client";

import { bookingLink } from "@/types/Event.type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface TicketLinkProps {
  bookingLinks: bookingLink[];
}

function TicketLink({ bookingLinks }: TicketLinkProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState(
    "/utils/icons/white-down.png"
  );

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setCurrentImageSrc(
      !showDropdown
        ? "/utils/icons/white-up.png"
        : "/utils/icons/white-down.png"
    );
  };

  return (
    <div className="group relative w-80 mx-auto mb-20 z-40 ">
      <button
        onClick={toggleDropdown}
        className=" transition duration-200 rounded-lg overflow-hidden bg-user-theme-100 text-font-white text-center text-fs-14 w-full px-[10px] py-[10px] focus:outline-none"
      >
        예매처
        <Image
          src={currentImageSrc}
          alt="drop-down"
          width={24}
          height={24}
          className="absolute top-2 right-8"
        />
      </button>

      <div
        className={`${
          showDropdown ? "opacity-100" : "opacity-0"
        } absolute w-full mt-6 transition-opacity duration-300 transform`}
      >
        <ul className="flex flex-col shadow-primary rounded-md py-2 px-2 bg-white">
          {bookingLinks.map((bookingLink, index) => (
            <li
              key={index}
              className="px-4 py-[15px] text-fs-14 text-font-40 hover:text-user-theme-100 transition cursor-pointer"
            >
              <Link href={bookingLink.link}>{bookingLink.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TicketLink;
