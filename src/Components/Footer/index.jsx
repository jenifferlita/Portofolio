/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="col-md-4">
          <h4>Contact</h4>
          <p>
            {" "}
            Girian
            <br />
            Email :{" "}
            <a href="s22110064@student.unklab.ac.id">
              {" "}
              s22110064@student.unklab.ac.id"
            </a>
          </p>
        </div>
        <div className="col-md-3">
          <h4>Social presense</h4>
          <ul className="footer-share">
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus" />
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-5">
          <p>
            © 2015 All rights reserved. All Rights Reserved
            <br />
            Fisit <i className="fa fa-heart pulse" />
            University <a href="https://www.unklab.ac.id/">Klabat</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
