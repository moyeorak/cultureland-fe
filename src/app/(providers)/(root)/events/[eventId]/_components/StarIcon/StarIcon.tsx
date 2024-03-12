import Image from "next/image";

interface IconProps {
  isHover?: boolean;
  path?: "Star-fill" | "Star-empty" | "Star-half";
  size: "small" | "big";
}

function StarIcon({ isHover = false, path = "Star-empty", size }: IconProps) {
  const imagePath = isHover
    ? "/utils/icons/star-fill.png"
    : `/utils/icons/${path}.png`;

  const imageSize = size === "small" ? 24 : 32;

  return (
    <Image
      src={imagePath}
      alt="star-icon"
      width={imageSize}
      height={imageSize}
    />
  );
}

export default StarIcon;
