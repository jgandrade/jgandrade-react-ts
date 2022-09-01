import data from './data';
import ProjectsCard from './ProjectsCard';

function Projects() {
    const cards = data.map((card, i) => <ProjectsCard key={i} {...card} />)
    return (
        <div className="projects">
            <h2>Projects</h2>
            {cards}
        </div>
    )
}

export default Projects;
