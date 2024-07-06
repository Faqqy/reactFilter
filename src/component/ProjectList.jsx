   
function ProjectList({ projects }) {
    return (
            <div className="imgGrid">
                {projects.map((project, i) => (
                    <img className="imgGridItem"
                        key={i} 
                        src={project.img} 
                        alt={project.category} 
                    />
                ))}
            </div>
        );
    };

  export default ProjectList