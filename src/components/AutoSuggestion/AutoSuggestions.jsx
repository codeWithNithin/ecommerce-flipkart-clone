import "./AutoSuggestions.css";
const AutoSuggestions = ({ suggestions, setSearch, onSearch }) => {
  return (
    <div className="suggestions">
      {suggestions.map((ele) => (
        <div
          className="suggestion"
          key={ele.id}
          onClick={() => {
            setSearch(ele.title);
            onSearch?.(ele.title);
          }}
        >
          {ele.title}
        </div>
      ))}
    </div>
  );
};

export default AutoSuggestions;
