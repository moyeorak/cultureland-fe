import { PropsWithChildren } from "react";

interface PageProps {
  title?: string;
  description?: string;
}

function Page({ title, description, children }: PropsWithChildren<PageProps>) {
  return (
    <main className="bg-white px-5 lg:px-8 py-8 lg:py-20 mx-auto max-w-screen-lg">
      {(title || description) && (
        <div className="mb-10 grid gap-y-5">
          {title && (
            <h1 className="text-3xl text-center font-bold text-neutral-90">
              {title}
            </h1>
          )}
          {description && (
            <div className="text-center text-sm text-neutral-40 font-light">
              {description}
            </div>
          )}
        </div>
      )}

      {children}
    </main>
  );
}

export default Page;
