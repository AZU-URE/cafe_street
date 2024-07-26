import Navbar from "@/components/cafe/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full min-h-screen flex flex-col pb-0">
      <Navbar />
      <section className="mt-[5rem] flex-grow flex">{children}</section>
    </section>
  );
}
