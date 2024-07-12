import '../styles/Home.css'
import logo from '../../Assets/mile1-assets/logo.svg'


export default function Home(props) {

    const { handleClick } = props

    return (

        <div>
            <img src={logo} alt='Logo' />
            <div className="slogan">
                <div>KOD ACIKTIRIR</div>
                <div>PİZZA, DOYURUR</div>
            </div>
            <button type='button'>ACIKTIM</button>
        </div>

    )
}