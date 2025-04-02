function Project({ title, image, deployedLink, githubLink, description }) {
    return (
      <div className="col-md-6 mb-4">
        <div className="card h-100">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer bg-transparent border-top-0">
            <a href={deployedLink} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
              View App
            </a>
            <a href={githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Project;