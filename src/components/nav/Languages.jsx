import { useEffect, useState } from "react";
import "./lng.css";
import Marquee from "react-marquee-slider";
import times from "lodash/times";
import languageData from "./languages.json";

export default function Languages() {
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    // Set language data from JSON file directly
    setLanguage(languageData);
  }, []);

  const numDuplicates = Math.ceil(100 / language.length);
  const duplicatedImages = times(numDuplicates, () => language).flat();

  return (
    <div className="lng_container">
      <div className="servicer11" style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"}}>
        <img loading="lazy" src="https://i.imgur.com/daKrFWE.png" alt="" />
      </div>
      <h2 className="skill_title">Trusted by the kindest clients</h2>
      <p className="skills_para mm">
        Explore a selection of my
        <span className="mooha" style={{ fontWeight: "700" }}>
          projects
        </span>
        Explore section of myOur clients' feedbackspeaks volumes about our commitment to excellence. Read what they have to say about their experiences working with us
      </p>

      <div className="mid">
        <Marquee velocity={1} minScale={1} resetAfterTries={200} >
          {duplicatedImages.map((lg, index) => (
            <div key={index} className="cr">
              <img className="mea" loading="lazy" src={lg.img} alt={lg.title} />
              {/* <h3>{lg.title}</h3> */}
              {/* <p>{lg.para}</p> */}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}