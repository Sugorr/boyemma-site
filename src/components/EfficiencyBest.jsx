
import { motion, useInView } from "framer-motion";
import Container from "../assets/container-img.png"
import { useRef } from "react";

export default function EfficiencyBest () {
    const ref = useRef(null);

    const isInView = useInView(ref, {margin: "420px 0px 340px 0px", amount: "all"})

    return (
        <section ref={ref} className="flex justify-between items-center w-full py-6 px-12 mt-24">
            {/* Content */}
            <section className="flex flex-col gap-24 w-full">
                <motion.p
                initial={{
                    opacity: 0,
                    x: -15,
                }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    x:  isInView ? 0 : -15,
                    transition: {
                        duration: 0.25,
                        ease: "easeOut",
                        delay: 0.25,
                    }
                }}
                className="font-bold text-6xl">Efficiency at it's <span className="text-default-base">Best</span></motion.p>
                <section className="grid grid-cols-2 grid-rows-2 gap-16">
                    <motion.section
                        initial={{
                            opacity: 0,
                            y: 8,
                        }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            y:  isInView ? 0 : 8,
                            transition: {
                                duration: 0.25,
                                ease: "easeOut",
                                delay: 0.35,
                            }
                        }}
                        className="flex items-center gap-4">
                            <div className="h-6 w-6 bg-default-accent rounded"></div>
                            <p><span className="font-bold">E</span>lectronic Billings</p>
                    </motion.section>
                    <motion.section
                        initial={{
                            opacity: 0,
                            y: 8,
                        }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            y:  isInView ? 0 : 8,
                            transition: {
                                duration: 0.25,
                                ease: "easeOut",
                                delay: 0.4,
                            }
                        }}
                        className="flex items-center gap-4">
                            <div className="h-6 w-6 bg-default-accent rounded"></div>
                            <p><span className="font-bold">S</span>tatements of Accounts</p>
                    </motion.section>
                    <motion.section
                        initial={{
                            opacity: 0,
                            y: 8,
                        }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            y:  isInView ? 0 : 8,
                            transition: {
                                duration: 0.25,
                                ease: "easeOut",
                                delay: 0.5,
                            }
                        }}
                        className="flex items-center gap-4">
                            <div className="h-6 w-6 bg-default-accent rounded"></div>
                            <p><span className="font-bold">G</span>PS Tracking on all fleets</p>
                    </motion.section>
                    <motion.section
                        initial={{
                            opacity: 0,
                            y: 8,
                        }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            y:  isInView ? 0 : 8,
                            transition: {
                                duration: 0.25,
                                ease: "easeOut",
                                delay: 0.6,
                            }
                        }}
                        className="flex items-center gap-4">
                            <div className="h-6 w-6 bg-default-accent rounded"></div>
                            <p><span className="font-bold">M</span>obile Commerce Ready</p>
                    </motion.section>
                </section>
            </section>

            {/* Container Image */}
            <div className="relative w-full p-12">
                <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    transition: {
                        duration: 0.7,
                        ease: "easeOut",
                        type: "tween",
                    }
                }}
                className="w-[170%]">
                    <img src={Container} alt="container-img"/>
                </motion.div>
            </div>
        </section>
    );
}