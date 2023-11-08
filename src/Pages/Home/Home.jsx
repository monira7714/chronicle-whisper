import Authors from "../../components/Authors/Authors";
import Banner from "../../components/Banner/Banner";
import Newsletter from "../../components/Newsletter/Newsletter";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";
import Tags from "../../components/Tags/Tags";
import Footer from "../../shared/Footer/Footer";
import NavBar from "../../shared/NavBar/NavBar";
import 'rsuite/dist/rsuite.min.css';



const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Tags></Tags>
            <Authors></Authors>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;