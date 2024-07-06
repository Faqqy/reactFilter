
const Toolbar = ({ filters, onSelectFilter, selected}) => {

    return (
        <div className="tabsButton">
            {filters.map((filter, i) => (
                <div     
                    className={filter === selected ? "active" : false}
                    key={i}
                    onClick={() => onSelectFilter(filter)}
                    >
                    {filter}
                </div>

            ))}
        </div>
    )
  }

 

export default Toolbar;