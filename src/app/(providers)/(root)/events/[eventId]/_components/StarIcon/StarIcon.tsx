interface IconProps {
  size?: number;
  color?: string;
  path: string;
}

function StarIcon({ size = 20, color = "#aaa", path }: IconProps) {
  return (
    <svg height={size} viewBox="0 0 25 25">
      <path d={path} fill={color} />
    </svg>
  );
}

export default StarIcon;
