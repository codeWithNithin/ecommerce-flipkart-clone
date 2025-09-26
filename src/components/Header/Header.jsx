import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

function Header({ onSearch }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onLogoClick = () => {
    navigate("/");
  };

  const onSeachBtnClick = () => {
    setSearch(search);
    onSearch?.(search);
  };

  return (
    <header className="top">
      <div className="logo" onClick={onLogoClick}>
        <div className="mark">F</div>
        <div className="text">
          <strong>FlipMock</strong>
        </div>
      </div>
      <div className="search">
        <input
          placeholder="Search for monitors, brands, resolutions, sizes..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button onClick={onSeachBtnClick}>Search</button>
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button className="page-btn">Cart</button>
        <button className="page-btn">Login</button>
      </div>
    </header>
  );
}

export default Header;
