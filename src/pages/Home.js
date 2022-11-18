import React from "react";
import '../App.css';
import Products from "../components/Products";
// import Hero from "../components/Hero";


const Home = () => {
  return (
    <div>
      <div className="jumbotron p-5">
        <h1 className="display-4 pt-5 fw-bold"><br /><br />Selamat Bergabung!<br /></h1>
        <h5>Tokokeren lebih dari sekedar toko online, ini merupakan komunitas paling keren se-galaksi Bima Sakti.</h5>
        <br />
        <p className="lead">
          <button className="btn btn-primary btn-lg" ><a href="#middle" style={{textDecoration: "none", color: "white"}}>Belanja sekarang</a></button>
          <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </p>
      </div>
      <div id="middle"><br /><br /><br />
        <Products />
      </div>     
    </div>
  );
}

export default Home;