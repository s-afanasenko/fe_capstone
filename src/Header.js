import logo from './assets/Logo.svg';

export default function Header () {
  return (
    <header className="main-header">
      <img src={logo} alt="Little Lemon" />
      <nav>
        <ul>
          <li>
            <a href="#" title="">I'm a link</a>
          </li>
          <li>
            <a href="#" title="">I'm a link</a>
          </li>
          <li>
            <a href="#" title="">I'm a link</a>
          </li>
          <li>
            <a href="#" title="">I'm a link</a>
          </li>
          <li>
            <a href="#" title="">I'm a link</a>
          </li>
          <li>
            <a href="#" title="">I'm a link</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}