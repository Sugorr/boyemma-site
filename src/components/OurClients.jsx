

import ClientsImg from "../assets/clients-img.png"


export default function OurClients () {
    return (
        <section className="flex flex-col justify-center items-center gap-12 py-6 mt-48">
            <p className="text-4xl font-bold">Our Clients</p>
            <section className="flex justify-center items-center gap-16 select-none pointer-events-none">
                <img src={ClientsImg} alt="" />
            </section>
        </section>
    );
}