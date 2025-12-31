import './footer.css'

export default function Footer() {
  return ( 
 <footer className="cinema-footer text-white">
  <div className="footer-overlay">
    <div className="container-fluid px-5">
      <div className="row gy-4">
        {/* Logo */}
        <div className="col-lg-3 col-md-6">
          <h4 className="footer-logo">Cinema Movie</h4>
          <p className="footer-text">
            Experience movies like never before. Discover, watch &amp; enjoy the best cinema moments.
          </p>
        </div>
        {/* Links */}
        <div className="col-lg-3 col-md-6">
          <h5 className="footer-title">Quick Links</h5>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        {/* Categories */}
        <div className="col-lg-3 col-md-6">
          <h5 className="footer-title">Categories</h5>
          <ul className="footer-links">
            <li><a href="#">Action</a></li>
            <li><a href="#">Drama</a></li>
            <li><a href="#">Horror</a></li>
            <li><a href="#">Comedy</a></li>
          </ul>
        </div>
        {/* Social */}
        <div className="col-lg-3 col-md-6">
          <h5 className="footer-title">Follow Us</h5>
          <div className="footer-social">
            <a href="#"><ion-icon name="logo-facebook" /></a>
            <a href="#"><ion-icon name="logo-instagram" /></a>
            <a href="#"><ion-icon name="logo-twitter" /></a>
            <a href="#"><ion-icon name="logo-youtube" /></a>
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="text-center footer-bottom">
        © 2025 Cinema Movie. Mohamed Sayed.
      </div>
    </div>
  </div>
</footer>


        
  )
}
