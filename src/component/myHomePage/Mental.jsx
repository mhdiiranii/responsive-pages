import Menthal from '../../assets/HomeImage/Mental.svg';

const Mental = () => {
    return ( 
        <div className="px-4 md:px-16 container mx-auto pb-10 lg:pb-52 relative flex max-lg:flex-col justify-end">
            <div className="lg:absolute top-0 left-16">
                <h2 className="capitalize max-lg:text-center max-md:text-2xl  md:text-4xl lg:text-6xl xl:text-7xl font-mono text-[#3A146A] mb-10">
                    mental health forum
                </h2>
                <p className="max-md:mb-5 lg:mb-2 max-md:text-center max-lg:w-full lg:w-[440px] xl:w-[500px] xxl:w-[585px] max-xl:text-sm">
                    Manage tasks and workflows to fuel team collaboration and productivity at 
                    scale.Manage tasks and workflows to fuel team collaboration and productivity 
                    at scale.Manage tasks and workflows to fuel team collaboration and productivity 
                    at scale.
                </p>
                <p className="font-semibold max-md:text-center max-lg:mb-16 max-lg:w-full lg:w-1/2 w-1/3 max-xl:text-sm text-[#566B9C] ">
                    Manage tasks and workflows to fuel team collaboration and productivity at scale.Manag
                </p>
                <button className="px-9 py-3 max-lg:hidden text-lg text-white rounded-lg mt-16 font-medium bg-[#2F4B8A]">
                    GET START
                </button> 
            </div>
            <img 
                src={Menthal} 
                alt="Mental" 
                className='max-lg:h-[300px] max-md:hidden max-lg:w-full w-1/2'
            />
            <div className='flex justify-center'>
                <button className="px-4 py-2 lg:hidden md:mt-10 text-sm text-white rounded-lg font-medium bg-[#2F4B8A]">
                        GET START
                </button> 
            </div>
        </div>
     );
}
 
export default Mental;