import icon1 from "../../Assets/mile2-aseets/icons/1.svg"
import icon2 from "../../Assets/mile2-aseets/icons/2.svg"
import icon3 from "../../Assets/mile2-aseets/icons/3.svg"
import icon4 from "../../Assets/mile2-aseets/icons/4.svg"
import icon5 from "../../Assets/mile2-aseets/icons/5.svg"
import icon6 from "../../Assets/mile2-aseets/icons/6.svg"

export default function IconsNav() {
    return (
        <section className='icons'>
            <img src={icon1} alt="icon1" />
            <span>YENİ! Kore</span>
            <img src={icon2} alt="icon2" />
            <span>Pizza</span>
            <img src={icon3} alt="icon3" />
            <span>Burger</span>
            <img src={icon4} alt="icon4" />
            <span>Kızartmalar</span>
            <img src={icon5} alt="icon5" />
            <span>Fast food</span>
            <img src={icon6} alt="icon6" />
            <span>Gazlı içecek</span>
        </section>
    )
}