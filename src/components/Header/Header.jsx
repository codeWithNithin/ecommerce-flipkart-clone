import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/appContext";
import useDebounce from "../../hooks/useDebounce";

function Header({ onSearch, products }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { theme, setTheme } = useContext(AppContext);
  const debounceValue = useDebounce(search, 600);

  // here is the problem, i am getting maximum render limit reached err.
  useEffect(() => {
    if (debounceValue) {
      onSearch?.(debounceValue);
    }
  }, [debounceValue, onSearch]);

  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter((ele) =>
      ele.title.toLowerCase().includes(search.toLowerCase())
    );
    setSuggestions(filtered);
  }, [search, products]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const onLogoClick = () => {
    navigate("/");
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    onSearch?.(e.target.value);
  };

  const onThemeChange = (e) => {
    setTheme(e.target.value);
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
          onChange={onSearchChange}
          value={search}
        />
        {suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map((ele) => (
              <div className="suggestion" key={ele.id}>
                {ele.title}
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <select name="" id="" onChange={onThemeChange} value={theme}>
          <option value=""> Theme </option>
          <option value="light"> Light </option>
          <option value="dark"> Dark </option>
        </select>
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button className="page-btn">Cart</button>
        <button className="page-btn">Login</button>
      </div>
    </header>
  );
}

export default Header;
