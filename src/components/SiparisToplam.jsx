import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function SiparisToplam({ numberOfIngs, numberOfOrder }) {

    let history = useHistory();

    const handleClick = () => {
        history.push("/Success")
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
                marginBottom: "50px",
                border: "1px #5F5F5F solid"
            }}
                onClick={handleClick}
            >SİPARİŞ VER</button>
        </div>
    )
}