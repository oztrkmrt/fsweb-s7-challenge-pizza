export default function Boyut() {
    return (
        <form style={{
            width: "300px",
            paddingRight: "150px"
        }}>
            <div>
                <span>Boyut Seç</span>
                <span style={{ color: "red" }}>*</span>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <label>
                    <input type="radio"
                        name="boyut"
                        value="küçük" />
                    Küçük
                </label>
                <label>
                    <input type="radio"
                        name="boyut"
                        value="orta" />
                    Orta
                </label>
                <label>
                    <input type="radio"
                        name="boyut"
                        value="büyük" />
                    Büyük
                </label>
            </div>
        </form>
    )
}