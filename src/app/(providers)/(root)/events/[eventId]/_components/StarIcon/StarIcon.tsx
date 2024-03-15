import Image from "next/image";

interface IconProps {
  isHover?: boolean;
  path?: "new-star-fill" | "new-star-empty" | "new-star-half";
  size: "small" | "big" | "xsmall";
}

function StarIcon({
  isHover = false,
  path = "new-star-empty",
  size,
}: IconProps) {
  const imagePath = isHover
    ? "/utils/icons/new-star-fill.png"
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
