import "./footer.css";


export default function Footer() {
  return (
    <div className="footer_maina">
      <div className="footer_container">
        <div className="footer_card">
          <div className="footer_grid">
            <div className="footer_sub">
              <h2 className="footer_title">
                Dedicated to design with a passion
              </h2>
              <ul className="footer_ul">
                <li className="footer_li">
                  <p className="gf">
                    Radiating creativity on a global scale, I am a designer
                    driven by passion and innovation.
                  </p>
                </li>
                <li className="footer_li"></li>
                <li className="footer_li"></li>
                <li className="footer_li"></li>
              </ul>
            </div>
            <div className="footer_sub">
              <h2 className="footer_title">explore</h2>
              <ul className="footer_ul">
                <li className="footer_li">
                  {/* <Link onClick={handleBlogCardClick} className="linka" to="about-me"> */}
                    About Me
                  {/* </Link> */}
                </li>
                <li className="footer_li">
                  {/* <Link onClick={handleBlogCardClick} className="linka" to="/blog"> */}
                    Articles
                  {/* </Link> */}
                </li>
                <li className="footer_li">
                  
                  {/* <Link onClick={handleBlogCardClick} className="linka" to="/guest-book"> */}
                  Guest book
                  {/* </Link> */}
                  </li>
                <li className="footer_li">
                  {/* <Link onClick={handleBlogCardClick} className="linka" to="/resume"> */}
              Resume
                  {/* </Link> */}
                </li>
              </ul>
            </div>
            <div className="footer_sub">
              <h2 className="footer_title">Say hello!</h2>
              <ul className="footer_ul">
                <li className="footer_li">Twitter</li>
                <li className="footer_li">Instagram</li>
                <li className="footer_li">Youtube</li>
                <li className="footer_li">Dribble</li>
              </ul>
            </div>
            <div className="footer_sub">
              <div className="muta">
                <h2 className="footer_title musa">Let’s work together</h2>
                <ul className="footer_ul">
                  <li className=" saq">
                    <div className="saqer">
                      Have an idea?
                      <div className="imh">
                        <img src="https://i.imgur.com/YLyn5cd.png" alt="" />
                      </div>
                    </div>
                  </li>
                  {/* <div className="lino"></div> */}
                  <li className="footer_li lino"></li>
                  <li className="footer_li"></li>
                  <li className="footer_li"></li>
                </ul>
              </div>
            </div>
          </div>
   
     
        </div>

    
      </div>
    </div>
  );
}
