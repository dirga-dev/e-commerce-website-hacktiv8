
function Hero(props) {
  return (
    <>
    <div className="jumbotron p-5">
      <h1 className="display-4 pt-5 fw-bold"><br /><br />Halo guys!<br /></h1>
      <h3>Tokokeren menyediakan berbagai jenis pakaian sesuai jiwa dan gaya hidupmu.</h3>
      <p className="lead">
        <button className="btn btn-primary btn-lg" href={props.tolink}>Belanja sekarang</button>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </p>
    </div>
    </>
  );
}

export default Hero;