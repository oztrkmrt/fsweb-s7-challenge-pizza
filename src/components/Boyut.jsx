export default function Boyut({ setChooseBoyut }) {



    const handleChooseChange = (event) => {
        setChooseBoyut(event.target.value)
    }

    return (
        <form style={{
            width: "300px",
            paddingRight: "150px",
            marginTop: "20px"
        }}>
            <div>
                <span style={{
                    fontWeight: "bold",
                    marginTop: "20px"
                }}>Boyut Seç</span>
                <span style={{ color: "red" }}>*</span>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                padding: "5px"
            }}>
                <label>
                    <input type="radio"
                        name="boyut"
                        value="Küçük"
                        onChange={handleChooseChange} />
                    <span className="radiobtn">Küçük</span>
                </label>
                <label>
                    <input type="radio"
                        name="boyut"
                        value="Orta"
                        onChange={handleChooseChange} />
                    <span className="radiobtn">Orta</span>
                </label>
                <label>
                    <input type="radio"
                        name="boyut"
                        value="Büyük"
                        onChange={handleChooseChange} />
                    <span className="radiobtn">Büyük</span>
                </label>
            </div>
        </form>
    )
}