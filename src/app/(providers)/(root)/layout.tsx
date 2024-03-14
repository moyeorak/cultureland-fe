import Header from "./(home)/_components/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">{children}</div>
    </div>
  );
}

export default RootLayout;
