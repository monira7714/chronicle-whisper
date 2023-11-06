import Banner from "../../components/Banner/Banner";
import Newsletter from "../../components/Newsletter/Newsletter";
import NavBar from "../../shared/NavBar/NavBar";
import 'rsuite/dist/rsuite.min.css';



const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;