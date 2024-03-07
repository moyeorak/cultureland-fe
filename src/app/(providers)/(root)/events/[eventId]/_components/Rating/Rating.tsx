import { useMemo, useState } from "react";
import StarIcon from "../StarIcon";

interface RatingProps {
  value: number;
  onChange: (value: number) => void;
  size?: number;
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  emptyIconPath?: string;
  fullIconPath?: string;
}

export const defaultFullIconPath =
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
export const defaultEmptyIconPath =
  "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z";

function Rating({
  value,
  onChange,
  size,
  color = "#ffd700",
  hoverColor = "#ffd700",
  activeColor = "#ffd700",
  emptyIconPath = defaultEmptyIconPath,
  fullIconPath = defaultFullIconPath,
}: RatingProps) {
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const getColor = (index: number) =>
    hoverValue !== undefined && index <= hoverValue
      ? hoverColor
      : index < value
      ? activeColor
      : color;
  const stars = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoverValue(i)}
          onMouseLeave={() => setHoverValue(undefined)}
          onClick={() => onChange(i + 1)}
        >
          <StarIcon
            size={size}
            color={getColor(i)}
            path={
              hoverValue !== undefined && i <= hoverValue
                ? fullIconPath
                : i < value
                ? fullIconPath
                : emptyIconPath
            }
          />
        </div>
      )),
    [value, hoverValue, size]
  );

  return <div className="flex">{stars}</div>;
}

export default Rating;
