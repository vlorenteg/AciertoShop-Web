import logo from "../assets/logo.jpg";

type HeaderProps = {
  cartCount: number;
};

function Header({ cartCount }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <img src={logo} alt="AciertoShop logo" />
          <div>
            <h1>AciertoShop</h1>
            <p>Demo e-commerce para portfolio</p>
          </div>
        </div>

        <div className="cart-badge">
          Carrito: <span>{cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;