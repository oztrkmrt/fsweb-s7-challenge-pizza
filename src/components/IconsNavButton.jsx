import icon1 from "../../Assets/mile2-aseets/icons/1.svg"
import icon2 from "../../Assets/mile2-aseets/icons/2.svg"
import icon3 from "../../Assets/mile2-aseets/icons/3.svg"
import icon4 from "../../Assets/mile2-aseets/icons/4.svg"
import icon5 from "../../Assets/mile2-aseets/icons/5.svg"
import icon6 from "../../Assets/mile2-aseets/icons/6.svg"

export default function IconsNavButton() {

    const navButtons = [
        { src: icon1, text: "Ramen" },
        { src: icon2, text: "Pizza" },
        { src: icon3, text: "Burger" },
        { src: icon4, text: "French fries" },
        { src: icon5, text: "Fast food" },
        { src: icon6, text: "Soft drinks" },
    ]

    return (
        <div className="navbutton">
            {navButtons.map((button, index) => (
                <button key={index} style={{
                    border: "none",
                    borderRadius: "40px",
                    backgroundColor: "white",
                    color: "#292929",
                    padding: "15px 30px"
                }}
                >
                    <img src={button.src} alt={button.text} style={{ width: "40px" }} />
                    <span style={{ marginLeft: "20px" }}>{button.text}</span>
                </button>
            ))}
        </div>

    )
}