interface HeadingProps {
  label: string;
  position?: "center" | "start";
}

function Heading({ label, position = "center" }: HeadingProps) {
  return (
    <h1
      className="text-3xl text-center font-bold mb-4 data-[position=start]:text-start"
      data-position={position}
    >
      {label}
    </h1>
  );
}

export default Heading;
