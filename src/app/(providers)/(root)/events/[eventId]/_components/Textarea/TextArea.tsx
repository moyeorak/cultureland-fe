function TextArea({ ...props }) {
  return (
    <textarea
      className="border resize-none w-full h-36 text-neutral-40 text-fs-14 px-4 py-2 rounded-lg"
      {...props}
    ></textarea>
  );
}

export default TextArea;
