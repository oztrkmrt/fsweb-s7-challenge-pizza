import { Col, Row } from "reactstrap";


export default function Malzeme({ handleChangeIng, ingredients }) {

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
                <span>Ek Malzemeler</span>
                <span>En fazla 10 malzeme seçebilirsiniz. 5₺</span>
            </div>
            <Row className="malzemeler">
                {malzemeler.map((malzeme, index) => (
                    <Col md={4} key={index}>
                        <label>
                            <input type="checkbox"
                                checked={ingredients.includes(malzeme)}
                                onChange={handleChangeIng}
                                name="malzemeler"
                                value={malzeme} />
                            {malzeme}
                        </label>
                    </Col>

                ))}
            </Row>


        </form>
    )
}