import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import "../../sass/base/_normalize.scss";
import "./_home.scss";
import BannerImage from "../../assets/images/image-1.png";

function Home() {
    return (
        <div>
            <Banner src={BannerImage} title="Chez vous, partout ailleurs" />
            <div className="page-container__gallery">
                <Card />
            </div>
        </div>
    );
}

export default Home;
