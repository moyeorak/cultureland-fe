function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-white m-auto max-w-[960px] pt-12 transition-all xs:max-w-[375px] xs:w-[375px] xs:bg-red-900 xs:mx-auto">
      {children}
    </main>
  );
}

export default Page;
