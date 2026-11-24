"use client";

const clients = [
  "HUMANS OF AGRICULTURE",
  "FRONTGATE",
  "CROWN POINT PASTORAL",
  "JBS AUSTRALIA",
  "ENMACH",
  "D.R. JOHNSTON",
  "SALEYARDS AUS",
  "MLA",
  "SEED TERMINATOR",
  "PEDIGREE",
  "AUSTRALIAN ORGANIC LTD",
  "GO.FARM",
  "FUTURE FARMERS NETWORK",
  "RLX",
  "MSD ANIMAL HEALTH",
  "FORAGE FILMS",
];

export default function ClientsMarquee() {
  const items = [...clients, ...clients];

  return (
    <section
      className="fixed inset-0 overflow-hidden"
      data-logo="dark"
      style={{ backgroundColor: "#e7371e" }}
    >
      <div className="clients-scroll flex flex-col items-center gap-4 px-4 md:gap-6 md:px-0">
        {items.map((name, i) => (
          <span
            key={i}
            className="client-name whitespace-nowrap text-center font-bold uppercase leading-none cursor-default"
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            {name}
          </span>
        ))}
      </div>

      <style jsx>{`
        .clients-scroll {
          will-change: transform;
          animation: scroll-up 30s linear infinite;
        }

        .client-name {
          color: #b22d1a;
          transition: color 0.3s ease;
        }

        .client-name:hover {
          color: #8b1a0e;
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}
