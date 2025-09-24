import BrandFilter from "../BrandFilter/BrandFilter";
import RatingsFilter from "../RatingsFilter/RatingsFilter";
import "./Filters.css";

function Filters({ brands, setBrandsFilter, brandsFilter }) {
  return (
    <aside className="filters">
      <h4>Filters</h4>
      <div className="filter-group">
        <BrandFilter brands={brands} setBrandsFilter={setBrandsFilter} brandsFilter={brandsFilter} />
      </div>

      <div className="filter-group">
        <RatingsFilter />
      </div>
    </aside>
  );
}

export default Filters;
