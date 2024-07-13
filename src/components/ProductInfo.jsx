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
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "bold"
            }} >{products.name}</div>
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <div style={{
                    marginRight: "160px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    fontSize: "20px"
                }}>{products.price} ₺</div>
                <div style={{
                    color: "#5F5F5F",
                    fontSize: "14px"
                }}>{products.score} </div>
                <div style={{
                    color: "#5F5F5F",
                    fontSize: "14px"
                }}>({products.comment})</div>

            </div>
            <div style={{

                color: "#5F5F5F",
                fontSize: "12px",
                lineHeight: "20px",
                textAlign: "left"
            }}>{products.description} </div>
        </div>
    )
}