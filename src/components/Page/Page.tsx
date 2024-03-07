function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className='bg-white xl:px-60 md:px-36 sm:px-12 px-12 py-12 transition-all'>
      {children}
    </main>
  );
}

export default Page;
