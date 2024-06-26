import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import sql from "../../Assets/Projects/SQL.png";
import quiz from "../../Assets/Projects/quiz.png";
import notetaker from "../../Assets/Projects/notetaker.png";
import orm from "../../Assets/Projects/orm.png";
import blog from "../../Assets/Projects/blog.png";
import buddy from "../../Assets/Projects/buddy.png"
import techBlog from "../../Assets/Projects/techBlog.png"
import jate from "../../Assets/Projects/jate.png"
import gemini from "../../Assets/Projects/gemini.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="pink">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buddy}
              isBlog={false}
              title="Study Buddies"
              description="StudyBuddy is a web application for collaborative learning, powered by MongoDB, GraphQL, and Apollo. Users can create, share, and study flashcards with ease, enhancing their educational experience."
              ghLink="https://github.com/YaBoiAli/StudyBuddy"
              demoLink="https://study-buddy-p3-0d14fa2a37d6.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemini}
              isBlog={false}
              title="Gemini Chatbot"
              description="Gemini is a chatbot that can answer questions about the weather, provide information about the local businesses, and provide information about basically anything. It uses the gemini API so that any question that can be asked to the chatbot can be answered."
              ghLink="https://github.com/YaBoiAli/Gemini-Chatbot"
              demoLink="https://gemini-chatbot-psi.vercel.app/"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techBlog}
              isBlog={false}
              title="Tech Blog"
              description="This CMS-style blog site offers a seamless user experience: visitors encounter existing blog posts on the homepage and can explore through navigation links. Signing up provides access to create, view, and manage posts, while logging in reveals additional navigation options and the ability to leave comments on posts. The dashboard facilitates effortless post management, including creation, editing, and deletion. Automatic logout after inactivity ensures security without hindering the ability to view posts and comments."
              ghLink="https://github.com/YaBoiAli/TechBlog"
              demoLink="https://limitless-springs-23948-f62474a2cc6d.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jate}
              isBlog={false}
              title="Jate Text Editor Web App"
              description="The web application described is an advanced text editor with a client-server structure, utilizing technologies like webpack and next-gen JavaScript. It seamlessly integrates features such as IndexedDB for instant content saving and retrieval, as well as a registered service worker via workbox, providing offline capabilities and efficient caching. The app supports easy installation to the desktop, and its deployment process to Heroku is streamlined with optimized build scripts."
              ghLink="https://github.com/YaBoiAli/Text-editor-webapp"
              demoLink="https://sleepy-eyrie-91915-d97e8d8e4249.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notetaker}
              isBlog={false}
              title="Note Taker"
              description="The Note Taker application is a user-friendly digital platform designed to streamline the process of capturing, organizing, and managing personal notes. With a focus on simplicity and efficiency, the application provides users with a seamless experience in creating, editing, and accessing their notes. Whether it's jotting down quick ideas, making to-do lists, or storing important information, the Note Taker application aims to be a versatile tool for individuals to manage their thoughts and tasks. "
              ghLink="https://github.com/YaBoiAli/NoteTaker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Coding Quiz"
              description="Step into the world of coding challenges with our interactive quiz. Race against the clock, answer questions, and witness your progress through saved scores and highest achievements. Experience seamless access across devices as your data is stored securely in local storage. Are you ready to test your coding mettle?"
              ghLink="https://github.com/YaBoiAli/CodingQuiz"
              demoLink="https://yaboiali.github.io/CodingQuiz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Application"
              description="This is a simple weather application built with JavaScript that retrieves and displays the weather forecast for a given city."
              ghLink="https://github.com/YaBoiAli/Weather-Application"
              demoLink="https://yaboiali.github.io/Weather-Application/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orm}
              isBlog={false}
              title="ORM E-Commerence BackEnd"
              description="This was an ORM backend project of a ecommernce website, It was tested using Insomnia. You can post, create, edit, or update the prices, names and tags!"
              ghLink="https://github.com/YaBoiAli/ORM-Ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="SQL Employee Tracker"
              description="This command-line application allows you to manage employee data within a database. You can perform various actions such as viewing departments, roles, and employees, adding departments, roles, and employees, and updating an employee's role."
              ghLink="https://github.com/YaBoiAli/SQL-Employee-Tracker"
              demoLink="https://www.youtube.com/watch?v=eHruLGipWnI&ab_channel=MuzzammilNawab"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
