import { useContext } from "react";
import { cartContext } from "../store/shoppingCart.context";

export default function Product({
  id,
  image,
  title,
  price,
  description,
}) {

  const {addToCart} = useContext(cartContext);

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => addToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
