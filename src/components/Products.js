import React, {useState, useEffect} from "react";
import axios from "axios";
import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContentLoader from 'react-content-loader';
import { NavLink } from "react-router-dom";

const Products = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true)
    axios({
      method:"GET",
      url:"https://fakestoreapi.com/products"
    }).then(res => {
      setData(res.data)
    }).catch(e => {
      console.log(e)
    }).finally(() =>setLoading(false))
  }, [])

  return (
    <div id={props.link}>
      {loading && (
        <div className="container">
          <ContentLoader
            width={1300}
            height={800}
            viewBox="0 0 1300 800"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
          >
            <rect x="15" y="58" rx="10" ry="10" width="300" height="350" />
            <rect x="330" y="57" rx="10" ry="10" width="300" height="350" />
            <rect x="645" y="56" rx="10" ry="10" width="300" height="350" />
            <rect x="960" y="55" rx="10" ry="10" width="300" height="350" />
            <rect x="15" y="420" rx="10" ry="10" width="300" height="350" />
            <rect x="330" y="419" rx="10" ry="10" width="300" height="350" />
            <rect x="645" y="418" rx="10" ry="10" width="300" height="350" />
            <rect x="960" y="417" rx="10" ry="10" width="300" height="350" />
          </ContentLoader>
        </div>
      )}
      <div className="product-container d-flex justify-content-center">
      <Row xs={0} md={4}>
      {data.map((product) =>(
        <Col>
        <Card key={product.id} border="light" className="h-90">
            <Card.Img src={product.image} alt={product.title} />
          <Card.Body >
            <Card.Title>{product.title.length > 37 ?
                `${product.title.substring(0, 37)}` : product.title}</Card.Title>
            <div className="price-badge">
            <h6 className="fw-bold">Price: {product.price}</h6>
            <Badge pill bg="info" text="dark">{product.category}</Badge>
            </div>
            
            <Card.Text><br />{product.description.length > 50 ?
                `${product.description.substring(0, 50)}...` : product.description
                }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <NavLink className="btn btn-success me-2" to={`/products/${product.id}`}>Detail</NavLink>
            <Button variant="primary">
              <i className="fa fa-cart-plus"/>
            </Button>
          </Card.Footer>
        </Card>
        </Col>
      ))}
      </Row>
      </div>
    </div>
  );
}

export default Products;