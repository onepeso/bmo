import { Button } from "@/components/ui/button";
import Link from "next/link";

const CustomBanner = () => {
  return (
    <section className="bg-orange-500 p-2 flex flex-col md:flex-row md:justify-center items-center gap-2">
      <p className="text-sm font-bold text-white">
        Our first summer camps happening this June and July 2025!{" "}
      </p>
      <Link href="/services/camps-and-events">
        <Button variant={"secondary"}> Register </Button>
      </Link>
    </section>
  );
};

export default CustomBanner;
