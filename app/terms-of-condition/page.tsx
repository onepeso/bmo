import React from "react";

export default function TermsAndConditions() {
    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Terms and Conditions for BMO Elite Performance</h1>
                <p className="text-gray-600 text-sm mb-6">Effective Date: 1/22/25</p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
                    <p>
                        By accessing this website, you accept these Terms and Conditions in full. If you do not agree,
                        please do not use our website.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">2. Contact Information</h2>
                    <p>BMO Elite Performance</p>
                    <p>761 Opequon Ln, Kearneysville, WV 25430</p>
                    <p>Phone: 681-260-1421</p>
                    <p>Email: olivobaseball2121@gmail.com</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">3. Use of Cookies</h2>
                    <p>
                        We use cookies to enhance your experience on our website. By using our site, you consent to our
                        cookie policy.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
                    <p>
                        All content on this website is owned by BMO Elite Performance. You may not republish, sell, or
                        distribute any material without express permission.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">5. User Comments</h2>
                    <p>
                        You may post comments on our website, but you are responsible for the content you share. We do
                        not endorse or take responsibility for user comments.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">6. Linking to Our Site</h2>
                    <p>
                        Certain organizations may link to our website without prior approval, provided the links are not
                        misleading and do not imply endorsement. All other linking requests must be approved by us.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">7. Content Liability</h2>
                    <p>
                        We are not responsible for content on external websites that link to ours. You agree to
                        indemnify us against any claims arising from your website.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">8. Disclaimer</h2>
                    <p>
                        We do not guarantee the accuracy or completeness of the information on our website. We are not
                        liable for any damages arising from your use of the site.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
                    <p>
                        We may update these Terms and Conditions at any time. Your continued use of the website
                        constitutes acceptance of the new terms.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
                    <p>
                        For questions or concerns about these Terms and Conditions, please contact us at the information
                        provided above.
                    </p>
                </section>

                <footer className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} BMO Elite Performance. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
