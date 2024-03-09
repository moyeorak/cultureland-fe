import Image from "next/image";
import { ComponentProps } from "react";

interface FileInputProps extends ComponentProps<"input"> {
  label: string;
}

function FileInput({ label, ...props }: FileInputProps) {
  return (
    <div>
      <div className="border rounded-lg w-[120px] flex justify-center h-[120px] items-center">
        <label
          htmlFor="input-file"
          className=" text-neutral-80 text-fs-14 cursor-pointer"
        >
          <div className="flex justify-center mb-2">
            <Image
              src={"/utils/icons/Plus.png"}
              alt="사진 업로드"
              width={48}
              height={48}
            />
          </div>
          {label}
        </label>
      </div>
      <input
        type="file"
        accept="image/*"
        id="input-file"
        className="hidden"
        {...props}
      />
    </div>
  );
}

export default FileInput;
