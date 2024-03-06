import { ComponentProps } from "react";

interface FileInputProps extends ComponentProps<"input"> {
  label: string;
}

function FileInput({ label, ...props }: FileInputProps) {
  return (
    <div>
      <label
        htmlFor="input-file"
        className="bg-user-theme-100 text-white rounded cursor-pointer "
      >
        {label}
      </label>
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
