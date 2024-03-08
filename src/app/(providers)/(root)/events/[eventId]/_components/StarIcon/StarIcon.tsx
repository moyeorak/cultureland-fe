import Image from "next/image";

interface IconProps {
  isHover?: boolean;
  path?: "Star" | "Star2" | "Plus";
}

function StarIcon({ isHover = false, path = "Star" }: IconProps) {
  const imagePath = isHover
    ? "/utils/icons/Star2.png"
    : `/utils/icons/${path}.png`;

  return <Image src={imagePath} alt="star icon" width={32} height={32} />;
}

export default StarIcon;
