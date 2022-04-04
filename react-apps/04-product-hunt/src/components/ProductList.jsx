import React from "react";
import {products}  from "../seed";
import Product from "./Product";

class ProductList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount(){
    this.setState({ products : products })
  }

  handleProductVote = (productId) => {
    const modifiedProducts = this.state.products.map((product) => {
      if(productId === product.id){
        return Object.assign({},product,{
          votes : product.votes + 1
        })
      }else{
        return product
      }
    })
    this.setState({
      products : modifiedProducts
    })
  }

  render() {
    const sortedProductList = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ))
    const productComponents = sortedProductList.map((product) => {
      return <Product 
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductVote}
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
