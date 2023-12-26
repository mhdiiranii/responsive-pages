import TimeOne from '../../assets/HomeImage/TimeOne.svg';
import TimeTwo from '../../assets/HomeImage/TimeTwo.svg';

const Time = () => {
    return ( 
        <div className="flex relative justify-center">
            <div className="container mx-auto max-md:px-4 lg:w-3/4 mt-24 mb-20 lg:mb-44 xl:mb-80 flex flex-col gap-14 md:gap-32 text-center">
                <h2 className="text-[#566B9C] text-3xl max-md:text-xl font-semibold">
                    She comes home from work, has enough time
                </h2>
                <p className="text-xl max-md:text-sm px-4 lg:px-32">
                    Collect essential insights about how visitors are 
                    using your site with in-depth page viewmetrics like 
                    top pages, top referring sites, and demographics. 
                    Collect essential insights about how visitors are 
                    using your site with in-depth page viewmetrics like 
                    top pages, top referring sites, and demographics. 
                </p>
            </div>
            <img 
                src={TimeOne} 
                alt="Img"
                className='absolute bottom-0 max-lg:hidden right-0 max-xl:w-1/3'
            />
             <img 
                src={TimeTwo} 
                alt="Img"
                className='absolute bottom-0 max-lg:hidden left-0 max-xl:w-1/3'
            />
        </div>
     );
}
 
export default Time;