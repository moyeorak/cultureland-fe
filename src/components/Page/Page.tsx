function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className='bg-white m-auto max-w-[960px] py-12 transition-all'>
      {children}
    </main>
  );
}

export default Page;
