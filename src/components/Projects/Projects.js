import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo-app.jpeg";
import wikipedia from "../../Assets/Projects/wikipedia.jpeg";
import mernblog from "../../Assets/Projects/mern-blog photo.jpeg";
import ecommerce from "../../Assets/Projects/E-commerce.jpeg";
import moneymanager from "../../Assets/Projects/money-manager.jpeg";
import weather from "../../Assets/Projects/weather-app.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce"
              description="I have developed a fully functional e-commerce application that includes key features such as user authentication (login,register), cart management, and payment processing. For the front end, I used React.js and styled it with TailwindCSS. The back end is powered by MongoDB to handle data storage efficiently."
              ghLink="https://github.com/aggisanjay/mern-deploy-ecommerce"
              demoLink="https://mern-deploy-ecommerce-1.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mernblog}
              isBlog={false}
              title="MERN BLOG"
              description="I developed a fully functional blog application using the MERN stack (MongoDB, Express, React.js, and Node.js). The frontend was built with React.js and styled using Tailwind CSS, ensuring a modern, responsive design. The application allows users to create, edit, and delete posts, with all data securely managed in a MongoDB database. User interactions and post management are handled efficiently through RESTful APIs built with Express and Node.js. This project demonstrates my ability to integrate backend functionality with a dynamic, visually appealing frontend."
              ghLink="https://github.com/aggisanjay/mern-blog"
              demoLink="https://mern-blog-9ik8.onrender.com"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="I developed a weather application using React components that allows users to search for cities and view real-time weather data. The app dynamically updates based on user input, providing a seamless and interactive experience. This project highlights my skills in building responsive and data-driven applications with React."
              ghLink="https://github.com/aggisanjay/weather-app-using-react"
              demoLink="https://weather-app-using-react-2-ojxf.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="I built a persistent to-do application with full CRUD (Create, Read, Update, Delete) functionality to help users track tasks. The list of tasks is displayed using HTML list elements and styled with CSS and Bootstrap for a clean, user-friendly interface. CRUD operations were implemented through JavaScript event listeners, allowing dynamic updates to the UI using DOM manipulation. The application utilizes arrays and objects, with methods for efficient task management. Additionally, I used local storage to ensure that the state of the to-do list persists across page reloads, enhancing the user experience. Technologies used include HTML, CSS, JavaScript, and Bootstrap."
              ghLink="https://github.com/aggisanjay/todo"
              demoLink="https://todo-vert-two.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moneymanager}
              isBlog={false}
              title="Money Manager"
              description="I created a Money Manager application using React that allows users to track their income and expenses. The app enables users to add transactions by entering a title, amount, and selecting whether it's an income or expense. Each transaction is dynamically updated in the transaction history using React's state management. The app calculates and displays the user's balance, total income, and total expenses in real-time. CRUD operations are efficiently handled, allowing users to delete transactions when needed"
              ghLink="https://github.com/aggisanjay/money-manager"
             demoLink="https://money-manager-blush.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wikipedia}
              isBlog={false}
              title="Wikipedia"
              description="I developed a dynamic Wikipedia search application using vanilla JavaScript, allowing users to search for articles in real time. The app captures the user's input, triggers the search when the Enter key is pressed, and fetches data from a Wikipedia API. Each search result includes a title, URL, and description, which are dynamically created and displayed in the results section using DOM manipulation."
              ghLink="https://github.com/aggisanjay/wikipedia"
              demoLink="https://wikipedia-sooty.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
