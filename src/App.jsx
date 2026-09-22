import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Home */}
      <section id="home" className="home">
        <div className="home-content">
          <p className="hello">HELLO, I'M</p>

          <h1>Siri</h1>

          <h2>Computer Science Engineering Student</h2>

          <p className="intro">
            I am passionate about software development, web development,
            and exploring new technologies.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              className="btn resume-btn"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="about-content">
          <p className="section-title">ABOUT ME</p>

          <h2>Who I Am</h2>

          <p>
            I am a Computer Science Engineering student with a strong
            interest in software development and web technologies.
          </p>

          <p>
            I enjoy learning new technologies, building projects, and
            improving my programming skills through practical experience.
          </p>

          <p>
            My goal is to develop useful and creative software solutions
            while continuously growing as a technology professional.
          </p>
        </div>

        <div className="about-info">
          <div className="info-card">
            <h3>🎓 Education</h3>
            <p>Computer Science Engineering</p>
          </div>

          <div className="info-card">
            <h3>💻 Interests</h3>
            <p>Software Development & Web Development</p>
          </div>

          <div className="info-card">
            <h3>🚀 Goal</h3>
            <p>Build useful and innovative software</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <p className="section-title">MY SKILLS</p>

        <h2>Technologies I Work With</h2>

        <div className="skills-container">
          <div className="skill-card">
            <div className="skill-icon">🐍</div>
            <h3>Python</h3>
            <p>Programming & Problem Solving</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <h3>HTML</h3>
            <p>Web Page Structure</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>CSS</h3>
            <p>Web Design & Styling</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚡</div>
            <h3>JavaScript</h3>
            <p>Interactive Web Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🔧</div>
            <h3>Git & GitHub</h3>
            <p>Version Control</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <p className="section-title">MY PROJECTS</p>

        <h2>What I've Built</h2>

        <div className="projects-container">
          {/* Project 1 */}
          <div className="project-card">
            <h3>Virtual College Assistant</h3>

            <p>
              A software application designed to provide information about
              college fees, bus timings, exam schedules, syllabus, faculty,
              and college events.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://github.com/Psiri-15"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Student Campus Portal</h3>

            <p>
              A student portal prototype that provides useful academic
              information and a simple interface for students.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <a
              href="https://github.com/Psiri-15"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h3>My React Store</h3>

            <p>
              A simple shopping application built using React with product
              cards, navigation, and a basic shopping interface.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Vite</span>
              <span>CSS</span>
            </div>

            <a
              href="https://github.com/Psiri-15/my-project"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <p className="section-title">GET IN TOUCH</p>

        <h2>Contact Me</h2>

        <p className="contact-text">
          I would love to connect with you. Feel free to reach out for
          projects, internships, or professional opportunities.
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>
                <a href="mailto:vu.241fa04362@gmail.com">
                  vu.241fa04362@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-card">
              <h3>💻 GitHub</h3>
              <p>
                <a
                  href="https://github.com/Psiri-15"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Psiri-15
                </a>
              </p>
            </div>

            <div className="contact-card">
              <h3>🔗 LinkedIn</h3>
              <p>
                <a
                  href="https://www.linkedin.com/in/lakshmi-siri-2685b2355"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/lakshmi-siri-2685b2355
                </a>
              </p>
            </div>

            <div className="social-buttons">
              <a
                href="https://github.com/Psiri-15"
                className="social-btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/lakshmi-siri-2685b2355"
                className="social-btn"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Siri. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;