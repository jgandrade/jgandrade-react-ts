
function ProjectsCard(props: any) {
    return (
        <div className="project-card">
            <a href={props.link} target="_blank"><img src={props.img} /></a>
            <div>
                <p>Click image to redirect to project</p>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <h4>Below are the tools I used:</h4>
                <div className="tools">
                    {props.tools}
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard;
