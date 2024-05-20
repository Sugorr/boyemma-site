


export default function GetInTouch () {
    return (
        <section className="relative flex flex-col justify-center items-center gap-16 w-full px-12 py-6 mt-48">
            <section className="relative flex flex-col gap-4">
                <p className="text-6xl font-bold">Get in Touch!</p>
                <p>Let us help you out with 3 convenient contact options.</p>
            </section>
            <section className="relative flex justify-center items-start h-full w-full">
                <section className="text-white relative flex flex-col gap-12 justify-start items-start shadow-md px-12 py-16 max-w-[640px] w-full bg-default-accent/75 backdrop-blur-xl z-10 rounded-xl">
                    {/* Email Section */}
                    <section className="flex items-start gap-2">
                        <div className="h-8 w-8">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#E9EAF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                        <section>
                            <p className="text-xl font-bold mb-4">Email</p>
                            <p>info@boyemma.com</p>
                        </section>
                    </section>
                    {/* TeleFax Section */}
                    <section className="flex items-start gap-2">
                        <div className="h-8 w-8">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#E9EAF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                        <section>
                            <p className="text-xl font-bold mb-4">TeleFax</p>
                            <p>+63 (049) 536 5191</p>
                        </section>
                    </section>
                    {/* Address Section */}
                    <section className="flex items-start gap-2">
                        <div className="h-8 w-8">
                            <svg fill="#E9EAF5" viewBox="-1.5 -1 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-gps"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.913 2.9L2.632 9.226l4.829 2.006a5.767 5.767 0 0 1 3.118 3.119l2.006 4.828L18.913 2.9zm1.847.682l-6.328 16.281c-.4 1.03-1.551 1.557-2.571 1.18a1.923 1.923 0 0 1-1.11-1.067l-2.007-4.83a3.845 3.845 0 0 0-2.079-2.078l-4.828-2.006C.833 10.645.375 9.486.814 8.472A2.05 2.05 0 0 1 1.949 7.38L18.23 1.052a1.945 1.945 0 0 1 2.53 2.53z"></path></g></svg>
                        </div>
                        <section>
                            <p className="text-xl font-bold mb-4">Address</p>
                            <p className="mb-2"><span className="font-bold">Garage South Luzon: </span>Boyemma Garage, Behind Shell San Cristobal, Brgy. San Cristobal, Calamba City, Laguna</p>
                            <p><span className="font-bold">Garage (North Luzon): </span>Purok 6, Brgy. Nieves, San Leonardo, Nueva Ecija</p>
                        </section>
                    </section>
                </section>
                <section className="absolute flex flex-col justify-end items-start top-64 left-0 shadow-md max-w-[640px] w-full h-[420px] px-8 py-12 -z-20 bg-white rounded-xl">
                    <p className="text-6xl font-bold px-[6px]">BOYEMMA</p>
                    <p className="text-3xl px-[8px]">HIGH-QUALITY SERVICES</p>
                </section>
                <section className="absolute top-32 right-0 shadow-md max-w-[640px] w-full h-[420px] -z-20 bg-default-base rounded-xl"></section>
            </section>
        </section>
    );
}