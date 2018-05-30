import * as React from 'react';

export interface IBrandProps {
  brand: string;
  price: string;
  productName: string;
  solutionsFor: string;
}

export const Product: React.SFC<IBrandProps>= (props) => {
  const {brand, price, productName, solutionsFor} = props;
  const solutionsForText = "Solutions For: "
  return(
    <div>
    <h1> {brand} </h1>
    <p> {price} {productName} </p>
    <strong> {solutionsForText} </strong>
    <p> {solutionsFor} </p>
    </div>
  );
}

export default Product;
