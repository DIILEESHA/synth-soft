import "./hero.css";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Faq from "../../components/nav/Faq";
import Languages from "../../components/nav/Languages";
import Table from "../../components/nav/Table";
import Contact from "../../components/nav/Contact";
import Footer from "../../components/nav/Footer";

const textVariants = {
  hidden: { opacity: 0, y: 50, transition: { type: "spring", stiffness: 10 } },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 40, duration: 5 },
  },
};

const Hero = () => {
  return (
    <div className="hero_main">
      <div className="hero_container">
        <div className="hero_img">
          {/* <img src="https://i.imgur.com/wr82owh.png" alt="Hero" /> */}
        </div>
        <div className="transformer">
          <Marquee
            gradient={true}
            gradientWidth={300}
            gradientColor="#070708"
            speed={30} // Adjust speed as needed
            direction="left" // Direction of the marquee
            loop={0} // 0 for infinite looping
            autoFill={true}
          >
            <div className="halo">
              <h2>Personalized Assignment Guidance ✨</h2>
              <h2>Efficient Time Management Tips ✨</h2>
              <h2>Comprehensive Subject Coverage ✨</h2>
              <h2>Exceptional Academic Support ✨</h2>
              <h2>Strategic Study Plans ✨</h2>
            </div>
          </Marquee>
        </div>

        <div className="hero_sub_container one">
          <div className="hero_top_view">
            <img
              className="top_img"
              src="https://i.imgur.com/xcVydSK.png"
              alt=""
              loading="lazy"
            />

            <h2 className="view_text">
              Based on
              <div style={{ color: "#28a263", margin: "0px 5px" }}>
                {" "}
                <CountUp enableScrollSpy duration={5} delay={3} end={100} />+
              </div>
              reviews
            </h2>
          </div>
          <motion.h1
            className="view_lg_text"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Effortless Assignment Solutions for Success!
          </motion.h1>
          <motion.p
            className="sm_para"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Helping students achieve academic excellence, one assignment at a
            time. We specialize in providing seamless support for students
            across all subjects. Our expert assistance is designed to make your
            academic journey smoother and more successful.
          </motion.p>

          <div className="demo_view">
            <div className="demo_viewer">
              <div className="demo_line"></div>
              <p className="demo_para">Your Trusted Assignment Help Partner</p>
            </div>
            <div className="demo_btn">
              <button>get a free demo</button>
            </div>
          </div>
          <div className="bootm_img">
            {/* <img src="https://i.imgur.com/43B8m55.png" alt="" /> */}
          </div>
        </div>
        <div className="hero_sub_container two">
          <img
            className="right_img"
            src="https://i.imgur.com/WZSRBpX.png"
            alt=""
            />
        </div>{" "}

        <div className="hero_sub_container three">
          <div id="testimonials">
            <Languages />
          </div>
        </div>{" "}
        <div className="hero_sub_container three">
          <div id="services">
            <Table />
          </div>
          <div id="faq">
            <Faq />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
      {/* <h2>ssss</h2> */}
      {/* <Faq/> */}
    </div>
  );
};

export default Hero;
