import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black flex flex-col items-center justify-center text-white h-24 mt-16">
      <p className="font-black text-xl">BMO Elite Performance</p>
      <p>761 opequon LN, Kearneysville WV</p>
      <section className="flex gap-2 text-bmo-primary">
        <Link className="hover:underline" href="/terms-of-condition">
          Terms of Condition
        </Link>
        <Link className="hover:underline" href="/privacy-policy">
          Privacy Policy
        </Link>
      </section>
    </footer>
  );
};
