import React from "react";
import { useState } from "react";
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';


function Portfolio({projects}) {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filteredProjects = 
        selectedFilter === 'All' ? projects : projects.filter(project => project.category === selectedFilter);

    function click(filter) {
         setSelectedFilter(filter);
    }

    return (
        <div className="container">
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selectedFilter}
                onSelectFilter={click}
            />   
            <ProjectList projects={filteredProjects} /> 
        </div>
    )
}

export default Portfolio