

import Container from "../assets/container-img.png"

export default function EfficiencyBest () {
    return (
        <section className="flex justify-between items-center w-full py-6 px-12 mt-24">
            {/* Content */}
            <section className="flex flex-col gap-24 w-full">
                <p className="font-bold text-6xl">Efficiency at it's <span className="text-default-base">Best</span></p>
                <section className="grid grid-cols-2 grid-rows-2 gap-16">
                    <section className="flex items-center gap-4">
                        <div className="h-6 w-6 bg-default-accent rounded-full"></div>
                        <p><span className="font-bold">E</span>lectronic Billings</p>
                    </section>
                    <section className="flex items-center gap-4">
                        <div className="h-6 w-6 bg-default-accent rounded-full"></div>
                        <p><span className="font-bold">S</span>tatements of Accounts</p>
                    </section>
                    <section className="flex items-center gap-4">
                        <div className="h-6 w-6 bg-default-accent rounded-full"></div>
                        <p><span className="font-bold">G</span>PS Tracking on all fleets</p>
                    </section>
                    <section className="flex items-center gap-4">
                        <div className="h-6 w-6 bg-default-accent rounded-full"></div>
                        <p><span className="font-bold">M</span>obile Commerce Ready</p>
                    </section>
                </section>
            </section>

            {/* Container Image */}
            <div className="relative w-full p-12">
                <div className="w-[170%]">
                    <img src={Container} alt="container-img"/>
                </div>
            </div>
        </section>
    );
}