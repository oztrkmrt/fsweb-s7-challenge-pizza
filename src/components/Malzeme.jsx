import { Col, Row } from "reactstrap";


export default function Malzeme({ handleChangeIng, ingredients, numberOfIngs }) {

    const malzemeler = [
        "Pepperoni",
        "Domates",
        "Biber",
        "Sosis",
        "Mısır",
        "Sucuk",
        "Kanada Jambonu",
        "Ananas",
        "Tavuk Izgara",
        "Jalepeno",
        "Kabak",
        "Soğan",
        "Sarımsak",
    ];



    return (

        <form>
            <div className="malzemeYazi">
                <span style={{
                    marginBottom: "15px",
                    fontWeight: "bold",
                    marginTop: "20px"
                }}>Ek Malzemeler</span>
                <span style={{
                    color: numberOfIngs <= 4 ? "#CE2829" : "#5F5F5F",
                    marginBottom: "15px"
                }}>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</span>
            </div>
            <Row className="malzemeler">
                {malzemeler.map((malzeme, index) => (
                    <Col md={4} key={index}>
                        <label>
                            <input type="checkbox"
                                onChange={handleChangeIng}
                                name="malzemeler"
                                value={malzeme}
                                checked={ingredients.includes(malzeme)}
                            />
                            <span className="checkbox">{malzeme}</span>
                        </label>
                    </Col>

                ))}
            </Row>


        </form>
    )
}