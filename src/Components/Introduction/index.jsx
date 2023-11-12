/* eslint-disable react/no-unescaped-entities */
const Introduction = () => {
  return (
    <section id="introduction" className="section introduction">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="intro-content">
              <h1>I do... What I love to do...</h1>
            </div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="intro-content">
              <p>
                I am a photography enthusiast who has always been fascinated by
                the beauty that can be captured through a camera lens.
              </p>
              <p>
                To me, photography is more than just taking pictures; it's a way
                to capture different moments, emotions, and unique stories. With
                my camera in hand, I explore the world in search of new angles
                and unexpected moments to capture. Every shot is a new adventure
                in exploring and capturing the wonders around us.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="intro-content">
              <h4>my expertise</h4>
              <ul>
                <li> - Web design</li>
                <li> - photography</li>
                <li> - Baking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
