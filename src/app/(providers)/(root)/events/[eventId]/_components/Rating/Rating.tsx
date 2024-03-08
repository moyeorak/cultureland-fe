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

function Rating({ value, onChange }: RatingProps) {
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const stars = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoverValue(i)}
          onMouseLeave={() => setHoverValue(undefined)}
          onClick={() => onChange(i + 1)}
          className="pr-2"
        >
          <StarIcon
            isHover={
              hoverValue !== undefined && i <= hoverValue
                ? true
                : i < value
                ? true
                : false
            }
          />
        </div>
      )),
    [value, hoverValue]
  );

  return <div className="flex mb-4">{stars}</div>;
}

export default Rating;
