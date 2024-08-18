import icon1 from "../../Assets/mile2-aseets/pictures/food-1.png"
import icon2 from "../../Assets/mile2-aseets/pictures/food-2.png"
import icon3 from "../../Assets/mile2-aseets/pictures/food-3.png"

export default function PicturesNav() {

    const pictures = [
        { src: icon1, name: "Terminal Pizza", score: 4.9, comment: (200), price: 60 },
        { src: icon2, name: "Position Absolute Pizza", score: 4.9, comment: (928), price: 85 },
        { src: icon3, name: "useEffect Tavuklu Burger", score: 4.9, comment: (462), price: 75 }
    ]

    return (
        <div className="pictures">
            {pictures.map((picture, index) => (
                <div className="picture">
                    <img src={picture.src} alt={picture.name} key={index} />
                    <h4 style={{ textAlign: "center" }}>{picture.name}</h4>
                    <section style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "5px"
                    }}>
                        <span>{picture.score} </span>
                        <span>({picture.comment}) </span>
                        <span>{picture.price}₺</span>
                    </section>
                </div>
            ))}
        </div>
    )
}