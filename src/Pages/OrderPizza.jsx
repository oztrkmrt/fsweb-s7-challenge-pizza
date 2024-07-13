
import logo from '../../Assets/mile1-assets/logo.svg'
import ProductInfo from '../components/ProductInfo'
import Dough from '../components/Dough'
import Boyut from '../components/Boyut'
import Malzeme from '../components/Malzeme'
import SiparisNotu from '../components/SiparisNotu'
import SiparisAdet from '../components/SiparisAdet'
import SiparisToplam from '../components/SiparisToplam'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'


export default function OrderPizza() {

    const [ingredients, setIngredients] = useState([]);
    const [numberOfIngs, setNumberOfIngs] = useState(0);
    const [numberOfOrder, setNumberOfOrder] = useState(1)


    const handleChangeIng = (e) => {

        let newIngredients;

        if (ingredients.includes(e.target.value)) {
            newIngredients = ingredients.filter(item => item !== e.target.value);
        } else if (ingredients.length < 10) {
            newIngredients = [...ingredients, e.target.value];
        } else {
            return;
        }

        const newNumberOfIngs = newIngredients.length;
        setIngredients(newIngredients);
        setNumberOfIngs(newNumberOfIngs);

    };

    const handleChangeIncrease = () => {
        setNumberOfOrder(numberOfOrder + 1)
    }

    const handleChangeDecrease = () => {
        if (numberOfOrder > 1) {
            setNumberOfOrder(numberOfOrder - 1)
        }

    }



    return (
        <div className='orderpizza'>
            <header>
                <img src={logo} alt="Logo" />
                <div className='order'>
                    <span style={{ fontWeight: "lighter" }}>Anasayfa - </span>
                    <span style={{ fontWeight: "lighter" }}>Seçenekler - </span>
                    <span style={{ fontWeight: "bold" }}>Sipariş Oluştur</span>
                </div>
            </header>
            <div className='orderdetails'>
                <ProductInfo />
                <section className='sizes'>
                    <Boyut />
                    <Dough />
                </section>
                <section className='malzeme'>
                    <Malzeme handleChangeIng={handleChangeIng} ingredients={ingredients} numberOfIngs={numberOfIngs} />
                </section>
                <section className='siparisnotu'>
                    <SiparisNotu />
                </section>
                <hr />
                <div className='siparis'>
                    <section>
                        <SiparisAdet handleChangeIncrease={handleChangeIncrease} handleChangeDecrease={handleChangeDecrease} numberOfOrder={numberOfOrder} />
                    </section>
                    <section>
                        <SiparisToplam numberOfIngs={numberOfIngs} numberOfOrder={numberOfOrder} />
                    </section>
                </div>
            </div>
        </div>
    )
}