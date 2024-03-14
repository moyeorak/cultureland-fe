import { PropsWithChildren } from "react";

interface PageProps {
  title?: string;
}

function Page({ title, children }: PropsWithChildren<PageProps>) {
  return (
    <main className="bg-white m-auto px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg w-full">
      {title && (
        <h1 className="text-3xl text-center font-bold mb-10">{title}</h1>
      )}
      {children}
    </main>
  );
}

export default Page;
