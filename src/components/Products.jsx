import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handlePriceFilter = (e) => {
    setMaxPrice(e.target.value);
    const price = e.target.value;
    const filtered = products.filter(
      (product) => product.price <= parseInt(price)
    );
    setFilteredProducts(filtered);
  };

  const handleSearch = (searchValue) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="filter_div">
          <div className="filter">Filter by Price</div>
          <input
            className="filter_input"
            type="number"
            placeholder="Enter maximum price"
            value={maxPrice}
            onChange={handlePriceFilter}
          />
        </div>
        <div className="search_div">
          <div className="search">Search</div>
          <input
            className="search_input"
            type="text"
            placeholder="Search products"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
