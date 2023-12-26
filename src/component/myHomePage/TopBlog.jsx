const TopBlog = () => {
    return ( 
        <div className="flex container mx-auto px-4 md:px-16 mt-14 lg:mt-3 flex-col">
            <div className="flex  mb-10 justify-center md:justify-between items-center">
                <h2 className="md:text-xl lg:text-4xl font-semibold text-[#566B9C]">
                    Top blog
                </h2>
                <button className="px-6 py-3 max-md:hidden md:text-sm lg:text-lg rounded-lg border border-[#566B9C]">
                    SEE MORE
                </button>
            </div>
            <div className="flex max-md:flex-col w-full gap-10 md:gap-6 justify-between">
                <div className="flex flex-col justify-between gap-6 w-full">
                    <div className="flex flex-col gap-6">
                        <div className="w-full h-[263px] bg-white rounded-xl"></div>
                        <div className="flex flex-col gap-1.5 justify-start" >
                            <p className="text-sm font-medium lg:text-lg lg:font-semibold">
                                Manage tasks and workflows to fuel team collaboration and productivity 
                            </p>
                            <p className="text-xs font-light lg:text-sm">
                                Manage tasks and workflows to fuel team collaboration and productivity 
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="flex items-center">
                            <p>
                                read more
                            </p>
                            <div>
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8052 11.8823H22.3511V21.4283" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.6875 12.5449L12.009 22.2234" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-6 w-full">
                    <div className="flex flex-col gap-6">
                        <div className="w-full h-[263px] bg-white rounded-xl"></div>
                        <div className="flex flex-col gap-1.5" >
                            <p className="text-sm font-medium lg:text-lg lg:font-semibold">
                                Manage tasks and workflows to 
                            </p>
                            <p className="text-xs font-light lg:text-sm">
                                Manage tasks and workflows to fuel team collaboration and productivity 
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="flex items-center">
                            <p>
                                read more
                            </p>
                            <div>
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8052 11.8823H22.3511V21.4283" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.6875 12.5449L12.009 22.2234" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-6 w-full">
                    <div className="flex flex-col gap-6">
                        <div className="w-full h-[263px] bg-white rounded-xl"></div>
                        <div className="flex flex-col gap-1.5" >
                            <p className="text-sm font-medium lg:text-lg lg:font-semibold">
                                Manage tasks and workflows to fuel team collaboration and productivity   
                            </p>
                            <p className="text-xs font-light lg:text-sm">
                                Manage tasks and workflows to fuel team collaboration and productivity Manage tasks and workflows
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="flex items-center">
                            <p>
                                read more
                            </p>
                            <div>
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8052 11.8823H22.3511V21.4283" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.6875 12.5449L12.009 22.2234" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TopBlog;