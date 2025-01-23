"use client"

import {useEffect} from 'react'
import {FeedbackForm} from "@/app/core/forms/FeedbackForm";

export default function FeedbackPage() {
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
        <FeedbackForm/>
    )
}
