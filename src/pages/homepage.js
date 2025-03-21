import Header from "../components/Header";
import { ArrowRightIcon, CopyIcon } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "../styles/homepage.scss";
import { useState } from "react";

const HomePage = () => {
  const [skillset, setSkillset] = useState([
    {
      name: "Html",
      icon_class: "html",
    },
    {
      name: "Css",
      icon_class: "css",
    },
    {
      name: "Javascript",
      icon_class: "js",
    },
    {
      name: "Typescript",
      icon_class: "ts",
    },
    {
      name: "ReactJS",
      icon_class: "react",
    },
    {
      name: "NextJS",
      icon_class: "next",
    },
    {
      name: "AngularJS",
      icon_class: "angular",
    },
    {
      name: "Framer Motion",
      icon_class: "framer",
    },
    {
      name: "GSAP",
      icon_class: "gsap",
    },
    {
      name: "SASS",
      icon_class: "sass",
    },
    {
      name: "Ionic",
      icon_class: "ionic",
    },

    {
      name: "NodeJS",
      icon_class: "node",
    },

    {
      name: "ExpressJS",
      icon_class: "express",
    },

    {
      name: "PHP",
      icon_class: "php",
    },

    {
      name: "MongoDB",
      icon_class: "mongo",
    },

    {
      name: "Mysql",
      icon_class: "mysql",
    },
    {
      name: "PostgreSql",
      icon_class: "postsql",
    },

    {
      name: "Git",
      icon_class: "git",
    },

    {
      name: "Github",
      icon_class: "github",
    },

    {
      name: "Vercel",
      icon_class: "vercel",
    },

    {
      name: "Postman",
      icon_class: "postman",
    },

    {
      name: "Linux",
      icon_class: "linux",
    },
  ]);

  return (
    <div className="homepage">
      <Header></Header>

      <div className="rtyu">
        <div className="glassFilter"></div>
        <div className="circGradientOne"></div>
      </div>

      <div className="welcText">
        I develop and refine ideas<br></br> into seamless, engaging and
        high-performing<br></br>
        <span className="dgex">digital experiences</span>
      </div>

      <div className="introText">
        Hello, I'm Al-Ameen Olumomi a{" "}
        <span className="fullst">Full Stack Developer</span>
      </div>

      <div className="actionCont">
        <div className="btn">
          <div className="textHover">Let's Connect</div>
          <div className="goArr">
            <ArrowRightIcon size={14} />
          </div>
        </div>

        <CopyToClipboard text={"alameenolumomi@gmail.com"}>
          <div className="copyEmail">
            <CopyIcon size={14} />
            <div className="">alameenolumomi@gmail.com</div>
          </div>
        </CopyToClipboard>
      </div>

      <div className="shortIntro">
        <div className="title">A Short Intro</div>

        <div className="text">
          I am a full-stack developer with more than 6 years of expertise. I
          create stunning online and mobile applications, excel at front-end web
          design, and create robust backend systems as well.I am a fully
          qualified web engineer
        </div>
      </div>

      <div className="curve down">
        <svg
          width="100%"
          height="80"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="downwardGradient">
              <stop offset="0%" stop-color="transparent" />
              <stop offset="30%" stop-color="rgba(255, 255, 255, 0.1)" />
              <stop offset="50%" stop-color="rgba(255, 255, 255, 0.5)" />
              <stop offset="70%" stop-color="rgba(255, 255, 255, 0.1)" />
              <stop offset="100%" stop-color="transparent" />
            </linearGradient>
          </defs>

          <path
            d="M 0 10 Q 600 60, 1200 10"
            stroke="url(#downwardGradient)"
            stroke-width="2"
            fill="transparent"
          />
        </svg>
      </div>

      <div className="sectionStack">
        <div className="gradientBack">
          <div className="circGradient"></div>
          <div className="gradientFilter"></div>
        </div>

        <div className="stackCont">
          <div className="title_side">
            <div className="title">
              <div>My</div> <div className="tsct animatedTitle">Tech Stack</div>
              <div className="shortC">I Constantly Try To Improve</div>
            </div>
          </div>

          <div className="stack_side">
            <div className="techStack">
              {skillset.map((data, index) => (
                <div className="eachstack" key={index}>
                  <div className={`icon ${data.icon_class}`}></div>
                  <div className="text">{data.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="curve up">
        <svg
          width="100%"
          height="80"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gentleGradient">
              <stop offset="0%" stop-color="transparent" />
              <stop offset="30%" stop-color="rgba(255, 255, 255, 0.1)" />
              <stop offset="50%" stop-color="rgba(255, 255, 255, 0.5)" />
              <stop offset="70%" stop-color="rgba(255, 255, 255, 0.1)" />
              <stop offset="100%" stop-color="transparent" />
            </linearGradient>
          </defs>
          s
          <path
            d="M 0 40 Q 600 10, 1200 40"
            stroke="url(#gentleGradient)"
            stroke-width="2"
            fill="transparent"
          />
        </svg>
      </div>

      <div className="sectionWork">

        <div className="workTab">
          <div className="title_side">
            <div
              className="title"
              style={{ display: "flex", alignItems: "center", gap: "2px" }}
            >
              <div>Curated</div> <div className="tsct animatedTitle">Work</div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default HomePage;
