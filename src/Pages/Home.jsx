
import logo from '../../Assets/mile1-assets/logo.svg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


export default function Home() {

    let history = useHistory();

    const handleClick = () => {
        history.push("/OrderPizza")
    }

    return (

        <div className='home'>
            <img src={logo} alt='Logo' />
            <div className="slogan">
                <div>KOD ACIKTIRIR</div>
                <div>PİZZA, DOYURUR</div>
            </div>
            <button onClick={handleClick}>ACIKTIM</button>
        </div>

    )
}