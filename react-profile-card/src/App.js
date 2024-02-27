import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "Angel",
        lastName: "Smith",
        location: "Los Angeles",
        occupation: "Front-end developer",
        email: "angel.smith@gmail.com",
    })
    return (
        <main>
           <div className="card-container">
              <span className="pro">PRO</span>
              <img className="round" src="../images/people.jpg" alt="user" />
              <h3>{contact.firstName} {contact.lastName}</h3>
              <h6>{contact.location}</h6>
              <p>{contact.occupation}</p>
              <p>{contact.email}</p>
              <div className="buttons">
                <button className="primary">
                  Message
                </button>
                <button className="primary ghost">
                  Following
                </button>
              </div>
              <div className="skills">
                <h6>Skills</h6>
                <ul>
                  <li>UI / UX</li>
                  <li>Front End Development</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>React</li>

                </ul>
              </div>
            </div>
        </main>
    )
}
