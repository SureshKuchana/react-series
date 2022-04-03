import React from "react";

class ProductList extends React.Component {
  render() {
    return (
      <div className="ui unstackable items">
        <Product />
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="image">
          <img alt="aqua" src="images/products/image-aqua.png" />
        </div>
        <div className="middle aligned content">
          <div className="description">
            <a href="javascript">Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img
              alt="daniel"
              className="ui avatar image"
              src="images/avatars/daniel.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
