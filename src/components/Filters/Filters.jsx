import BrandFilter from "../BrandFilter/BrandFilter";
import RatingsFilter from "../RatingsFilter/RatingsFilter";
import "./Filters.css";

function Filters({ brands, brandsFilterHandler, onRatingFilterChange}) {
  function onBrandFilterChange(filteredBrands) {
    brandsFilterHandler?.(filteredBrands);
  }

  return (
    <aside className="filters">
      <h4>Filters</h4>
      <div className="filter-group">
        <BrandFilter
          brands={brands}
          onBrandFilterChange={onBrandFilterChange}
        />
      </div>

      <div className="filter-group">
        <RatingsFilter onRatingFilterChange={onRatingFilterChange} />
      </div>
    </aside>
  );
}

export default Filters;
