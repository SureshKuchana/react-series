import React from "react";
import {products}  from "../seed";
import Product from "./Product";

class ProductList extends React.Component {
  render() {
    const productComponents =  products.map((product) => {
      return <Product 
        key={product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
      />
    });
    return (
      <div className="ui unstackable items">
        {productComponents}
      </div>
    );
  }
}

export default ProductList;
