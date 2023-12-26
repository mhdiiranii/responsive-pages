import WhatImage from '../../assets/HomeImage/WhatImage.svg';
import WhatTwo from '../../assets/HomeImage/WhatTwo.svg';

const What = () => {
    return ( 
        <>
              <div className="bg-my-gradient ">
            <div className='relative container mx-auto'>
                <div className="pt-28 pb-36 px-4 md:px-44 xl:px-56 tv:px-80 flex flex-col items-center text-center">
                    <div className="mb-5 flex flex-col gap-8">
                        <h2 className="text-black font-semibold text-3xl max-xl:text-xl">
                        What is the mental health???
                        </h2>
                        <p className="text-white max-lg:text-black text-xl max-xl:text-[12px]">
                            Manage tasks and workflows to fuel team collaboration and 
                            productivity at scale.Manage tasks and workflows to fuel 
                            team collaboration and productivity at scale.Manage tasks 
                            and workflows to fuel team collaboration and productivity 
                            at scale.Manage tasks and workflows to fuel team collaboration 
                            and productivity at scale.Manage tasks and workflows to fuel 
                            team collaboration and productivity at scale.Manage tasks 
                            and workflows to fuel team collaboration and productivity 
                            at scale.Manage tasks and workflows to fuel team collaboration 
                            and productivity at scale.Manage tasks and workflows to fuel 
                            team collaboration and productivity at scale.Manage tasks and 
                            workflows to fuel team collaboration and productivity at scale.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h2 className="text-black font-semibold text-3xl max-xl:text-xl">
                            What is the mental health???
                        </h2>
                        <p  className="text-white max-lg:text-black text-xl max-xl:text-[12px]">
                            Manage tasks and workflows to fuel team collaboration and 
                            productivity at scale.Manage tasks and workflows to fuel 
                            team collaboration and productivity at scale.Manage tasks 
                            and workflows to fuel team collaboration and productivity 
                            at scale.Manage tasks and workflows to fuel team collabovity 
                            at scale.Manage tasks and workflows to fuel team collaboration
                            and productivity at scale.Manage tasks and workflows 
                            to fuel team collaboration and produc
                        </p>
                    </div>
                    <div className="mt-14">
                        <button className="px-12 py-3 bg-[#EDF4FC] text-[#2F4B8A] text-lg max-xl:text-[12px] font-bold rounded-lg">
                            Join Us
                        </button>
                    </div>
                </div>
                <img 
                    src={WhatImage} 
                    alt="Hero"
                    className='absolute max-md:hidden max-lg:-rotate-[25deg] max-lg:w-[90%] md:right-10 md:bottom-1/4 lg:bottom-20 lg:right-1 xl:bottom-0 tv:hidden'
                />
            </div>
        </div>
         <div className='bg-[#04202C] max-md:hidden pb-16 -translate-y-2'>
            <div className='container mx-auto'>
                <img 
                    src={WhatTwo} 
                    alt="Hero"
                    className='w-full'
                />
            </div>
        </div>
        </> 
     );
}
 
export default What;