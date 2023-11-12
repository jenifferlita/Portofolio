/* eslint-disable react/no-unescaped-entities */
const Navigation = () => {
  return (
    <section className="banner" role="banner">
      {/* Navigation Section */}
      <header id="header">
        <div className="header-content clearfix">
          {" "}
          <a className="logo" href="#">
            JENIFFER    
          </a>
          <nav className="navigation" role="navigation">
            <ul className="primary-nav">
              <li>
                <a href="#introduction">About Me</a>
              </li>
              <li>
                <a href="#works">Latest Works</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </nav>
          <a href="#" className="nav-toggle">
            Menu
            <span />
          </a>{" "}
        </div>
      </header>
      <div className="container">
        <div className="col-md-7 banner-inner-wrapper">
          <div className="banner-text">
            <h1>I'm Jeniffer. A student in Klabat University</h1>
            <p>Nice too meet you all.</p>
            <a
              href="https://instagram.com/jenifer_tasidjawa?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
              className="btn"
            >
              Find out more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
