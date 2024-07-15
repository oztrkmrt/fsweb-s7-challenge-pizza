import footerlogo from "../../Assets/mile2-aseets/footer/logo-footer.svg"
import iconMarker from "../../Assets/mile2-aseets/footer/icons/icon-1.png"
import iconEmail from "../../Assets/mile2-aseets/footer/icons/icon-2.png"
import iconPhone from "../../Assets/mile2-aseets/footer/icons/icon-3.png"
import li0 from "../../Assets/mile2-aseets/footer/insta/li-0.png"
import li1 from "../../Assets/mile2-aseets/footer/insta/li-1.png"
import li2 from "../../Assets/mile2-aseets/footer/insta/li-2.png"
import li3 from "../../Assets/mile2-aseets/footer/insta/li-3.png"
import li4 from "../../Assets/mile2-aseets/footer/insta/li-4.png"
import li5 from "../../Assets/mile2-aseets/footer/insta/li-5.png"


export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#292929", }}>
            <div className="footer">
                <section className='footerinfo'>
                    <img src={footerlogo} alt="Teknolojik Yemekler" style={{
                        width: "10vw",
                        paddingBottom: "30px"
                    }} />

                    <p>
                        <img src={iconMarker} alt="iconMarker" style={{ marginRight: "10px" }} />
                        341 Londonderry Road, <br /> Istanbul Türkiye
                    </p>

                    <p>
                        <img src={iconEmail} alt="iconEmail" style={{ marginRight: "10px" }} />
                        aciktim@teknolojikyemekler.com
                    </p>

                    <p>
                        <img src={iconPhone} alt="iconPhone" style={{ marginRight: "10px" }} />
                        +90 216 123 45 67
                    </p>

                </section>

                <section className='footermenuler'>
                    <h2>Sıccacık Yemekler</h2>
                    <p style={{ margin: "10px 0", fontWeight: "lighter" }}>Terminal Pizza</p>
                    <p style={{ margin: "10px 0", fontWeight: "lighter" }}>5 Kişilik Hackathlon Pizza</p>
                    <p style={{ margin: "10px 0", fontWeight: "lighter" }}>useEffect Tavuklu Pizza</p>
                    <p style={{ margin: "10px 0", fontWeight: "lighter" }}>Beyaz Console Frosty</p>
                    <p style={{ margin: "10px 0", fontWeight: "lighter" }}>Testler Geçti Mutlu Burger</p>
                    <p style={{ margin: "10px 0", fontWeight: "lighter" }}>Position Absolute Acı Burger</p>
                </section>

                <section className="footerinsta">
                    <h3 style={{ marginBottom: "2vw" }}>Instagram</h3>
                    <div style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "10px"
                    }}>
                        <img src={li0} alt="instagram-picture" />
                        <img src={li1} alt="instagram-picture" />
                        <img src={li2} alt="instagram-picture" />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "10px"
                    }}>

                        <img src={li3} alt="instagram-picture" />
                        <img src={li4} alt="instagram-picture" />
                        <img src={li5} alt="instagram-picture" />
                    </div>
                </section>
            </div>


            <hr style={{ color: "#5F5F5F" }} />

            <p style={{
                color: "white",
                marginLeft: "10vw",
                padding: "4vh 0"
            }}>© 2023 Teknolojik Yemekler</p>
        </footer>
    )
}