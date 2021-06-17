import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const items = useSelector((state) => state.products.products);

  const products = items.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
