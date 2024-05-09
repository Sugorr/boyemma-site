

import PartnersImg from "../assets/partners-img.png"

export default function OurPartners () {
    return (
        <section className="flex justify-center items-center gap-24 px-12 py-6 mt-56">
            <p className="text-4xl font-bold">Our Partners</p>
            <div className="">
                <img src={PartnersImg} alt="" />
            </div>
        </section>
    );
}