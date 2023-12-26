import Arrow from "../../assets/About/Arrow.svg"
import Character from "../../assets/About/Character.svg"
import AboutRight from "../../assets/About/AboutRight.svg"
import AboutLeft from "../../assets/About/AboutLeft.svg"

const AboutAll = () => {
    return ( 
        <div className="relative z-[1] container mx-auto flex flex-col items-center">
            <div className="flex flex-col gap-5 mb-14">
                <h2 className="text-6xl max-lg:text-3xl font-semibold text-[#66AFA5]">
                    About our team
                </h2>
                <span className="w-full h-[1px] bg-gradient-to-l from-[#EDF4FC] via-[#687DAC] to-[#EDF4FC]"></span>
            </div>
            <p className="text-xl max-lg:px-4 max-lg:text-sm lg:w-[60%] xxl:w-2/3 xl:w-[47%] text-center mb-20">
                We are a team of IT experts who have launched a social startup called Reybud.
                Our goal is to create an environment to help people with their mental health.
            </p>
            <div className="flex flex-col max-lg:px-4 items-center ">
                <p className="text-[#66AFA5] text-xl w-2/3 text-center">
                    We don’t just design websites, we design experiences.
                </p>
                <div className="flex justify-start w-full -translate-y-6">
                    <img src={Arrow} alt="arrow" className="w-1/4" />
                </div>
            </div>
            <div className="flex flex-col max-lg:text-sm max-lg:px-4 items-center text-center lg:w-[60%] xl:w-[47%] xxl:w-2/3 mt-16 gap-10 text-xl px-4">
                <p>
                    Reybud is an online mental health forum, which provides easy 
                    communication and helps people to better their mental health. 
                    Feel free and decrease your anxiety with the magic of speaking 
                    with other people.
                </p>
                <p>
                    You can talk to others and make new friends any time you want.
                </p>
                <p>
                    Reybud gives you the opportunity to have someone to talk to as 
                    well as hearing their thoughts, recommendations and advice whether 
                    you are happy, sad, anxious, etc.
                    Let's build a better and happier world with your communication buddy.
                </p>
            </div>
            <div className="mt-40 relative mb-32">
                <img src={Character} alt="Character" className="z-[1]" />
                <div className="w-full absolute -bottom-16 h-[167px] Character rounded-full z-[-1]"></div>
            </div>
            <img src={AboutRight} alt="Right" className="fixed max-lg:hidden lg:-right-28 xl:-right-14  top-0 z-[-4]" />
            <img src={AboutLeft} alt="Left" className="fixed max-lg:hidden lg:-left-28 xl:-left-14  top-1/4 z-[-4]" />
        </div>
     );
}
 
export default AboutAll;