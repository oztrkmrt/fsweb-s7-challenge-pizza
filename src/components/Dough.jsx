export default function Dough() {
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
                <select >
                    <option selected>Hamur Kalınlığı</option>
                    <option value="1">Ultra İnce Hamur</option>
                    <option value="2">İnce Hamur</option>
                    <option value="3">Orta Hamur</option>
                    <option value="4">Kalın Hamur</option>
                </select>
            </form>
        </div>
    )
}