import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from '../components/Footer'
import PizzaCard from '../components/PizzaCard'
import BurgerCard from '../components/BurgerCard'
import KuryeCard from '../components/KuryeCard'
import IconsNav from '../components/IconsNav'
import HomeHeader from '../components/HomeHeader'
import IconsNavButton from '../components/IconsNavButton'
import PicturesNav from '../components/PicturesNav'


export default function Home() {

    let history = useHistory();

    const handleClick = () => {
        history.push("/OrderPizza")
    }

    return (
        <div>
            <HomeHeader handleClick={handleClick} />
            <div style={{ backgroundColor: "#FAF7F2" }}>
                <IconsNav />
                <div className='cards'>
                    <PizzaCard />
                    <div>
                        <BurgerCard />
                        <KuryeCard />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "40px"
                }}>
                    <p style={{
                        fontFamily: "Satisfy",
                        color: "red",
                        fontSize: "40px"
                    }}>en çok paketlenen menüler</p>
                    <h1 style={{ fontWeight: "bold" }}>Acıktıran Kodlara Doyuran Lezzetler</h1>
                </div>
                <IconsNavButton />
                <PicturesNav />

                <Footer />
            </div>
        </div>
    )
}