import logo from './assets/Logo.svg';

export default function Header () {
  return (
    <header className="main-header">
      <div className="container">
        <a href="#" title="Little Lemon" class="logo">
          <img src={logo} alt="Little Lemon" />
        </a>
        <nav className="main-navigation">
          <ul>
            <li>
              <a href="#" title="">Home</a>
            </li>
            <li>
              <a href="#" title="">About</a>
            </li>
            <li>
              <a href="#" title="">Menu</a>
            </li>
            <li>
              <a href="#" title="">Reserbations</a>
            </li>
            <li>
              <a href="#" title="">Order Online</a>
            </li>
            <li>
              <a href="#" title="">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}