import React,{useState, useEffect} from "react";
import {useParams} from 'react-router';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    }
    getProduct();
  }, [id]);

  const Loading = () => {
    return(
      <div className="d-flex py-5" style={{minHeight: "100vh"}}>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6 mb-5 ms-4">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
        </div>
      </div>
    )
  }

  const ShowProduct = () => {
    return(
      <div className="product-detail d-flex">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} style={{width: "400px", height: "400px"}} />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {product.category}
          </h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating: {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">
            $ {product.price}
          </h3>
          <p className="lead">{product.description}</p>
          <Button variant="primary" className=" px-4 py-2"> 
              <i className="fa fa-cart-plus"/> Add to Cart
          </Button>
          <NavLink to="/cart" className="btn btn-outline-primary ms-2 px-4 py-2" >
              <i className="fa fa-shopping-cart"/> Go to Cart
          </NavLink>
        </div>
      </div>
    )
  }

  return(
    <div>
      <div className="container">
        <div className="row">
          {loading ? <Loading /> : <ShowProduct /> }
        </div>
      </div>
    </div>
  );
}

export default Product;