'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { useEffect } from 'react';

export default function Terms() {
    useEffect(() => {
        // Ekstra işlemler için buraya ekleyebilirsiniz
    }, []);

    return (
        <div className='relative w-full min-h-[300dvh] flex flex-col bg-[#00001d]'>
            <Header />
            <main className="flex text-white min-h-[600dvh] lg:min-h-[320dvh] flex-col items-center relative mb-[5rem]">
                <div className='relative w-full'>
                    <div className='z-[10] absolute -top-[200px] lg:-top-[100px] w-full h-max flex flex-col items-center px-4 sm:px-0'>
                        <h1 className='text-center text-5xl font-bold tracking-[5px] leading-[80px] text-[#38F7A1] green-glow mt-[350px] whitespace-nowrap'>
                            Terms and Conditions
                        </h1>
                        <p className='text-sm font-medium max-w-[600px] text-justify mt-[50px]'>
                            Last updated: 12.06.2024
                        </p>
                        <div className='flex flex-col gap-y-4 w-full max-w-[650px] items-center mt-10'>
                            <h2 className='text-2xl font-semibold'>1. Introduction</h2>
                            <p>
                                Welcome to evilwizards.xyz (“we,” “our,” “us”). These Terms and Conditions (“Terms”) govern your use of our website and our games, including but not limited to [Game 1 Name] and [Game 2 Name] (collectively, the “Services”). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our Services.
                            </p>
                            <h2 className='text-2xl font-semibold'>2. Use of the Services</h2>
                            <p>
                                By using our Services, you represent and warrant that you are at least 18 years old or the legal age of majority in your jurisdiction, and that you have the legal capacity to enter into these Terms. You agree to use the Services for lawful purposes only and in accordance with these Terms.
                            </p>
                            <h2 className='text-2xl font-semibold'>3. Account Registration</h2>
                            <p>
                                To access certain features of the Services, you may be required to register an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for any activities or actions under your account.
                            </p>
                            <h2 className='text-2xl font-semibold'>4. Intellectual Property Rights</h2>
                            <p>
                                Unless otherwise indicated, the Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Fusion Up Studio, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                            </p>
                            <h2 className='text-2xl font-semibold'>5. Game Play and Fees</h2>
                            <p>
                                Our game [Game 1 Name] allows players to engage in “double or nothing” duels using Solana. As a service provider, we charge a fee on these transactions. We are not responsible for any winnings or losses incurred during gameplay. All financial transactions are final and non-refundable.
                            </p>
                            <h2 className='text-2xl font-semibold'>6. NFT Ownership and Value</h2>
                            <p>
                                We offer NFTs as part of our Services. You acknowledge that the value of NFTs can fluctuate over time and may decrease in value. We do not guarantee any financial return from purchasing or owning NFTs, and we are not responsible for any loss in value of your NFTs.
                            </p>
                            <h2 className='text-2xl font-semibold'>7. Disclaimer of Warranties</h2>
                            <p>
                                The Services are provided on an “as is” and “as available” basis. We make no warranties, expressed or implied, regarding the Services, including but not limited to their accuracy, reliability, or availability.
                            </p>
                            <h2 className='text-2xl font-semibold'>8. Limitation of Liability</h2>
                            <p>
                                To the fullest extent permitted by applicable law, Fusion Up Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your use of the Services; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein; (iii) any interruption or cessation of transmission to or from the Services; (iv) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Services by any third party; (v) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Services; and/or (vi) the defamatory, offensive, or illegal conduct of any third party.
                            </p>
                            <h2 className='text-2xl font-semibold'>9. Indemnification</h2>
                            <p>
                                You agree to indemnify, defend, and hold harmless Fusion Up Studio and its officers, directors, employees, contractors, agents, licensors, suppliers, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services, including, but not limited to, your User Contributions, any use of the Services' content, services, and products other than as expressly authorized in these Terms, or your use of any information obtained from the Services.
                            </p>
                            <h2 className='text-2xl font-semibold'>10. Governing Law</h2>
                            <p>
                                These Terms are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in [Your Country/State] for the resolution of any disputes.
                            </p>
                            <h2 className='text-2xl font-semibold'>11. Changes to These Terms</h2>
                            <p>
                                We may update these Terms from time to time in our sole discretion. If we make material changes, we will notify you by posting the updated Terms on the Website and updating the date at the top of these Terms. Your continued use of the Services following the posting of changes constitutes your acceptance of such changes.
                            </p>
                            <h2 className='text-2xl font-semibold'>12. Contact Information</h2>
                            <p>
                                If you have any questions about these Terms, please contact us at [Your Contact Information].
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