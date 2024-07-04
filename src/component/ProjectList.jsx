   
function ProjectList({ projects }) {
    return (
            <div className="imgGrid">
                {projects.map((project, index) => (
                    <img className="imgGridItem"
                        key={index} 
                        src={project.img} 
                        alt={project.category} 
                    />
                ))}
            </div>
        );
    };

  export default ProjectList