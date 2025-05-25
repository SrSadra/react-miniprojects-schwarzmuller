import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DATA = [{
    id : "p1",
    title: "book",
    description: "my first book",
    price : 5
  }]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DATA.map(product => 
            (<ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
          />)
          )
        }

      </ul>
    </section>
  );
};

export default Products;
