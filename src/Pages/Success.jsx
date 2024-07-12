import '../styles/Success.css';
import logo from '../../Assets/mile1-assets/logo.svg'


export default function Success() {
  return (
    <>
      <img src={logo} alt='Logo' />
      <div className="message">
        <div>TEBRİKLER!</div>
        <div>SİPARİŞİNİZ ALINDI!</div>
      </div>
    </>
  );
}
