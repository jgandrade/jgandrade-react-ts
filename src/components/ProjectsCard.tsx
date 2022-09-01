import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";

function ProjectsCard(props: any) {
    let tools = props.tools.map((e: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined, i: Key | null | undefined) => <p key={i}>{e}</p>);

    return (
        <div className="project-card">
            <a href={props.link} target="_blank"><img src={props.img} /></a>
            <p>Click image to redirect to project</p>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="tools">
                <h4>Below are the tools I used:</h4>
                <div>
                    {tools}
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard;
