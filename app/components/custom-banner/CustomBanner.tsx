import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  // AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

const CustomBanner = () => {
  return (
    <section className="bg-orange-500 p-2 flex flex-col md:flex-row md:justify-center items-center gap-2">
      <p className="text-sm font-bold text-white">
        Welcome Tony Allen to the BMO Elite Team!
      </p>
      {/* <Link href="/services/camps-and-events">
        <Button variant={"secondary"}> Learn More </Button>
      </Link> */}
      <AlertDialog>
        <AlertDialogTrigger className="p-1 text-sm bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm">
          Learn More
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-5xl">
          <AlertDialogHeader>
            <AlertDialogTitle>
              <span className="text-orange-500">New Coach Alert</span> - Welcome
              Tony Allen to the BMO Elite Team!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-orange-500">
              <Image
                className="w-full h-[400px] object-cover object-top rounded-lg mb-3"
                alt="Tony Allen Coach"
                src="/images/tonyallen2.webp"
                width={500}
                height={500}
              />
              We&apos;re excited to officially welcome Coach Tony Allen to the BMO
              Elite Performance family starting September 1st!
            </AlertDialogDescription>
            <div className="flex flex-col gap-3">
<p>
              Tony Brings a strong and focused background in softball, with
              years of experience training and developing athletes in: <span className="text-orange-500">Pitching,
              Hitting, Speed & Agility.</span>
            </p>
            <p>
              His intense training style and passion for the game make him a
              perfect fit for our athletes looking to elevate their performance
              to the next level.
            </p>
            <p className="text-orange-500 font-bold">Contact Coach Tony directly at: 304-240-8427 or <Link href={"https://aandtathletictraining.setmore.com/book?step=time-slot&products=s95b03081fdc460a143e7fc96d13ac1881765204e&type=service&staff=ra7c3031d2565a742479c5c21769ac6190b26f2de-d&staffSelected=true"}>Book Now Online</Link></p>

            <p>
              Hel us give Coach Tony a warm welcome as he joins our mission to
              build stronger, smarter, and more competitive players!
            </p>
            </div>
            
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default CustomBanner;
