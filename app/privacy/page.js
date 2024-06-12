'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';

export default function Privacy() {
    return (
        <div className='relative w-full min-h-[300dvh] flex flex-col bg-[#00001d]'>
            <Header />
            <main className="flex text-white min-h-[600dvh] lg:min-h-[400dvh] flex-col items-center relative mb-[5rem]">
                <div className='relative w-full'>
                    <div className='z-[10] absolute -top-[100px] sm:-top-[100px] w-full h-max flex flex-col items-center px-4 sm:px-0'>
                        <h1 className='text-center text-5xl font-bold tracking-[5px] leading-[80px] text-[#38F7A1] green-glow mt-[350px] whitespace-nowrap'>
                            Privacy Policy
                        </h1>
                        <p className='text-sm font-medium max-w-[600px] text-justify mt-[50px]'>
                            Last updated: 12.06.2024
                        </p>
                        <div className='flex flex-col gap-y-4 w-full max-w-[650px] items-center mt-10'>
                            <h2 className='text-2xl font-semibold'>1. Introduction</h2>
                            <p>
                                Welcome to evilwizards.xyz (“we,” “our,” “us”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy policy, or our practices with regards to your personal information, please contact us at [Your Contact Information].
                            </p>
                            <h2 className='text-2xl font-semibold'>2. Information We Collect</h2>
                            <p>
                                We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website (such as using our wallets), or otherwise contacting us.
                            </p>
                            <p>
                                The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include the following:
                            </p>
                            <p>
                                Email addresses: We may collect your email address if you choose to subscribe to our newsletter or other communications.
                                Wallet addresses: If you connect your digital wallet to our site, we will collect the wallet address. We do not share this information with third parties.
                            </p>
                            <h2 className='text-2xl font-semibold'>3. Use of Your Information</h2>
                            <p>
                                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We use the information we collect or receive:
                            </p>
                            <p>
                                To send you marketing and promotional communications. We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences.
                                To manage user accounts. We may use your information for the purposes of managing our account and keeping it in working order.
                                To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.
                                To respond to legal requests and prevent harm. If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.
                            </p>
                            <h2 className='text-2xl font-semibold'>4. Sharing Your Information</h2>
                            <p>
                                We do not share your personal information with third parties except as described in this policy or with your consent. We may disclose your personal information in the following circumstances:
                            </p>
                            <p>
                                Compliance with Laws: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
                                Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                            </p>
                            <h2 className='text-2xl font-semibold'>5. Security of Your Information</h2>
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                            </p>
                            <h2 className='text-2xl font-semibold'>6. Your Privacy Rights</h2>
                            <p>
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>
                            <p>
                                The right to access – You have the right to request copies of your personal data.
                                The right to rectification – You have the right to request that we correct any information you believe is inaccurate or incomplete.
                            </p>
                            <h2 className='text-2xl font-semibold'>Contact Information</h2>
                            <p>
                                If you have any questions or comments about this policy, you may contact us at [Your Contact Information].
                            </p>
                            <p>All rights reserved by Fusion Up Studio.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
