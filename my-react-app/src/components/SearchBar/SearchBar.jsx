import './SearchBar.css';

function SearchBar({ onSearch }) {
  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search courses..."
          className="search-input"
          onChange={(e) => onSearch(e.target.value)}
          aria-label="Search courses"
        />
        {/* Add your search icon here */}
        <span className="search-icon" role="img" aria-label="Search">
          🔍
        </span>
      </div>
    </div>
  );
}

export default SearchBar;