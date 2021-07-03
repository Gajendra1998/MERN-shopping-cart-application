import './Product.css'
import { Link } from 'react-router-dom';
const Product = () => {
    return (
        <div className="product">
          <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name" />
          <div className="product__info " >
              <p className="info__name"> </p>
                  <p className="info__description">
              Lorem ipsum dolor sit amet c        onsectetur adipisicing elit. Excepturi ab dolorum voluptatem sint dicta id earum ullam facere ipsum consequuntur.
            
                  </p>
                  <p className="info__price"> ₹50,000</p>
                <Link to={`/product/${111}` }className="info__button">
                    view
                </Link>
             
          </div>
        </div>
    )
}
export default Product;