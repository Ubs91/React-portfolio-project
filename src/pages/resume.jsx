import resumePDF from '../assets/resume.pdf' 

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <div className="mt-4">
        <p>
          Download my <a href={resumePDF} download="resume.pdf" className="btn btn-primary">resume</a>
        </p>
        
        <h3 className="mt-4">Front-end Proficiencies</h3>
        <ul className="list-group">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">jQuery</li>
          <li className="list-group-item">Responsive Design</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">Bootstrap</li>
        </ul>
        
        <h3 className="mt-4">Back-end Proficiencies</h3>
        <ul className="list-group">
          <li className="list-group-item">Node.js</li>
          <li className="list-group-item">Express.js</li>
          <li className="list-group-item">MySQL, Sequelize</li>
          <li className="list-group-item">MongoDB, Mongoose</li>
          <li className="list-group-item">REST APIs</li>
          <li className="list-group-item">GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;