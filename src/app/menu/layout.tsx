import Navbar from "@/components/navbar";
import BreadCrumb from "@/components/Breadcrumb";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      <BreadCrumb />
      {children}
    </section>
  );
}
