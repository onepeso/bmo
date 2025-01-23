"use client"

import Head from 'next/head'
import {useEffect} from 'react'

export default function WaiverPage() {
    useEffect(() => {
        // Load Tally widget scripts
        const script = document.createElement('script')
        script.src = 'https://tally.so/widgets/embed.js'
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script) // Cleanup script on component unmount
        }
    }, [])

    return (
        <div className="bg-gray-100 text-black min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <Head>
                <script src="https://tally.so/widgets/embed.js" async></script>
            </Head>

            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">BMO Elite Waiver</h1>

                {/* Embed the Tally form */}
                <iframe
                    data-tally-src="https://tally.so/embed/wdKeyD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    title="BMO Elite Waiver"
                ></iframe>
            </div>
        </div>
    )
}
