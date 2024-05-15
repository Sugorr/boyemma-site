import { useRef } from "react";
import { motion, useInView } from "framer-motion";


export default function WhoEffect () {
    const firstRef = useRef(null);
    const secondRef = useRef(null);

    const firstIsInView = useInView(firstRef, {margin: "320px 0px 120px 0px", amount: "all"})
    const secondIsInView = useInView(secondRef, {margin: "320px 0px 120px 0px", amount: "all"})

    return (
        <section className="h-screen flex flex-col py-6 px-12 mt-48 gap-48 w-full">
            <motion.section
                ref={firstRef}
                className="relative flex flex-col gap-16 w-full">
                    <div className="absolute -top-64 -right-96 opacity-10 -z-20 rounded-full bg-default-accent h-[720px] w-[720px] blur-3xl"></div>
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 24,
                        }}
                        animate={{
                            opacity: firstIsInView ? 1 : 0,
                            y: firstIsInView ? 0 : 24,
                            transition: {
                                duration: 0.75,
                                ease: "easeOut",
                            }
                        }}
                        className="text-8xl font-bold">Who We Are, <br /><span className="text-default-accent">What We Value</span></motion.p>
                    <motion.p
                        initial={{
                            opacity: 0,
                            x: 120,
                        }}
                        animate={{
                            opacity: firstIsInView ? 1 : 0,
                            x: firstIsInView ? 0 : 120,
                            transition: {
                                duration: 0.75,
                                ease: "easeInOut",
                                type: "spring",
                                delay: 0.35,
                            }
                        }}
                        className="text-xl w-full text-center">Boyemma trucking services is your go-to partner for <br /> end to end transportaion services that effeciently transport <br /> your good’s and/or services to your valued clients.</motion.p>
            </motion.section>
            <motion.section
                ref={secondRef}
                className="relative flex flex-col gap-16 w-full">
                    <div className="absolute -top-32 -left-96 opacity-10 -z-20 rounded-full bg-default-base h-[720px] w-[720px] blur-3xl"></div>
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 24,
                        }}
                        animate={{
                            opacity: secondIsInView ? 1 : 0,
                            y: secondIsInView ? 0 : 24,
                            transition: {
                                duration: 0.75,
                                ease: "easeOut",
                            }
                        }}
                        className="text-8xl font-bold text-right">Effective<br /><span className="text-default-base">Collaboration</span></motion.p>
                    <motion.p
                        initial={{
                            opacity: 0,
                            x: -120,
                        }}
                        animate={{
                            opacity: secondIsInView ? 1 : 0,
                            x: secondIsInView ? 0 : -120,
                            transition: {
                                duration: 0.75,
                                ease: "easeInOut",
                                type: "spring",
                                delay: 0.35,
                            }
                        }}
                        className="text-xl w-full text-center">Our staff coordinates with you 24/7 in <br /> able to efficiently provide you with a servce that <br /> you can rely on.</motion.p>
            </motion.section>
        </section>
    );
}