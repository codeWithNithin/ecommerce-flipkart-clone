import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/appContext";
import useDebounce from "../../hooks/useDebounce";
import AutoSuggestions from "../AutoSuggestion/AutoSuggestions";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { addUser } from "../../utils/authSlice";
import { mergeCartItems } from "../../utils/cartSlice";

function Header({ onSearch, products }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { theme, setTheme } = useContext(AppContext);
  const debounceValue = useDebounce(search, 2000);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // here is the problem, i am getting maximum render limit reached err.
  useEffect(() => {
    onSearch?.(debounceValue);
  }, [debounceValue]);

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
  };

  const onThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const loginHandler = () => {
    signInWithEmailAndPassword(auth, "nithinkottary09@gmail.com", "Virat@123")
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            isAnonymous: user.isAnonymous,
            display: "Nithin kumar",
          })
        );

        dispatch(mergeCartItems({ uid: user.uid }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
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
          <AutoSuggestions
            suggestions={suggestions}
            setSearch={setSearch}
            onSearch={onSearch}
          />
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
        <button
          className="page-btn"
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart ({cartItems.length})
        </button>
        <button className="page-btn" onClick={loginHandler}>
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
