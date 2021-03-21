import React, {useState, Fragment} from 'react';

const Footer = () => {

  return (

      <footer className="footer">
        <section className="footer__middle">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer__logo">
                  <img src="/images/logojasvector.svg" alt="Hartvoorharmonie" width={100}/>
                </div>
                <div className="footer__address">
                  Hart voor Harmonie | Straat | Postcode | KvK nummer | BTW nummer
                </div>
                <div className="footer__social">
                  <a target="_blank" href="https://www.facebook.com/HartVoorHarmonie/"><i className="icon-facebook"></i></a>
                  <a target="_blank" href="https://www.instagram.com/hartvoorharmonie/"><i className="icon-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer__copy">
          <div className="container">
            <div className="row-item">
              <div className="copyright">
                © Hart voor Harmonie
              </div>
            </div>
          </div>
        </section>
      </footer>
    )
}

export default Footer;
