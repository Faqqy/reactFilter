import React from "react";
import { useState } from "react";
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';


function Portfolio({projects}) {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filteredProjects = selectedFilter === 'All' ? projects : projects.filter(project => project.category === selectedFilter);

    function setSelect(filter) {
         setSelectedFilter(filter);
    }

    return (
        <div className="container">
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selectedFilter}
                onSelectFilter={setSelect}
            />   
            <ProjectList projects={filteredProjects} /> 
        </div>
    )
}

export default Portfolio