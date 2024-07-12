import React from "react"

export default function ProductInfo() {

    const products = {
        name: "Position Absolute Acı Pizza",
        comment: 200,
        score: 4.9,
        price: 85.50,
        description: "Frontend Dev olarak bu hayat kadar acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.",
        id: 1
    }


    return (
        <div>
            <div style={{
                color: "black",
                marginTop: "20px"
            }} >{products.name}</div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: "600px",
                marginLeft: "800px"

            }}>
                <div style={{ marginRight: "160px", fontWeight: "bold" }}>{products.price} ₺</div>
                <div style={{ color: "#5F5F5F", fontSize: "20px" }}>{products.score} </div>
                <div style={{ color: "#5F5F5F", fontSize: "20px" }}>({products.comment})</div>

            </div>
            <div style={{
                width: "600px",
                marginLeft: "800px",
                color: "#5F5F5F",
                fontSize: "20px",
                lineHeight: "30px",
                textAlign: "left"
            }}>{products.description} </div>
        </div>
    )
}