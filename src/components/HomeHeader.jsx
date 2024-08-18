import logo from '../../Assets/mile1-assets/logo.svg'
import banner from '../../Assets/mile1-assets/home-banner.png'

export default function HomeHeader({ handleClick }) {
    return (
        <header className='home-1' style={{ backgroundImage: `url(${banner})` }}>
            <img src={logo} alt='Logo' />

            <section className="slogan">
                <div style={{
                    fontFamily: "Satisfy",
                    color: "#FDC913",
                    fontSize: "25px"
                }}>fırsatı kaçırma</div>
                <div>KOD ACIKTIRIR</div>
                <div>PİZZA, DOYURUR</div>
            </section>
            <button onClick={handleClick}>ACIKTIM</button>
        </header>
    )
}