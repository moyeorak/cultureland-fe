import Image from "next/image";

function InfoSection() {
  return (
    <div className="relative w-full h-screen rounded-lg overflow-hidden">
      <Image
        src={"/images/poster.jpeg"}
        alt="event-poster"
        fill
        objectFit="object-cover"
      />
    </div>
  );
}

export default InfoSection;
