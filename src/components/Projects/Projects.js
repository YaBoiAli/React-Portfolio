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
              imgPath={blog}
              isBlog={false}
              title="Anime Style Blog"
              description="This is a simple weather application built with JavaScript that retrieves and displays the weather forecast for a given city."
              ghLink="https://github.com/Afrozez/anime-forum"
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
              description="The project is an innovative online platform designed to facilitate engaging discussions among users who share an interest in various types of content. The platform offers user registration and authentication, allowing participants to create accounts securely using Node.js technology. Users can then log in and post comments on articles, blog posts, videos, and more. The comment creation process is user-friendly, encouraging respectful interactions. The entire system is built on Node.js for performance and scalability and utilizes SQL for efficient data management. Overall, the project aims to create a space where users can connect, share ideas, and engage in meaningful conversations about their favorite content."
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
