import "./vehicle-list.css";
import { VehicleCard } from "../components"

const VehicleList = ({vehicles}) => {
    const vehicleList = vehicles.map((vehicle,index) => 
        <li key={index}><VehicleCard name={vehicle.name}/></li>
    )

    return (
        <ul>
            {vehicleList}
        </ul>
    );
};

export default VehicleList;