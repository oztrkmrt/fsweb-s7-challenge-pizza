export default function Dough({ setChooseDough }) {



    const handleChooseChange = (event) => {
        setChooseDough(event.target.value)
    }

    return (
        <div style={{
            width: "300px",
            marginTop: "20px"
        }}>
            <form>
                <div style={{ padding: "5px" }}>
                    <span style={{ fontWeight: "bold" }}>Hamur Seç</span>
                    <span style={{ color: "red" }}>*</span>
                </div>
                <select onChange={handleChooseChange}>
                    <option selected>-Hamur Kalınlığı Seç-</option>
                    <option value="Ultra İnce Hamur">Ultra İnce Hamur</option>
                    <option value="İnce Hamur">İnce Hamur</option>
                    <option value="Orta Hamur">Orta Hamur</option>
                    <option value="Kalın Hamur">Kalın Hamur</option>
                </select>
            </form>
        </div>
    )
}