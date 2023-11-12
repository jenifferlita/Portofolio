import Gambar2 from "./Gambar2";
import Gambar3 from "./Gambar3";
import Gambar4 from "./Gambar4";
import Gambar5 from "./Gambar5";
import Gambar6 from "./Gambar6";
import Gambar1 from "./Gambar1";

const Work = () => {
  return (
    <section id="works" className="works section no-padding">
      <div className="container-fluid">
        <div className="row no-gutter">
          <Gambar1 />
          <Gambar2 />
          <Gambar3 />
          <Gambar4 />
          <Gambar5 />
          <Gambar6 />
        </div>
      </div>
    </section>
  );
};

export default Work;
