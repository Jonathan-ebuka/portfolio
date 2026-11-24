import Navigation from "@/components/Navigation";
import ClientsMarquee from "@/components/ClientsMarquee";

export default function ClientsPage() {
  return (
    <div className="cursor-default h-screen overflow-hidden">
      <Navigation variant="light" />
      <ClientsMarquee />
    </div>
  );
}
