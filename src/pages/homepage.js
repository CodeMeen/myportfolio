import Header from "../components/Header";
import { works } from "../works";

import {
  ArrowRightIcon,
  CopyIcon,
  GithubIcon,
  ArrowUpRight,
  SparkleIcon,
  Linkedin,
  Twitter,
  Mail,
  CopyrightIcon,
} from "lucide-react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "../styles/homepage.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ContactModal from "../components/Contact";
import { handles } from "../handles";

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

  const getTechName = (name) => {
    const obj = skillset.find((eachskill) => {
      return eachskill.icon_class === name;
    });

    if (obj) {
      return obj.name;
    } else {
      return "";
    }
  };

  const [contactOpen,setContactOpen]=useState(false)


  const handleCopy = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied!");
  });
};


  return (
    <div className="homepage">
      <Header openContact={setContactOpen}></Header>

      <div className="rtyu" id="home">
        <div className="glassFilter"></div>
        <div className="circGradientOne"></div>
      </div>

      <div className="welcText">
        <div className="introText">
          Hello, I'm Al-Ameen Olumomi a{" "}
          <span className="fullst">Full Stack Developer</span>
        </div>
        <br></br>
        <div>
          I develop and refine ideas<br></br> into seamless, engaging and
          high-performing<br></br>
          <span className="dgex">digital experiences</span>
        </div>
      </div>

      <div className="actionCont">
        <div className="btn" onClick={()=>setContactOpen(true)}>
          <div className="textHover">Let's Connect</div>
          <div className="goArr">
            <ArrowRightIcon size={14} />
          </div>
        </div>

        {/* <CopyToClipboard text={handles.email}> */}
          <div className="copyEmail" onClick={()=>handleCopy(handles.email)}>
            <CopyIcon size={14} />
            <div className="">{handles.email}</div>
          </div>
        {/* </CopyToClipboard> */}
      </div>

      <div className="shortIntro">
        {/* <div className="title">A Short Intro</div> */}

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

      <div className="sectionWork" id="works">
        <div className="workImgTab"></div>

        <div className="contentTab workTab">
          <div className="title_side">
            <div
              className="title"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
              }}
            >
              <div>My</div> <div className="tsct animatedTitle">Works</div>
            </div>
          </div>

          <div className="workSlide">
            {works.map((work, index) => (
              <div className="eachCard" key={index}>
                <div className="twoGrid">
                  <div className="visual_side">
                    <div className="card1">
                      <div className="previewname">{work.name}</div>
                      <div
                        className="sitepreview"
                        style={{ backgroundImage: `url(${work.imgUrl})` }}
                      ></div>
                    </div>

                    <div className="icnF">
                      {work.githubUrl && work.githubUrl !== "" && (
                        <a href={work.githubUrl} target="_blank" style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 0px'}}>
                          
                          <GithubIcon size={16} className="icon"></GithubIcon>
                        </a>
                      )}

                      {work.projectUrl && work.projectUrl !== "" && (
                        <a   target="_blank" href={work.projectUrl} style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 0px'}}>
                          visit live
                          <ArrowUpRight
                            size={20}
                            className="icon"
                          ></ArrowUpRight>
                        </a>
                      )}

                      {/* <div className="icon github"></div> */}
                    </div>
                  </div>

                  <div className="content_side">
                    <div className="projectTitle">{work.name}</div>

                    <div className="line"></div>

                    <div className="info">&nbsp;&nbsp;{work.info}</div>
                  </div>
                </div>

                <div className="points">
                  {work.features.map((eachFeature, index) => (
                    <div className="eachPoint" key={index}>
                      <SparkleIcon size={13} className="spk"></SparkleIcon>
                      <div>{eachFeature}</div>
                    </div>
                  ))}
                </div>

                <div className="tStack">
                  {work.tech.map((eachTech, index) => (
                    <div className="eachstack" key={index}>
                      <div className={`icon ${eachTech}`}></div>
                      <div className="text">{getTechName(eachTech)}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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

        <div className="contentTab skillstab">
          <div className="title_side">
            <div className="title">
              <div className="text_flex_center">
                <div>My</div>{" "}
                <div className="tsct animatedTitle">Tech Stack</div>
              </div>

              {/* <div className="shortC">I Constantly Try To Improve</div> */}
              <div className="shortC">
                Passionate about cutting edge technologies
              </div>
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

      <div className="sectionAboutme" id="aboutme">
        <div className="gradientBack">
          <div className="circGradient"></div>
          <div className="gradientFilter"></div>
        </div>

        <div className="contentTab workTab">
          <div className="title_side">
            <div className="title_aux">More About Me</div>

            <div
              className="title"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "8px 0px",
              }}
            >
              <div>Hi there! I'm</div>{" "}
              <div className="tsct animatedTitle">Al-Ameen</div>
            </div>
          </div>

          <div className="aboutGrid">
            <div className="textSide">
              <div className="title">
                <span>
                  Full-Stack Developer and a little bit of{" "}
                  <span className="animatedTitle">everything</span>{" "}
                </span>
                &nbsp;
              </div>

              <div className="text">
                <p>
                  I'm Al-Ameen Olumomi, a passionate full-stack developer who
                  thrives on transforming ideas into high-performing digital
                  products through clean, efficient, and maintainable code.
                </p>
                <p>
                  With strong expertise in <b>React</b>, <b>Next.js</b>, <b>Node.js</b>, and a
                  growing command of modern web technologies, I specialize in
                  building full-stack applications that are both intuitive on
                  the front end and robust under the hood. Whether it’s
                  designing scalable APIs, optimizing user interfaces, or
                  streamlining complex workflows, I take pride in delivering
                  seamless experiences across the entire stack.
                </p>
                <p>
                  What drives me most is problem-solving and continuous
                  learning. I genuinely enjoy diving into challenging projects
                  that push my boundaries, exploring new frameworks, and
                  refining my skills to stay ahead in a fast-evolving tech
                  landscape. I'm not just focused on writing code — I'm
                  committed to writing purposeful code that makes a real impact.
                </p>
                <p>
                  When I'm not coding, you'll likely find me exploring
                  open-source tools, staying updated on the latest in tech, or
                  collaborating with others to bring new ideas to life. I value
                  creativity, curiosity, and craftsmanship — and I aim to
                  reflect that in every project I touch.
                </p>
              </div>

              <div className="n_pack">
                
                 <a href={handles.linkedin} target="_blank" rel="noreferrer" >
                <Linkedin
                  size={30}
                  color={"var(--otherOne)"}
                  className="click_contact"
                ></Linkedin>
                </a>

                 <a href={handles.twitter} target="_blank" rel="noreferrer">
                <Twitter
                  size={30}
                  color={"var(--otherOne)"}
                  className="click_contact"
                ></Twitter>
                </a>

                <a href={`mailto:${handles.email}`} target="_blank" rel="noreferrer">
                  <Mail
                    size={30}
                    color={"var(--otherOne)"}
                    className="click_contact"
                  ></Mail>
                </a>
                {/* <div className="icon_click whatsapp"></div> */}
              </div>

              <br></br>

              <div className="connect_btn" onClick={()=>setContactOpen(true)}>
                <div className="textHover">Let's Connect</div>
                <div className="goArr">
                  <ArrowRightIcon size={14} />
                </div>
              </div>
            </div>

            <div className="myImg">
              <div className="img_content_gradient">
                <div className="clickpack">
                  <a href={`mailto:${handles.email}`} target="_blank" rel="noreferrer">
                    <Mail size={20} className="click_contact"></Mail>
                  </a>

                  

                  <a href={handles.whatsapp} target="_blank" rel="noreferrer">
                    <div className="icon_contact whatsapp"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <ContactModal toggle={contactOpen} setToggle={setContactOpen}></ContactModal>
    

      <div className="endingdetail">
        <div className="innergradient">
          <div>
            <div className="footerlogoName">
              <span>A</span>
              <span className="otherO">O</span>
            </div>

            <div className="v_text">
              From Vision To Execution Let Us Bring Your Project To Life
            </div>

            <div className="fgh_cont">
              <div className="connect_btn" onClick={()=>setContactOpen(true)}>
                <div className="textHover">Let's Connect</div>
                <div className="goArr">
                  <ArrowRightIcon size={14} />
                </div>
              </div>
            </div>

            <div className="fooText">
              <div className="title">
                I'm available for full-time roles & freelance projects.
              </div>
              <div className="text">
                I thrive on crafting dynamic web applications, and delivering
                seamless user experiences.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer_content">
          <div className="footer_flex">
            <div className="logoName">
              <span>A</span>
              <span className="otherO">O</span>
            </div>
            <CopyrightIcon size={14}></CopyrightIcon>
            <div className="rights_text">2025. All rights reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
