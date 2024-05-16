

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";


export default function StriveExcel () {
    const ref = useRef(null);

    const isInView = useInView(ref, {margin: "420px 0px 220px 0px", amount: "all"})


    return (
        <section ref={ref} className="flex flex-col justify-center items-center w-full py-6 px-12 gap-24">
            <motion.p
            initial={{
                opacity: 0,
                y: 24,
            }}
            animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 24,
                transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                }
            }}
            className="text-5xl font-bold">We <span className="text-default-accent">Strive</span> and <span className="text-default-base">Excel</span> For You</motion.p>

            <motion.section
                className="flex justify-center items-start gap-32 leading-relaxed">
                {/* Part One */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 12,
                    }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 12,
                        transition: {
                            duration: 0.35,
                            ease: "easeOut",
                            delay: 0.15,
                        }
                    }}
                        className="h-full w-full flex flex-col justify-center items-start gap-4">
                            {/* Icon Truck */}
                            <div className="w-12 h-12 bg-default-accent rounded-xl p-2">
                                <svg viewBox="0 -1 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.31 16.826C12.2864 17.9963 11.3464 18.9278 10.2052 18.9118C9.06401 18.8957 8.14927 17.9382 8.15697 16.7676C8.16467 15.5971 9.09191 14.6522 10.2332 14.652C10.7897 14.6578 11.3212 14.8901 11.7106 15.2978C12.1001 15.7055 12.3157 16.2552 12.31 16.826V16.826Z" stroke="#E9EAF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path fillRule="evenodd" clipRule="evenodd" d="M22.2014 16.826C22.1778 17.9963 21.2378 18.9278 20.0966 18.9118C18.9554 18.8957 18.0407 17.9382 18.0484 16.7676C18.0561 15.5971 18.9833 14.6522 20.1246 14.652C20.6811 14.6578 21.2126 14.8901 21.602 15.2978C21.9915 15.7055 22.2071 16.2552 22.2014 16.826V16.826Z" stroke="#E9EAF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M17.8032 17.576C18.2174 17.576 18.5532 17.2402 18.5532 16.826C18.5532 16.4118 18.2174 16.076 17.8032 16.076V17.576ZM12.31 16.076C11.8958 16.076 11.56 16.4118 11.56 16.826C11.56 17.2402 11.8958 17.576 12.31 17.576V16.076ZM17.0571 16.826C17.0571 17.2402 17.3928 17.576 17.8071 17.576C18.2213 17.576 18.5571 17.2402 18.5571 16.826H17.0571ZM18.5571 11.559C18.5571 11.1448 18.2213 10.809 17.8071 10.809C17.3928 10.809 17.0571 11.1448 17.0571 11.559H18.5571ZM17.8071 16.076C17.3928 16.076 17.0571 16.4118 17.0571 16.826C17.0571 17.2402 17.3928 17.576 17.8071 17.576V16.076ZM18.0518 17.576C18.466 17.576 18.8018 17.2402 18.8018 16.826C18.8018 16.4118 18.466 16.076 18.0518 16.076V17.576ZM22.189 16.0762C21.7749 16.0852 21.4465 16.4281 21.4555 16.8423C21.4644 17.2564 21.8074 17.5848 22.2215 17.5758L22.189 16.0762ZM24.4 14.485L25.1499 14.4718C25.1492 14.4331 25.1455 14.3946 25.1389 14.3565L24.4 14.485ZM24.63 11.4305C24.559 11.0224 24.1706 10.7491 23.7625 10.8201C23.3544 10.8911 23.0812 11.2794 23.1521 11.6875L24.63 11.4305ZM17.8031 6.127C17.3889 6.127 17.0531 6.46279 17.0531 6.877C17.0531 7.29121 17.3889 7.627 17.8031 7.627V6.127ZM21.2849 6.877L21.2849 7.62702L21.2897 7.62698L21.2849 6.877ZM22.8737 7.56387L22.327 8.07731L22.327 8.07731L22.8737 7.56387ZM23.4835 9.218L22.7342 9.18603C22.7319 9.23979 22.7354 9.29363 22.7446 9.34663L23.4835 9.218ZM23.1522 11.6876C23.2232 12.0957 23.6116 12.3689 24.0197 12.2979C24.4278 12.2268 24.701 11.8384 24.6299 11.4304L23.1522 11.6876ZM18.5531 6.877C18.5531 6.46279 18.2174 6.127 17.8031 6.127C17.3889 6.127 17.0531 6.46279 17.0531 6.877H18.5531ZM17.0531 11.559C17.0531 11.9732 17.3889 12.309 17.8031 12.309C18.2174 12.309 18.5531 11.9732 18.5531 11.559H17.0531ZM17.0531 6.877C17.0531 7.29121 17.3889 7.627 17.8031 7.627C18.2174 7.627 18.5531 7.29121 18.5531 6.877H17.0531ZM17.8031 6.077L17.0531 6.0722V6.077H17.8031ZM16.7657 5L16.77 4.25H16.7657V5ZM7.42037 5L7.42037 4.24999L7.41679 4.25001L7.42037 5ZM6.68411 5.31693L6.14467 4.79587L6.14467 4.79587L6.68411 5.31693ZM6.382 6.075L7.13201 6.075L7.13199 6.07158L6.382 6.075ZM6.382 15.75L7.132 15.7534V15.75H6.382ZM6.68411 16.5081L6.14467 17.0291L6.14467 17.0291L6.68411 16.5081ZM7.42037 16.825L7.41679 17.575H7.42037V16.825ZM8.1526 17.575C8.56681 17.575 8.9026 17.2392 8.9026 16.825C8.9026 16.4108 8.56681 16.075 8.1526 16.075V17.575ZM17.8051 10.808C17.3909 10.808 17.0551 11.1438 17.0551 11.558C17.0551 11.9722 17.3909 12.308 17.8051 12.308V10.808ZM23.893 12.308C24.3072 12.308 24.643 11.9722 24.643 11.558C24.643 11.1438 24.3072 10.808 23.893 10.808V12.308ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM4.05175 7.75C4.46596 7.75 4.80175 7.41421 4.80175 7C4.80175 6.58579 4.46596 6.25 4.05175 6.25V7.75ZM1.975 9.25C1.56079 9.25 1.225 9.58579 1.225 10C1.225 10.4142 1.56079 10.75 1.975 10.75V9.25ZM3.925 10.75C4.33921 10.75 4.675 10.4142 4.675 10C4.675 9.58579 4.33921 9.25 3.925 9.25V10.75ZM2.56975 12.25C2.15554 12.25 1.81975 12.5858 1.81975 13C1.81975 13.4142 2.15554 13.75 2.56975 13.75V12.25ZM3.925 13.75C4.33921 13.75 4.675 13.4142 4.675 13C4.675 12.5858 4.33921 12.25 3.925 12.25V13.75ZM17.8032 16.076H12.31V17.576H17.8032V16.076ZM18.5571 16.826V11.559H17.0571V16.826H18.5571ZM17.8071 17.576H18.0518V16.076H17.8071V17.576ZM22.2215 17.5758C23.8876 17.5397 25.1791 16.1341 25.1499 14.4718L23.6501 14.4982C23.6655 15.3704 22.9939 16.0587 22.189 16.0762L22.2215 17.5758ZM25.1389 14.3565L24.63 11.4305L23.1521 11.6875L23.6611 14.6135L25.1389 14.3565ZM17.8031 7.627H21.2849V6.127H17.8031V7.627ZM21.2897 7.62698C21.6768 7.62448 22.0522 7.7847 22.327 8.07731L23.4204 7.05042C22.8641 6.4581 22.0909 6.12177 21.28 6.12702L21.2897 7.62698ZM22.327 8.07731C22.6025 8.37065 22.7519 8.7712 22.7342 9.18603L24.2328 9.24997C24.2675 8.43728 23.976 7.642 23.4204 7.05042L22.327 8.07731ZM22.7446 9.34663L23.1522 11.6876L24.6299 11.4304L24.2224 9.08937L22.7446 9.34663ZM17.0531 6.877V11.559H18.5531V6.877H17.0531ZM18.5531 6.877V6.077H17.0531V6.877H18.5531ZM18.5531 6.0818C18.5562 5.60485 18.3745 5.14259 18.0422 4.79768L16.9619 5.83829C17.0188 5.8974 17.0537 5.98123 17.0532 6.0722L18.5531 6.0818ZM18.0422 4.79768C17.7094 4.45212 17.2522 4.25277 16.77 4.25001L16.7615 5.74999C16.8331 5.7504 16.9056 5.77984 16.9619 5.83829L18.0422 4.79768ZM16.7657 4.25H7.42037V5.75H16.7657V4.25ZM7.41679 4.25001C6.93498 4.25231 6.4778 4.45098 6.14467 4.79587L7.22355 5.83799C7.27989 5.77967 7.3524 5.75033 7.42396 5.74999L7.41679 4.25001ZM6.14467 4.79587C5.81216 5.1401 5.62983 5.60177 5.63201 6.07843L7.13199 6.07158C7.13158 5.98066 7.16659 5.89696 7.22355 5.83799L6.14467 4.79587ZM5.632 6.075V15.75H7.132V6.075H5.632ZM5.63201 15.7466C5.62983 16.2232 5.81216 16.6849 6.14467 17.0291L7.22355 15.987C7.16659 15.928 7.13158 15.8443 7.13199 15.7534L5.63201 15.7466ZM6.14467 17.0291C6.4778 17.374 6.93498 17.5727 7.41679 17.575L7.42396 16.075C7.3524 16.0747 7.27988 16.0453 7.22355 15.987L6.14467 17.0291ZM7.42037 17.575H8.1526V16.075H7.42037V17.575ZM17.8051 12.308H23.893V10.808H17.8051V12.308ZM1 7.75H4.05175V6.25H1V7.75ZM1.975 10.75H3.925V9.25H1.975V10.75ZM2.56975 13.75H3.925V12.25H2.56975V13.75Z" fill="#E9EAF5"></path> </g></svg>
                            </div>
                            <div className="py-4">
                                <p className="text-xl font-bold py-2">Nationwide Service</p>
                                <p className="text-base">Have a product that needs to be delivered far? No problem, we’ll be able to deliver them anywhere you need it to be.</p>
                            </div>
                            <div className="mt-auto px-6 py-2 rounded border-2 border-default-accent cursor-pointer hover:bg-default-accent hover:text-white transition-colors duration-200 text-default-accent">
                                Learn More
                            </div>
                    </motion.div>
                    {/* Part Two */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 12,
                        }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            y: isInView ? 0 : 12,
                            transition: {
                                duration: 0.35,
                                ease: "easeOut",
                                delay: 0.25,
                            }
                        }}
                        className="h-full w-full flex flex-col justify-center items-start gap-4">
                            <div className="w-12 h-12 bg-default-accent rounded-xl p-2">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 14L9 19L20 8M6 8.88889L9.07692 12L16 5" stroke="#E9EAF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>
                            <div className="py-4">
                                <p className="text-xl font-bold py-2">A Fleet you can count on</p>
                                <p className="text-base">We always make sure that you’re goods are safe with us. Our Vehicles are well maintained and our fleet are always ready for your needs! 24/7 guaranteed.</p>
                            </div>
                            <div className="mt-auto px-6 py-2 rounded border-2 border-default-accent cursor-pointer hover:bg-default-accent hover:text-white transition-colors duration-200 text-default-accent">
                                Learn More
                            </div>
                    </motion.div>
                    {/* Part Three */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 12,
                        }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            y: isInView ? 0 : 12,
                            transition: {
                                duration: 0.35,
                                ease: "easeOut",
                                delay: 0.35,
                            }
                        }}
                        className="h-full w-full flex flex-col justify-center items-start gap-4">
                            <div className="w-12 h-12 bg-default-accent rounded-xl p-2">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#E9EAF5" strokeWidth="1.5"></circle> <path d="M12 8V12L14.5 14.5" stroke="#E9EAF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>
                            <div className="py-4">
                                <p className="text-xl font-bold py-2">On-Time</p>
                                <p className="text-base">Need you goods to be deliver on time? Need no more, our fleet are ready to handle even the most time restricted deliveries.</p>
                            </div>
                            <div className="mt-auto px-6 py-2 rounded border-2 border-default-accent cursor-pointer hover:bg-default-accent hover:text-white transition-colors duration-200 text-default-accent">
                                Learn More
                            </div>
                    </motion.div>
            </motion.section>

        </section>
    );
}