import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

const Introduction = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [isi, setIsi] = useState("");

  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `introduction`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setTitle(data.title);
          setSubTitle(data.subTitle);
          setIsi(data.isi);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section id="introduction" className="section introduction">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="intro-content">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="intro-content">
              <p>{subTitle}</p>
              <p>{isi} </p>
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
