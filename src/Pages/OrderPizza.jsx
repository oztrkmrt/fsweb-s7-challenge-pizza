import '../styles/OrderPizza.css'
import logo from '../../Assets/mile1-assets/logo.svg'
import ProductInfo from '../components/ProductInfo'
import Dough from '../components/Dough'
import Boyut from '../components/Boyut'
import Malzeme from '../components/Malzeme'


export default function OrderPizza({ handleChangeIng, ingredients }) {
    return (
        <>
            <header>
                <img src={logo} alt="Logo" />
                <div className='order'>Sipariş Oluştur</div>
            </header>
            <ProductInfo />
            <section className='sizes'>
                <Boyut />
                <Dough />
            </section>
            <section className='malzeme'>
                <Malzeme handleChangeIng={handleChangeIng} ingredients={ingredients} />
            </section>
        </>
    )
}