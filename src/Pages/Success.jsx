
import logo from '../../Assets/mile1-assets/logo.svg'


export default function Success() {
  return (
    <div className='success'>
      <img src={logo} alt='Logo' />
      <div className="message">
        <div>TEBRİKLER!</div>
        <div>SİPARİŞİNİZ ALINDI!</div>
      </div>
    </div>
  );
}
