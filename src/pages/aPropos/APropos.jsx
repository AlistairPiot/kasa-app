import Banner from "../../components/banner/Banner";
import "./_aPropos.scss";
import BannerAPropos from "../../assets/images/image-2.png";
import CollapseC from "../../components/collapse/CollapseC";

function APropos() {
    return (
        <div className="propos">
            <Banner src={BannerAPropos} />
            <div className="propos__container">
                <div className="propos__container__collapse">
                    <CollapseC
                        title="Fiabilité"
                        content="Les annonces postées sur Kasa garantissent une fiabilité
                    totale. Les photos sont conformes au logements, et toutes
                    les informations sont régulièrement vérifiées par nos
                    équipes."
                    />
                </div>
                <div className="propos__container__collapse">
                    <CollapseC
                        title="Respect"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platfeorme."
                    />
                </div>
                <div className="propos__container__collapse">
                    <CollapseC
                        title="Service"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platfeorme."
                    />
                </div>
                <div className="propos__container__collapse">
                    <CollapseC
                        title="Sécurité"
                        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécruité établis par nos esrvices. En laissant une note aussi bien à l'hôte qu'au locatair, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </div>
            </div>
        </div>
    );
}

export default APropos;
