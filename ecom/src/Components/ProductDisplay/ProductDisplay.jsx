import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

                

            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>

            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>

            </div>
            <div className="productdisplay-right-description">
                
 The Men's Green Solid Zippered Full-Zip Slim Fit Bomber Jacket is a sleek and
 stylish outerwear piece. The jacket comes in a vibrant green color, offering a fresh and 
 contemporary look. Crafted from a durable and lightweight material, it features a full-zip front closure for 
 convenience. The slim fit design provides a modern silhouette, while the ribbed collar and cuffs add a touch of
 sophistication. Functional zippered pockets contribute to both practicality and aesthetics. Versatile and suitable for various occasions,
this bomber jacket is a fashionable choice for those seeking a blend of style and comfort.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women, T-shirt,Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
            
            

        </div>

    </div>
  )
}
