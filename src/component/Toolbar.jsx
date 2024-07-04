
const Toolbar = ({ filters, onSelectFilter }) => {
    return (
        <div>
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => onSelectFilter(filter)}
                >
                {filter}
                </button>
            ))}
        </div>
    )
  }

export default Toolbar;