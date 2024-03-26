import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import "../../sass/base/_normalize.scss";
import "./_home.scss";
import BannerImage from "../../assets/images/image-1.png";
import Data from "../../data/data.json";

function Home() {
    return (
        <div>
            <Banner src={BannerImage} title="Chez vous, partout ailleurs" />
            <div className="page-container__gallery">
                <Card data={Data} />
            </div>
        </div>
    );
}

export default Home;
