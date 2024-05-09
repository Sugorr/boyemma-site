


export default function Footer () {
    return (
        <footer className="flex flex-col justify-center items-center w-full bg-black text-white mt-12 px-12">
            <section className="flex max-w-[1280px] justify-between px-12 py-12">
                <section className="w-full pr-64">
                    <p className="text-2xl">Address</p>
                    <div className="py-2 text-md opacity-50">
                        <p>
                            <span className="font-bold">Garage South Luzon: </span>Boyemma Garage, Behind Shell San Cristobal, Brgy. San Cristobal, Calamba City, Laguna
                        </p>
                    </div>
                    <div className="py-2 text-md opacity-50">
                        <p>
                            <span className="font-bold">Garage (North Luzon): </span>Purok 6, Brgy. Nieves, San Leonardo, Nueva Ecija
                        </p>
                    </div>
                </section>

                <section className="flex flex-col gap-2 w-full">
                    <p className="py-2 text-2xl">Get Support</p>
                    <p className="text-md font-bold opacity-50">info@boyemma.com</p>
                    <p className="text-md font-bold opacity-50">Mon-Fri: 9:00 AM – 6:00 PM</p>
                    <p className="text-md font-bold opacity-50">+63 (049) 557 6677</p>
                </section>
            </section>
            <section className="text-center w-full border-t py-4 font-light text-xs border-white/25">
                © Copyright 2012 - 2024 | Copyright Boyemma Trucking Services | All Rights Reserved | Hosted in Calamba City, Laguna | Terms of Service | Privacy Policy
            </section>
        </footer>
    );
}