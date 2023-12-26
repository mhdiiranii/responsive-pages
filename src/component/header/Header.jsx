
const Header = () => {
    return ( 
        <div className="flex z-[5] container mx-auto justify-center items-center py-10">
            <div className="flex gap-5 md:gap-16 justify-center text-base font-medium md:py-5 text-[#566B9C]">
                <a href="/">
                    Home
                </a>
                <a href="/about">
                    About
                </a>
                <a href="/contact-us">
                    Contact us 
                </a>
            </div>
        </div>
     );
}
 
export default Header;