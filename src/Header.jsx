import './Header.css';

export default function Header(props) 
{
  return (
    
    <div className="header">
        <div className='headerLogo'>
            <img src="https://intelbras.topdesk.net/tas/image?key=lookandfeel.open.login.logo" alt="" />
        </div>
        <div className='headerMenu'>
            <a href="#">Home</a>
            <a href="#">Sobre</a>
        </div>
    </div>
  );
}

