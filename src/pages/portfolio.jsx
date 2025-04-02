import Project from '../components/project';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
// Import other project images

function Portfolio() {
  // Array of projects
  const projects = [
    {
      id: 1,
      title: 'Yardify',
      description: 'Webpage app named Yardify focused on selling used stuff online',
      image: project1Image,
      deployedLink: 'https://deployedproject1.com',
      githubLink: 'https://github.com/DoctorLeQuack1/Yardify.git',
    },
    {
      id: 2,
      title: 'Employee tracker',
      description: 'This app was made on typescript , this app help you to create new employees, departments, roles, salaries, etc',
      image: project2Image,
      deployedLink: 'https://deployedproject2.com',
      githubLink: 'https://github.com/Ubs91/Employee-tracker',
    },
    // Add at least 4 more projects
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="row mt-4">
        {projects.map((project) => (
          <Project 
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;