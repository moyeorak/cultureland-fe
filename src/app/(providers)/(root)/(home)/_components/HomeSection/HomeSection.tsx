import { PropsWithChildren } from "react";

interface HomeSectionProps {
  title: string;
  description?: string;
}

function HomeSection({
  title,
  description,
  children,
}: PropsWithChildren<HomeSectionProps>) {
  return (
    <section className="flex flex-col gap-y-4 md:gap-y-6 relative">
      <div className="grid grid-cols-1 gap-y-0.5 md:gap-y-2">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        {description && (
          <p className="text-xs sm:text-[13px] md:text-sm text-neutral-40 font-light">
            {description}
          </p>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default HomeSection;
