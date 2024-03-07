interface HeadingProps {
  label: string;
}

function Heading({ label }: HeadingProps) {
  return <h1 className='text-3xl text-center font-bold mb-4'>{label}</h1>;
}

export default Heading;
