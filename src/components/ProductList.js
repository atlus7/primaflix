import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  const { products } = props;

  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
