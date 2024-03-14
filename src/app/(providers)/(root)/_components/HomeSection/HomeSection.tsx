import { PropsWithChildren } from "react";

interface HomeSectionProps {
  title: string;
}

function HomeSection({ title, children }: PropsWithChildren<HomeSectionProps>) {
  return (
    <section className="flex flex-col gap-y-6 relative">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default HomeSection;
