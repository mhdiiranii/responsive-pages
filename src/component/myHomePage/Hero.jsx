import HeroImage from '../../assets/HomeImage/HeroImage.svg';
import HeroImageTwo from '../../assets/HomeImage/HeroImageTwo.svg';

const Hero = () => {
    return ( 
        <div className='bg-[#0186BB0D]'>
            <div className='relative container max-md:pb-40 px-4 md:px-16 mx-auto'>
                <div className='flex max-lg:flex-col justify-between gap-4 md:gap-24 items-center'>
                    <img src={HeroImage} alt="Hero" className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-2/3'/>
                    <div className='lg:-translate-x-1 lg:translate-y-10 xl:-translate-y-8 xl:translate-x-10 tv:translate-x-0 tv:w-1/2'>
                        <h2 className='max-lg:text-xl max-lg:text-center lg:text-2xl xl:text-4xl w-full font-semibold text-[#566B9C]'>
                            She comes home from work, has enough time
                        </h2>
                        <p className='max-md:mt-8 max-lg:text-center text-sm xl:text-[20px]'>
                            Collect essential insights about how visitors 
                            are using your site with in-depth page viewmetrics 
                            like top pages, top referring sites, and demographics. 
                        </p>
                    </div>
                </div>
                <img 
                    src={HeroImageTwo} 
                    alt="Hero"
                    className='absolute max-lg:hidden lg:w-[500px] xl:w-[600px] xxl:w-[720px] tv:w-1/2 top-0 right-3'
                />
            </div>
        </div>
     );
}
 
export default Hero;