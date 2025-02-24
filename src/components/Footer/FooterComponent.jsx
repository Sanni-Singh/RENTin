import './FooterComponent.css'

const FooterComponent = ()=>{
    return (
        <footer className="footer-container">
          <div className="foot">
            <div className="copy-head">
              <h2 className="foot-head">RENTin</h2>
              <p className="foot-copy">© 2025 RENTin. All rights reserved.</p>
            </div>
            <div className="links">
              <a href="/about" className='ankar'>About Us</a>
              <a href="/contact" className='ankar'>Contact</a>
              <a href="/privacy" className='ankar'>Privacy Policy</a>
              <a href="/terms" className='ankar'>Terms of Service</a>
            </div>
          </div>
        </footer>
      );
}

export default FooterComponent;