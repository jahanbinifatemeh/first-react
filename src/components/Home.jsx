import "../index.css";
import circle from "../img/circle.png"
import profilepic from "../img/profilepic.png"

export default function Home() {
  return (
    <div className="header">
      <div className="header-nav">
        <nav>
          <ul className="header-nav-ul">
            <a href="#">
              <li>FJ</li>
            </a>
          </ul>
          <ul className="header-nav-ul">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About Me</li>
            </a>
            <a href="#">
              <li>Works</li>
            </a>
            <a href="#">
              <li>Skills</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </div>
      <div className="porofile">
        <div className="porofile-text">
          <h2>Full Stack Developer</h2>
          <h1>
            FATEMEH <br /> JAHANBINI
          </h1>
          <p>
            Crafting digital experiences that push the <br /> boundaries of technology
            and creativity.<br /> Specialized in building the future, one line of code
            at a time.
          </p>
        </div>
        <div className="porofile-img">
            <img src={circle} alt="circle" className="img-circle"  />
            <img src={profilepic} alt="circle" className="img-profilepic"  />
        </div>
      </div>
    </div>
  );
}

