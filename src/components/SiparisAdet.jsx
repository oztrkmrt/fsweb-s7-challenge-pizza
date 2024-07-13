export default function SiparisAdet({ handleChangeIncrease, handleChangeDecrease, numberOfOrder }) {
    return (
        <div className="siparisadet">
            <button onClick={handleChangeDecrease} style={{
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px",
                width: "50px",
                backgroundColor: "#FDC913",
                height: "50px",
                border: "1px #5F5F5F solid"
            }} >-</button>
            <span style={{
                padding: "15px 18px",
                border: "1px #5F5F5F solid",
                borderRadius: "2px",
            }}>{numberOfOrder}</span>
            <button onClick={handleChangeIncrease} style={{
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
                width: "50px",
                backgroundColor: "#FDC913",
                height: "50px",
                border: "1px #5F5F5F solid"
            }}>+</button>
        </div>
    )
}