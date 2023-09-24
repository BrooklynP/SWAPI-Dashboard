import "./vehicle-card.css";

const VehicleCard = ({ vehicle }) => {
    return (
        <article className="vehicle-card">
            <header>
                <h2> - {vehicle.name || ""} - </h2>
            </header>
            <div className="vehicle-card-image">
                <img src="https://clipart-library.com/data_images/57896.jpg"></img>
            </div>
            <div className="vehicle-card-body">
                <div>
                    <h3>{vehicle.model || ""}</h3>
                    <h4><small>{vehicle.manufacturer || ""}</small></h4>
                </div>
                <div className="vehicle-card-stats">
                    <div title="Crew"><p><i className="fa-solid fa-id-card"></i></p><p>{vehicle.crew || -1}</p></div>
                    <div title="Passengers"><p><i className="fa-solid fa-person"></i></p><p>{vehicle.passengers || -1}</p></div>
                    <div title="Consumables capacity"><p><i className="fa-solid fa-boxes-stacked"></i></p><p>{vehicle.consumables || ""}</p></div>
                    <div title="Top speed"><p><i className="fa-solid fa-gauge"></i></p><p>{vehicle.max_atmosphering_speed || ""}mph</p></div>
                </div>
            </div>
            <footer>
                {vehicle.cost_in_credits || -1}$
            </footer>
        </article>
    );
};

export default VehicleCard;