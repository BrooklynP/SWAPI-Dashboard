import "./vehicle-list.css";
import { VehicleCard } from "../components"

const VehicleList = ({vehicles}) => {
    const vehicleList = vehicles.map((vehicle,index) => 
        <li key={index}><VehicleCard vehicle={vehicle}/></li>
    );

    return (
        <ul className="vehicle-list">
            {vehicleList}
        </ul>
    );
};

export default VehicleList;