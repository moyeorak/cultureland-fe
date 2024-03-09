import Image from "next/image";

interface IconProps {
  isHover?: boolean;
  path?: "star-fill" | "star-empty" | "half";
}

function StarIcon({ isHover = false, path = "star-empty" }: IconProps) {
  const imagePath = isHover
    ? "/utils/icons/star-fill.png"
    : `/utils/icons/${path}.png`;

  return <Image src={imagePath} alt="star icon" width={32} height={32} />;
}

export default StarIcon;
