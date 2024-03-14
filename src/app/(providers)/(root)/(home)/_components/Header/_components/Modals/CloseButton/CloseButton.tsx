import { useModal } from "@/contexts/modal/modal.context";
import Image from "next/image";

function CloseButton() {
  const modal = useModal();

  return (
    <div className="flex justify-end">
      <Image
        src={"/utils/icons/Close.png"}
        alt="close"
        height={24}
        width={24}
        unoptimized
        onClick={() => {
          modal.close();
        }}
      />
    </div>
  );
}

export default CloseButton;
