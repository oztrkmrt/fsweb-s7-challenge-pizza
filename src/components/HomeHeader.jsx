import logo from '../../Assets/mile1-assets/logo.svg'

export default function HomeHeader({ handleClick }) {
    return (
        <header className='home-1'>
            <img src={logo} alt='Logo' />

            <section className="slogan">
                <div style={{
                    fontFamily: "Satisfy",
                    color: "#FDC913",
                    fontSize: "30px"
                }}>fırsatı kaçırma</div>
                <div>KOD ACIKTIRIR</div>
                <div>PİZZA, DOYURUR</div>
            </section>
            <button onClick={handleClick}>ACIKTIM</button>
        </header>
    )
}