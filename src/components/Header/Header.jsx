import "./Header.css";

function Header() {
  return (
    <header className="top">
      <div className="logo">
        <div className="mark">F</div>
        <div className="text">
          <strong>FlipMock</strong>
        </div>
      </div>
      <div className="search">
        <input placeholder="Search for monitors, brands, resolutions, sizes..." />
        <button>Search</button>
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button className="page-btn">Cart</button>
        <button className="page-btn">Login</button>
      </div>
    </header>
  );
}

export default Header;
