

export default function WhoEffect () {
    return (
        <section className="h-screen flex flex-col py-6 px-12 mt-48 gap-48 w-full">
            <section className="relative flex flex-col gap-16 w-full">
                <div className="absolute -top-64 -right-96 opacity-10 -z-20 rounded-full bg-default-accent h-[720px] w-[720px] blur-3xl"></div>
                <p className="text-8xl font-bold">Who We Are, <br /><span className="text-default-accent">What We Value</span></p>
                <p className="text-xl w-full text-center">Boyemma trucking services is your go-to partner for <br /> end to end transportaion services that effeciently transport <br /> your good’s and/or services to your valued clients.</p>
            </section>
            <section className="relative flex flex-col gap-16 w-full">
                <div className="absolute -top-32 -left-96 opacity-10 -z-20 rounded-full bg-default-base h-[720px] w-[720px] blur-3xl"></div>
                <p className="text-8xl font-bold text-right">Effective<br /><span className="text-default-base">Collaboration</span></p>
                <p className="text-xl w-full text-center">Our staff coordinates with you 24/7 in <br /> able to efficiently provide you with a servce that <br /> you can rely on.</p>
            </section>
        </section>
    );
}