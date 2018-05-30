import * as React from 'react';


export interface IBrandProps {
  brand: string;
}

export const Product: React.SFC<IBrandProps>= (props) => {
  const {brand} = props;
  return(
    <div>
    <h1> {brand} </h1>
    </div>
  );
}

export default Product;
