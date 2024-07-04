import React from "react";
import { useState } from "react";
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';


function Portfolio({projects}) {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const handleSelectFilter = filter => {
        setSelectedFilter(filter);
    };

    const filteredProjects = selectedFilter === 'All' ? projects : projects.filter(project => project.category === selectedFilter);

    return (
        <div className="container">
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={setSelectedFilter}
                onSelectFilter={handleSelectFilter}        
            />   
            <ProjectList projects={filteredProjects} /> 
        </div>
    )
}

// class Portfolio extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         selectedFilter: 'All',
//       };
//     }
  
//     handleSelectFilter = (filter) => {
//       this.setState({ selectedFilter: filter });
//     };
  
//     render() {
//       const { selectedFilter } = state;
//       const { filters, projects } = this.props;
  
//       const filteredProjects =
//         selectedFilter === 'All'
//           ? projects
//           : projects.filter(project => project.category === selectedFilter);
  
//       return (
//         <div>
//           <Toolbar
//             filters={filters}
//             selected={selectedFilter}
//             onSelectFilter={this.handleSelectFilter}
//           />
//           <ProjectList projects={filteredProjects} />
//         </div>
//       );
//     }
//   }

export default Portfolio