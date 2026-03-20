import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Megaphone, Sparkles, X } from "lucide-react";

const CustomBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 px-4 py-3 shadow-md">
      {/* Subtle background pattern/texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Megaphone className="h-4 w-4 text-white" />
          </div>
          <p className="text-sm md:text-base font-black text-white uppercase tracking-wider italic">
            Check out our new Camps & Events!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="https://book.squareup.com/classes/q48wvj137cflkc/location/L21F7515YPQAE/classes?buttonTextColor=ffffff&color=000000&locale=en&referrer=so">
            <Button
              size="sm"
              className="bg-slate-950 hover:bg-white hover:text-slate-950 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 shadow-lg border-none text-xs uppercase tracking-widest"
            >
              Book Now
            </Button>
          </Link>

          {/* Styled Alert Dialog for New Coach */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="text-xs font-bold text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 transition-colors uppercase tracking-widest">
                New Coach Alert
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-3xl bg-slate-950 border-white/10 rounded-[2rem] p-0 overflow-hidden shadow-2xl">
              <div className="relative h-64 w-full">
                <Image
                  className="object-cover object-top"
                  alt="Tony Allen Coach"
                  src="/images/tonyallen2.webp"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <div className="flex items-center gap-2 mb-2 text-orange-500 font-black uppercase tracking-widest text-xs">
                    <Sparkles size={14} /> New Coach Alert
                  </div>
                  <AlertDialogTitle className="text-3xl font-black text-white tracking-tight">
                    Welcome Tony Allen
                  </AlertDialogTitle>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <AlertDialogDescription className="text-slate-300 text-lg leading-relaxed">
                  We're excited to officially welcome{" "}
                  <span className="text-white font-bold">Coach Tony Allen</span>{" "}
                  to the BMO Elite Performance family!
                </AlertDialogDescription>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-400 text-sm">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <p className="text-orange-500 font-bold mb-1 uppercase text-[10px] tracking-widest">
                      Specialties
                    </p>
                    <p className="text-white font-medium">
                      Pitching, Hitting, Speed & Agility
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <p className="text-orange-500 font-bold mb-1 uppercase text-[10px] tracking-widest">
                      Contact Directly
                    </p>
                    <p className="text-white font-medium underline underline-offset-4">
                      304-240-8427
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    asChild
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold flex-1 py-6 rounded-xl"
                  >
                    <Link href="https://aandtathletictraining.setmore.com/book">
                      Book Online Now
                    </Link>
                  </Button>
                  <AlertDialogAction className="bg-white/10 text-white border-white/10 hover:bg-white/20 flex-1 py-6 rounded-xl border transition-colors">
                    Close
                  </AlertDialogAction>
                </div>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
};

export default CustomBanner;
