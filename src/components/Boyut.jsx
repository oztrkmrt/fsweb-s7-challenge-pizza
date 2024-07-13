export default function Boyut() {
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
                        value="küçük" />
                    <span className="radiobtn">Küçük</span>
                </label>
                <label>
                    <input type="radio"
                        name="boyut"
                        value="orta" />
                    <span className="radiobtn">Orta</span>
                </label>
                <label>
                    <input type="radio"
                        name="boyut"
                        value="büyük" />
                    <span className="radiobtn">Büyük</span>
                </label>
            </div>
        </form>
    )
}