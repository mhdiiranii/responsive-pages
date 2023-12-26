const ContactUsAll = () => {
    return ( 
       <div>
            <div className="flex flex-col w-full px-4 md:px-16 container mx-auto items-center gap-16 mb-24">
                <h2 className="text-[#3A146A] max-md:text-center text-xl md:text-3xl xl:text-7xl">
                    Our teams are here for help
                </h2>
                <p className="text-lg font-semibold max-md:text-center">
                To contact us and resolve your problems, please fill out the form below.
                </p>
              <div className="flex flex-col container mx-auto bg-gradient-to-b px-10 py-14 from-[#FFFFFF] to-[#EDF4FC] drop-shadow-[0_5px_10px_rgb(0,0,0,0.07)]">
                    <div className="flex lg:justify-end max-lg:mb-14">
                        <h2 className="text-[#2F4B8A] text-xl font-semibold w-full lg:w-[55%] text-center ">
                                Contact Us
                        </h2>
                    </div>
                    <div className="flex max-md:flex-col-reverse gap-10 justify-center items-start xl:items-center md:gap-6 lg:gap-24">
                        <div className="flex py-11 w-full lg:max-h-[389px] lg:w-[40%] px-10  xxl:px-16 flex-col justify-center gap-12 items-center bg-[#D2E0EE] rounded-lg">
                            <h3 className="font-bold text-[#2F4B8A] ">
                                Reybud team
                            </h3>
                        <div className="text-center flex flex-col items-center gap-5">
                                <h4 className="text-xl font-medium xxl:w-2/3">
                                    We are looking to resolve your problems
                                </h4>
                                <p className="text-sm">
                                    The reybud support team will check your problem and send the result to your email address
                                </p>
                        </div>
                            <div className="flex mt-3 gap-6">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.7606 0H2.3925C1.11562 0 0 0.91875 0 2.18062V25.6006C0 26.8694 1.11562 28 2.3925 28H25.7537C27.0375 28 28 26.8619 28 25.6006V2.18062C28.0075 0.91875 27.0375 0 25.7606 0ZM8.67937 23.3394H4.66813V10.8675H8.67937V23.3394ZM6.8125 8.97125H6.78375C5.5 8.97125 4.66875 8.01562 4.66875 6.81938C4.66875 5.60125 5.52188 4.66813 6.83438 4.66813C8.14688 4.66813 8.95 5.59438 8.97875 6.81938C8.97813 8.01562 8.14688 8.97125 6.8125 8.97125ZM23.3394 23.3394H19.3281V16.52C19.3281 14.8863 18.7444 13.77 17.2931 13.77C16.1844 13.77 15.5281 14.52 15.2362 15.2506C15.1269 15.5131 15.0975 15.8706 15.0975 16.2356V23.3394H11.0863V10.8675H15.0975V12.6031C15.6812 11.7719 16.5931 10.5756 18.715 10.5756C21.3481 10.5756 23.34 12.3113 23.34 16.0531L23.3394 23.3394Z" fill="#2F4B8A"/>
                                </svg>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.084C28 6.35273 21.7313 0.0839844 14 0.0839844C6.26875 0.0839844 0 6.35273 0 14.084C0 21.0715 5.11875 26.8634 11.8125 27.9146V18.1321H8.25688V14.084H11.8125V10.9996C11.8125 7.49148 13.9031 5.55211 17.1006 5.55211C18.6325 5.55211 20.235 5.82586 20.235 5.82586V9.27148H18.4688C16.7306 9.27148 16.1869 10.3502 16.1869 11.459V14.084H20.0694L19.4494 18.1321H16.1875V27.9159C22.8813 26.8652 28 21.0734 28 14.084Z" fill="#2F4B8A"/>
                                </svg>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8331 4.33313C23.3789 4.33774 24.8601 4.95385 25.9531 6.04689C27.0462 7.13993 27.6623 8.62109 27.6669 10.1669V21.8331C27.6623 23.3789 27.0462 24.8601 25.9531 25.9531C24.8601 27.0462 23.3789 27.6623 21.8331 27.6669H10.1669C8.62109 27.6623 7.13993 27.0462 6.04689 25.9531C4.95385 24.8601 4.33774 23.3789 4.33313 21.8331V10.1669C4.33774 8.62109 4.95385 7.13993 6.04689 6.04689C7.13993 4.95385 8.62109 4.33774 10.1669 4.33313H21.8331ZM21.8331 2H10.1669C5.675 2 2 5.675 2 10.1669V21.8331C2 26.325 5.675 30 10.1669 30H21.8331C26.325 30 30 26.325 30 21.8331V10.1669C30 5.675 26.325 2 21.8331 2Z" fill="#2F4B8A"/>
                                    <path d="M23.583 10.166C23.2369 10.166 22.8985 10.0634 22.6108 9.87109C22.323 9.6788 22.0987 9.40548 21.9662 9.08571C21.8338 8.76594 21.7991 8.41408 21.8666 8.07461C21.9342 7.73514 22.1008 7.42332 22.3456 7.17858C22.5903 6.93384 22.9021 6.76717 23.2416 6.69964C23.5811 6.63212 23.9329 6.66677 24.2527 6.79923C24.5725 6.93168 24.8458 7.15598 25.0381 7.44377C25.2304 7.73155 25.333 8.0699 25.333 8.41602C25.3335 8.64597 25.2886 8.87375 25.2008 9.0863C25.113 9.29884 24.9841 9.49195 24.8215 9.65456C24.6589 9.81716 24.4658 9.94604 24.2533 10.0338C24.0407 10.1216 23.813 10.1665 23.583 10.166Z" fill="#2F4B8A"/>
                                    <path d="M16 11.3331C16.923 11.3331 17.8253 11.6068 18.5928 12.1196C19.3602 12.6324 19.9584 13.3613 20.3116 14.2141C20.6649 15.0668 20.7573 16.0052 20.5772 16.9105C20.3971 17.8157 19.9527 18.6473 19.3 19.3C18.6473 19.9527 17.8157 20.3971 16.9105 20.5772C16.0052 20.7573 15.0668 20.6649 14.2141 20.3116C13.3613 19.9584 12.6324 19.3602 12.1196 18.5928C11.6068 17.8253 11.3331 16.923 11.3331 16C11.3345 14.7627 11.8266 13.5764 12.7015 12.7015C13.5764 11.8266 14.7627 11.3344 16 11.3331ZM16 9C14.6155 9 13.2622 9.41054 12.111 10.1797C10.9599 10.9489 10.0627 12.0421 9.53285 13.3212C9.00303 14.6003 8.86441 16.0078 9.13451 17.3656C9.4046 18.7235 10.0713 19.9708 11.0503 20.9497C12.0292 21.9287 13.2765 22.5954 14.6344 22.8655C15.9922 23.1356 17.3997 22.997 18.6788 22.4672C19.9579 21.9373 21.0511 21.0401 21.8203 19.889C22.5895 18.7378 23 17.3845 23 16C23 14.1435 22.2625 12.363 20.9497 11.0503C19.637 9.7375 17.8565 9 16 9Z" fill="#2F4B8A"/>
                                </svg>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.5 6H5.5C4.11929 6 3 7.11929 3 8.5V23.5C3 24.8807 4.11929 26 5.5 26H26.5C27.8807 26 29 24.8807 29 23.5V8.5C29 7.11929 27.8807 6 26.5 6Z" stroke="#2F4B8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7 10L16 17L25 10" stroke="#2F4B8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col lg:translate-y-10 w-full lg:w-[60%] items-center gap-7">
                            <div className="flex w-full flex-col gap-9">
                                <div className="flex max-lg:flex-col justify-between gap-10 xxl:gap-20">
                                    <div className="flex flex-col gap-9 w-full">
                                        <input type="text" placeholder="emile" className="px-4 py-3 w-full rounded-xl outline-none border border-[#BEDFDB]" />
                                        <input type="text" placeholder="emile" className="px-4 py-3 w-full rounded-xl outline-none border border-[#BEDFDB]" />
                                    </div>
                                    <div className="flex flex-col gap-9 w-full">
                                        <input type="text" placeholder="emile" className="px-4 w-full py-3 rounded-xl outline-none border border-[#BEDFDB]"/>
                                        <div className="flex gap-1.5">
                                            <select name="code"  id="" className="w-14 text-[#8E9EC1]  bg-white rounded-xl outline-none border border-[#BEDFDB]">
                                                <option  value="iran">+98</option>
                                            </select>
                                            <input type="text" placeholder="emile" className="px-4 py-3 w-full rounded-xl outline-none border border-[#BEDFDB]"/>
                                        </div>
                                    </div>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" className="outline-none border max-h-[96px] mb-2 border-[#BEDFDB]"></textarea>
                                <div className="flex justify-center md:justify-end">
                                    <button className="py-3 px-9 text-sm bg-[#2F4B8A] text-white rounded-lg">
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
       </div>
     );
}
 
export default ContactUsAll;