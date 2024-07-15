import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function SiparisToplam({ numberOfIngs, numberOfOrder, buttonDisabled, chooseBoyut,
    chooseDough, ingredients }) {

    let history = useHistory();

    const handleClick = () => {
        history.push("/Success")
    }

    const formData = {
        Boyut: { chooseBoyut },
        Hamur: { chooseDough },
        Malzemeler: { ingredients }
    }

    const submitHandler = () => {

        axios.post("https://reqres.in/api/pizza", formData)
            .then((response) => {
                console.log("Siparişiniz yolda", response.data)
                history.push("/Success")
            })
            .catch((error) => {
                console.error(error)
            })


    }


    return (
        <div className='siparissonuc'>
            <div className="siparistoplam">
                <div className="siparisyazi">
                    <span style={{
                        fontWeight: "bold",
                        marginBottom: "20px"
                    }}>Sipariş Toplamı</span>
                    <span style={{
                        fontWeight: "bold",
                        color: "#5F5F5F",
                        marginBottom: "10px"
                    }}>Seçimler</span>
                    <span style={{
                        fontWeight: "bold",
                        color: "#CE2829",
                        marginBottom: "10px"
                    }}>Toplam</span>
                </div>
                <div className="tutar">
                    <span style={{ marginBottom: "10px" }}>{numberOfOrder * (Number(numberOfIngs) * 5)} ₺</span>
                    <span>{numberOfOrder * (85.5 + (Number(numberOfIngs) * 5))} ₺</span>
                </div>
            </div>
            <button style={{
                backgroundColor: "#FDC913",
                fontWeight: "bold",
                borderRadius: "3px",
                width: "20vw",
                border: "1px #5F5F5F solid",
                padding: "10px",
            }}
                onClick={submitHandler}
                disabled={buttonDisabled}
            >SİPARİŞ VER</button>
        </div>
    )
}