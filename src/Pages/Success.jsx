
import logo from '../../Assets/mile1-assets/logo.svg'


export default function Success({
  numberOfOrder,
  numberOfIngs,
  chooseDough,
  chooseBoyut,
  ingredients,
  note
}) {

  return (
    <div className='success'>
      <img src={logo} alt='Logo' />
      <div className="message">
        <span style={{
          fontFamily: "Satisfy",
          color: "#FDC913",
          fontSize: "32px"
        }}>lezzetin yolda</span>
        <span>SİPARİŞ ALINDI</span>
        <hr />
        <span style={{
          fontSize: "32px",
          marginBottom: "40px"
        }}>Position Absolute Acı Pizza</span>
        <div className='successpizza'>
          <span>Boyut: {chooseBoyut}</span>
          <span>Hamur: {chooseDough}</span>
          <span>Ek Malzemeler: {ingredients.join(', ')}</span>
          <span>Sipariş Notu: {note} </span>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <div style={{
            display: "flex",
            border: "2px #FAF7F2 solid",
            borderRadius: "6px",
            width: "300px",
            height: "180px",
            alignItems: "center",
            fontSize: "20px",
            marginTop: "30px",
            justifyContent: "center"
          }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left"
            }}>
              <span style={{ marginBottom: "20px" }}>Sipariş Toplamı</span>
              <span>Seçimler</span>
              <span>Toplam</span>
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "52px"
            }}>
              <span>{numberOfOrder * (Number(numberOfIngs) * 5)} ₺</span>
              <span>{numberOfOrder * (85.5 + (Number(numberOfIngs) * 5))} ₺</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
