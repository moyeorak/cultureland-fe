import Image from "next/image";

interface IconProps {
  isHover: boolean;
}

function StarIcon({ isHover = false }: IconProps) {
  return isHover ? (
    <Image
      src="/utils/icons/Star2.png"
      alt="star-hover"
      width={32}
      height={32}
    />
  ) : (
    <Image
      src="/utils/icons/Star.png"
      alt="star-basic"
      width={32}
      height={32}
    />
  );
}

export default StarIcon;
