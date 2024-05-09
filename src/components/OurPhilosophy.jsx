

import MissionImg from "../assets/mission-img.jpg"
import VisionImg from "../assets/vision-img.jpg"
import StoryImg from "../assets/story-img.jpg"


export default function OurPhilosphy () {
    return (
        <section className="flex flex-col justify-between items-center w-full gap-40 py-6 mt-12">
            <section className="w-full text-center">
                <p className="text-6xl font-extrabold my-4">Our Philosophy</p>
                <p className="text-2xl text-default-base">We Value our Customer’s Satisfaction</p>
            </section>

            <section className="flex flex-col gap-36">
                {/* Mission */}
                <section className="flex w-full">
                    {/* Content */}
                    <section className="flex flex-col gap-12 w-full px-12">
                        <div className="flex items-center gap-4 text-4xl">
                            <div className="p-2 h-12 w-12 bg-default-accent rounded-full">
                                <svg fill="#E9EAF5" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>hand-holding</title> <path d="M29.064 11.92c-0.421-0.176-0.911-0.279-1.424-0.279-0.576 0-1.122 0.129-1.611 0.36l0.023-0.010-5.778 2.596c0.003-0.047 0.026-0.088 0.026-0.135-0.014-1.371-1.129-2.477-2.502-2.477-0.069 0-0.136 0.003-0.204 0.008l0.009-0.001h-3.783l-4.76-1.394c-0.062-0.019-0.134-0.030-0.209-0.030-0.001 0-0.002 0-0.002 0h-2.169v-0.758c-0-0.414-0.336-0.75-0.75-0.75h-3.883c-0.414 0-0.75 0.336-0.75 0.75v0 12.208c0 0.414 0.336 0.75 0.75 0.75h3.883c0.414-0 0.75-0.336 0.75-0.75v0-1.004c1.818 0.284 3.446 0.742 4.988 1.366l-0.15-0.054c1.159 0.416 2.497 0.656 3.891 0.656 1.607 0 3.139-0.319 4.536-0.898l-0.079 0.029c1.243-0.553 2.298-1.136 3.297-1.799l-0.082 0.051c0.338-0.209 0.674-0.418 1.014-0.619 1.641-0.971 2.951-1.819 4.129-2.671 0.58-0.413 1.086-0.822 1.567-1.257l-0.015 0.013c0.37-0.301 0.666-0.679 0.865-1.11l0.008-0.019c0.032-0.080 0.050-0.172 0.050-0.269 0-0.056-0.006-0.111-0.018-0.164l0.001 0.005c-0.147-1.016-0.756-1.866-1.603-2.338l-0.016-0.008zM5.181 21.26h-2.383v-10.708h2.383zM28.719 14.759c-0.412 0.37-0.861 0.73-1.328 1.063l-0.047 0.032c-1.137 0.822-2.412 1.647-4.014 2.596-0.348 0.205-0.691 0.418-1.037 0.631-0.855 0.574-1.838 1.121-2.866 1.586l-0.13 0.052c-1.152 0.473-2.49 0.748-3.891 0.748-1.203 0-2.358-0.202-3.435-0.575l0.074 0.022c-1.555-0.652-3.364-1.15-5.25-1.41l-0.115-0.013v-7.432h2.061l4.76 1.394c0.062 0.019 0.134 0.030 0.209 0.030 0.001 0 0.002 0 0.002 0h3.89c0.883 0 1.197 0.522 1.197 0.97s-0.314 0.97-1.197 0.97h-6.809c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h7.781c0.111-0 0.216-0.024 0.311-0.067l-0.005 0.002 7.795-3.502c0.287-0.132 0.623-0.21 0.977-0.21 0.266 0 0.521 0.043 0.76 0.124l-0.017-0.005c0.382 0.229 0.658 0.604 0.75 1.045l0.002 0.010c-0.135 0.159-0.276 0.302-0.427 0.434l-0.005 0.004z"></path> </g></svg>
                            </div>
                            <p>Mission</p>
                        </div>
                        <section>
                            To operate a 24 hours/day to provide our customers with reliable service to give our customers and great satisfaction and great reliability. To provide our Customers with security of their cargo in mind. To provide trucks and services needed that enables us to move your products to any point of the Philippines.
                        </section>
                    </section>
                    {/* Image */}
                    <div className="relative flex items-center justify-center w-full px-12">
                        <div>
                            <img className="h-[420px] w-[420px] rounded-full object-cover object-center" src={MissionImg} alt="" />
                        </div>
                    </div>
                </section>

                {/* Vision */}
                <section className="flex w-full">
                    {/* Image */}
                    <div className="relative flex items-center justify-center w-full px-12">
                        <div>
                            <img className="h-[420px] w-[420px] rounded-full object-cover object-center" src={VisionImg} alt="" />
                        </div>
                    </div>
                    {/* Content */}
                    <section className="flex flex-col gap-12 w-full px-12">
                        <div className="flex items-center gap-4 text-4xl">
                            <div className="p-3 h-12 w-12 bg-default-accent rounded-full">
                                <svg fill="#E9EAF5" viewBox="0 0 512 512" id="_78_Circle-Full" data-name="78 Circle-Full" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_111" data-name="Path 111" d="M256,512C114.625,512,0,397.375,0,256S114.625,0,256,0,512,114.625,512,256,397.375,512,256,512Zm0-448C149.969,64,64,149.969,64,256s85.969,192,192,192,192-85.969,192-192S362.031,64,256,64Zm0,320A128,128,0,1,1,384,256,128.006,128.006,0,0,1,256,384Z" fill-rule="evenodd"></path> </g></svg>
                            </div>
                            <p>Vision</p>
                        </div>
                        <section>
                            We believe in Continuous growth. We have a goal-oriented vision that clearly identifies our future. With a view of being the one of the Philippine’s best logistics companies that provide logistical solution for every enterprise needs. We Continue to Innovate to further develop our position in the logistics and trucking industry. To Achieve this vision we continuously, proactively and constantly find new innovative possibilities to provide our customers with the best and most reliable services.
                        </section>
                    </section>

                </section>
                {/* Our Story */}
                <section className="flex w-full">
                    {/* Content */}
                    <section className="flex flex-col justify-start items-start gap-12 w-full px-12">
                        <div className="flex items-center gap-4 text-4xl">
                            <div className="p-2 h-12 w-12 bg-default-accent rounded-full">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21" stroke="#E9EAF5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                            <p>Our Story</p>
                        </div>
                        <section>
                        From humble beginnings, Boyemma Trucking Services (Formertly Boyemma Trading) started at the year 2012 with only 2 ten-wheeler trucks with their garage located on San Leonardo, Nueva Ecija. A great business owned, founded, and managed by Emmaruth Cooper which had a great experience in the trucking industry. Boyemma Trucking Services operated with a team of gratefully skilled and managed workers and drivers. Now it owns 35 ten-wheeler wing van trucks and 3 trailer truck equipped...
                        </section>
                        <div className="text-white bg-default-accent rounded-full px-8 py-3">
                            Learn More
                        </div>
                    </section>
                    <div className="relative flex items-center justify-center w-full px-12">
                        <div>
                            <img className="h-[420px] w-[420px] rounded-full object-cover object-center" src={StoryImg} alt="" />
                        </div>
                    </div>
                </section>
            </section>
            
        </section>
    );
}