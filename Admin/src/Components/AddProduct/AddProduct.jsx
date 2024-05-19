import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

export const AddProduct = () => {
    const [image, setImage] = useState(null);
     // Fixed typo: "flase" to "null"
     const [productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""


     })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const ChangeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value});
    }
    const Add_Product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data});
        if(responseData.sucess){
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                header:{
                    Accept:'application/json',
                    'Content-Type':'applicatio/json',
                },
                body:JSON.stringify(product),
            }).than((resp)=>resp.json()).then((data)=>{
                data.sucess?alert("Product Added"):alert("failed")
            })
        }
    }

    return (
        <div className='addproduct'>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={ChangeHandler} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={ChangeHandler} type="text" name='old_price' placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p> Offer Price</p>
                    <input value={productDetails.new_price} onChange={ChangeHandler} type="text" name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={ChangeHandler} name="category" className='add-product-selector'>
                    <option value="Women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img'  alt="" />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
            </div>
            <button onClick={Add_Product} className='addproduct-btn'>ADD</button>

        </div>
    );
};
