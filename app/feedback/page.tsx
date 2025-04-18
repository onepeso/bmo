import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FeedbackPage() {
    return (
        <>
        <main className="bg-gray-100 text-black min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <section className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold">Feedback Form</h2>
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <Image
            className="w-full h-32 object-cover rounded-lg"
            alt="Facility Pictures"
            src="/images/baseballsport.webp"
            width={500}
            height={500}
          />
        </div>
        <div className="mt-5">
            <p> At BMO Elite Performance, we&apos;re committed to providing the best possible service. We&apos;d love to hear your thoughts on how we can enhance your experience. Do you have any feedback or suggestions you&apos;d be willing to share?</p>
            <p className="my-5"> To provide feedback please click on the bottom below</p>
            <div className="text-center md:text-right">
            <Link  href={"https://g.page/r/CbDYnelga6eVEBM/review"}> <Button className="text-end"> Provide Feedback </Button></Link>
            </div>
      
        </div>
        </section>
        </main>
        </>
    )
}
