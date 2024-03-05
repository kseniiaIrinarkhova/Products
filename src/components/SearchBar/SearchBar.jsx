import './SearchBar.css'
function SearchBar() {
  return (
    <form action="#" method="post" className="search-form">
      <div><input type="text" placeholder="Search..." name="query" /></div>
      <div>
        <input type="checkbox" name="inStock" id="inStock" />
        <label htmlFor="inStock">Only show products in inStock</label>
      </div>
    </form>
  )
}

export default SearchBar;