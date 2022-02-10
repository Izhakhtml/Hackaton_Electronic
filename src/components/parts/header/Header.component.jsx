import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div id="theNav">
        <nav className="nav">
          <a class="active" href="index.html">
            Home
          </a>

          <a href="/Computer">Computer</a>
          <a href="/Phone">Phone</a>
          <a href="/Tv">Tv</a>
          <a href="/Refrigerator">Refrigerator</a>
          <a href="/User-account">
            <img
              id="logInIcon"
              src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
            />
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
