import Hero from "../component/myHomePage/Hero";
import Mental from "../component/myHomePage/Mental";
import Time from "../component/myHomePage/TIme";
import TopBlog from "../component/myHomePage/TopBlog";
import What from "../component/myHomePage/What";

const Home = () => {
    return ( 
        <>
            <Mental/>
            <Hero/>
            <TopBlog/>
            <What/>
            <Time/>
        </>
     );
}
 
export default Home;