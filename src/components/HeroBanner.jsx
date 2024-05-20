
import { motion }  from "framer-motion";
import Truck from "../assets/banner-img.png"
import Header from "./Header";

export default function HeroBanner () {
    return (
        <section className="relative flex flex-col justify-start items-center h-screen w-full gap-12 px-12">
            <Header />
            <section className="relative flex justify-between w-full">
                {/* Text Content */}
                <section className="relative w-full flex flex-col justify-center gap-2">
                    <motion.h2
                        initial={{
                            y: -20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                ease: "easeIn",
                                duration: 0.5,
                                delay: 0.2,
                            }
                        }}
                        className="text-default-accent text-xl">
                            We Value our Customer’s Satisfaction. 
                    </motion.h2>
                    <motion.h1
                        initial={{
                            y: 100,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                ease: "easeInOut",
                                duration: 0.5,
                                delay: 0.2,
                            }
                        }}
                        className="text-8xl font-extrabold leading-tight">
                            Logistics,
                    </motion.h1>
                    <motion.h1
                        initial={{
                            y: 100,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                ease: "easeInOut",
                                duration: 0.5,
                                delay: 0.4,
                            }
                        }}
                        className="text-8xl font-extrabold leading-tight">
                            Simplified.
                    </motion.h1>
                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                ease: "easeOut",
                                duration: 1.75,
                                delay: 0.7,
                            }
                        }}
                        className="opacity-75 mt-12">
                            Boyemma Trucking Services is your go-to partner for End to End Transportation Services that effectively and efficiently transports your good’s and/or services to your valued clients.
                    </motion.p>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                ease: "easeOut",
                                duration: 1.75,
                                delay: 0.4,
                            }
                        }}
                        className="flex gap-6 mt-16">
                            <div className="px-6 py-3 bg-default-base text-white hover:bg-default-accent cursor-pointer transition-colors duration-200 rounded-xl flex items-center">Contact Us</div>
                            <div className="px-6 py-3 bg-transparent border-2 border-default-accent cursor-pointer hover:bg-default-accent hover:text-white transition-colors duration-200 text-default-accent rounded-xl flex items-center">Read More</div>
                    </motion.div>
                </section>

                {/* Truck Image */}
                <div className="relative w-full">
                    <motion.div
                        initial={{
                            x: 100,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                ease: "easeInOut",
                                type: "spring",
                                duration: 0.75,
                                delay: 1,
                            }
                        }}
                        className="w-[170%]">
                            <img src={Truck} alt="truck-img"/>
                    </motion.div>
                </div>
            </section>
        </section>
    );
}