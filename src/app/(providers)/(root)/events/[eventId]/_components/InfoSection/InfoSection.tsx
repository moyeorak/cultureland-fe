import { DescriptionImage } from "@/types/Event.type";
import Image from "next/image";

interface InfoSectionProps {
  description_images: DescriptionImage[] | null;
}

function InfoSection({ description_images }: InfoSectionProps) {
  return (
    <div className="w-2/3 mx-auto overflow-hidden">
      {description_images?.map((image) => (
        <div key={image.id} className="relative w-full h-auto">
          <Image
            src={image.imageUrl}
            alt="event-poster"
            layout="responsive"
            width={400}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}

export default InfoSection;
