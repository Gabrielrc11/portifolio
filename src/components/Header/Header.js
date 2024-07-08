import './Header.css';

function Header() {
  return (
    <div className="Header">
        <ul className='List'>
            <li className='listItem'>
                Sobre
            </li>
            <li className='listItem'>
                Projetos
            </li>
            <li className='listItem'>
                Contato
            </li>
        </ul>
    </div>
  );
}

export default Header;