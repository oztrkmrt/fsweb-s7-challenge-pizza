
import logo from '../../Assets/mile1-assets/logo.svg'
import ProductInfo from '../components/ProductInfo'
import Dough from '../components/Dough'
import Boyut from '../components/Boyut'
import Malzeme from '../components/Malzeme'
import SiparisNotu from '../components/SiparisNotu'
import SiparisAdet from '../components/SiparisAdet'
import SiparisToplam from '../components/SiparisToplam'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer'
import banner from "../../Assets/mile2-aseets/pictures/form-banner.png"


export default function OrderPizza({
    setChooseBoyut,
    handleChangeIng,
    ingredients,
    numberOfIngs,
    handleChangeIncrease,
    handleChangeDecrease,
    numberOfOrder,
    buttonDisabled,
    setChooseDough,
    chooseBoyut,
    chooseDough
}) {



    return (
        <>
            <div className='orderpizza'>
                <header>
                    <img src={logo} alt="Logo" />
                </header>
                <div className='topsection'>
                    <img style={{
                        width: "20vw",

                    }} src={banner} alt="Pizzaa" />
                    <div className='order'>
                        <span style={{ fontWeight: "lighter" }}>Anasayfa - </span>
                        <span style={{ fontWeight: "lighter" }}>Seçenekler - </span>
                        <span style={{ fontWeight: "bold" }}>Sipariş Oluştur</span>
                    </div>
                    <ProductInfo />
                </div>
                <div className='orderdetails'>
                    <section className='sizes'>
                        <Boyut setChooseBoyut={setChooseBoyut} />
                        <Dough setChooseDough={setChooseDough} />
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
                            <SiparisToplam numberOfIngs={numberOfIngs} numberOfOrder={numberOfOrder} buttonDisabled={buttonDisabled} chooseBoyut={chooseBoyut} chooseDough={chooseDough} ingredients={ingredients} />
                        </section>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}