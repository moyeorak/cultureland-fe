import { PropsWithChildren } from "react";

interface PageProps {
  title?: string;
}

function Page({ title, children }: PropsWithChildren<PageProps>) {
  return (
    <main className="bg-white m-auto max-w-[960px] pt-12 transition-all">
      {title && (
        <h1 className="text-3xl text-center font-bold mb-10">{title}</h1>
      )}
      {children}
    </main>
  );
}

export default Page;
