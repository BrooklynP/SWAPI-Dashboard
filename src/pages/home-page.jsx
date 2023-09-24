import React from "react";
import { VehicleList, EntitySelectionInput } from "../components";
import "./home-page.css";
const testData1 = [
    {
        "name": "CR90 corvette",
        "model": "CR90 corvette",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": "3500000",
        "length": "150",
        "max_atmosphering_speed": "950",
        "crew": "30-165",
        "passengers": "600",
        "cargo_capacity": "3000000",
        "consumables": "1 year",
        "hyperdrive_rating": "2.0",
        "MGLT": "60",
        "starship_class": "corvette",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-10T14:20:33.369000Z",
        "edited": "2014-12-20T21:23:49.867000Z",
        "url": "https://swapi.dev/api/starships/2/"
    },
    {
        "name": "Star Destroyer",
        "model": "Imperial I-class Star Destroyer",
        "manufacturer": "Kuat Drive Yards",
        "cost_in_credits": "150000000",
        "length": "1,600",
        "max_atmosphering_speed": "975",
        "crew": "47,060",
        "passengers": "n/a",
        "cargo_capacity": "36000000",
        "consumables": "2 years",
        "hyperdrive_rating": "2.0",
        "MGLT": "60",
        "starship_class": "Star Destroyer",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/"
        ],
        "created": "2014-12-10T15:08:19.848000Z",
        "edited": "2014-12-20T21:23:49.870000Z",
        "url": "https://swapi.dev/api/starships/3/"
    },
    {
        "name": "Sentinel-class landing craft",
        "model": "Sentinel-class landing craft",
        "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
        "cost_in_credits": "240000",
        "length": "38",
        "max_atmosphering_speed": "1000",
        "crew": "5",
        "passengers": "75",
        "cargo_capacity": "180000",
        "consumables": "1 month",
        "hyperdrive_rating": "1.0",
        "MGLT": "70",
        "starship_class": "landing craft",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/1/"
        ],
        "created": "2014-12-10T15:48:00.586000Z",
        "edited": "2014-12-20T21:23:49.873000Z",
        "url": "https://swapi.dev/api/starships/5/"
    },
    {
        "name": "Death Star",
        "model": "DS-1 Orbital Battle Station",
        "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
        "cost_in_credits": "1000000000000",
        "length": "120000",
        "max_atmosphering_speed": "n/a",
        "crew": "342,953",
        "passengers": "843,342",
        "cargo_capacity": "1000000000000",
        "consumables": "3 years",
        "hyperdrive_rating": "4.0",
        "MGLT": "10",
        "starship_class": "Deep Space Mobile Battlestation",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/1/"
        ],
        "created": "2014-12-10T16:36:50.509000Z",
        "edited": "2014-12-20T21:26:24.783000Z",
        "url": "https://swapi.dev/api/starships/9/"
    },
    {
        "name": "Millennium Falcon",
        "model": "YT-1300 light freighter",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": "100000",
        "length": "34.37",
        "max_atmosphering_speed": "1050",
        "crew": "4",
        "passengers": "6",
        "cargo_capacity": "100000",
        "consumables": "2 months",
        "hyperdrive_rating": "0.5",
        "MGLT": "75",
        "starship_class": "Light freighter",
        "pilots": [
            "https://swapi.dev/api/people/13/",
            "https://swapi.dev/api/people/14/",
            "https://swapi.dev/api/people/25/",
            "https://swapi.dev/api/people/31/"
        ],
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/"
        ],
        "created": "2014-12-10T16:59:45.094000Z",
        "edited": "2014-12-20T21:23:49.880000Z",
        "url": "https://swapi.dev/api/starships/10/"
    },
    {
        "name": "Y-wing",
        "model": "BTL Y-wing",
        "manufacturer": "Koensayr Manufacturing",
        "cost_in_credits": "134999",
        "length": "14",
        "max_atmosphering_speed": "1000km",
        "crew": "2",
        "passengers": "0",
        "cargo_capacity": "110",
        "consumables": "1 week",
        "hyperdrive_rating": "1.0",
        "MGLT": "80",
        "starship_class": "assault starfighter",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/"
        ],
        "created": "2014-12-12T11:00:39.817000Z",
        "edited": "2014-12-20T21:23:49.883000Z",
        "url": "https://swapi.dev/api/starships/11/"
    },
    {
        "name": "X-wing",
        "model": "T-65 X-wing",
        "manufacturer": "Incom Corporation",
        "cost_in_credits": "149999",
        "length": "12.5",
        "max_atmosphering_speed": "1050",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "110",
        "consumables": "1 week",
        "hyperdrive_rating": "1.0",
        "MGLT": "100",
        "starship_class": "Starfighter",
        "pilots": [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/9/",
            "https://swapi.dev/api/people/18/",
            "https://swapi.dev/api/people/19/"
        ],
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/"
        ],
        "created": "2014-12-12T11:19:05.340000Z",
        "edited": "2014-12-20T21:23:49.886000Z",
        "url": "https://swapi.dev/api/starships/12/"
    },
    {
        "name": "TIE Advanced x1",
        "model": "Twin Ion Engine Advanced x1",
        "manufacturer": "Sienar Fleet Systems",
        "cost_in_credits": "unknown",
        "length": "9.2",
        "max_atmosphering_speed": "1200",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "150",
        "consumables": "5 days",
        "hyperdrive_rating": "1.0",
        "MGLT": "105",
        "starship_class": "Starfighter",
        "pilots": [
            "https://swapi.dev/api/people/4/"
        ],
        "films": [
            "https://swapi.dev/api/films/1/"
        ],
        "created": "2014-12-12T11:21:32.991000Z",
        "edited": "2014-12-20T21:23:49.889000Z",
        "url": "https://swapi.dev/api/starships/13/"
    },
    {
        "name": "Executor",
        "model": "Executor-class star dreadnought",
        "manufacturer": "Kuat Drive Yards, Fondor Shipyards",
        "cost_in_credits": "1143350000",
        "length": "19000",
        "max_atmosphering_speed": "n/a",
        "crew": "279,144",
        "passengers": "38000",
        "cargo_capacity": "250000000",
        "consumables": "6 years",
        "hyperdrive_rating": "2.0",
        "MGLT": "40",
        "starship_class": "Star dreadnought",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/"
        ],
        "created": "2014-12-15T12:31:42.547000Z",
        "edited": "2014-12-20T21:23:49.893000Z",
        "url": "https://swapi.dev/api/starships/15/"
    },
    {
        "name": "Rebel transport",
        "model": "GR-75 medium transport",
        "manufacturer": "Gallofree Yards, Inc.",
        "cost_in_credits": "unknown",
        "length": "90",
        "max_atmosphering_speed": "650",
        "crew": "6",
        "passengers": "90",
        "cargo_capacity": "19000000",
        "consumables": "6 months",
        "hyperdrive_rating": "4.0",
        "MGLT": "20",
        "starship_class": "Medium transport",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/"
        ],
        "created": "2014-12-15T12:34:52.264000Z",
        "edited": "2014-12-20T21:23:49.895000Z",
        "url": "https://swapi.dev/api/starships/17/"
    }
]

const testData2 = [
    {
        "name": "Sand Crawler",
        "model": "Digger Crawler",
        "manufacturer": "Corellia Mining Corporation",
        "cost_in_credits": "150000",
        "length": "36.8 ",
        "max_atmosphering_speed": "30",
        "crew": "46",
        "passengers": "30",
        "cargo_capacity": "50000",
        "consumables": "2 months",
        "vehicle_class": "wheeled",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/5/"
        ],
        "created": "2014-12-10T15:36:25.724000Z",
        "edited": "2014-12-20T21:30:21.661000Z",
        "url": "https://swapi.dev/api/vehicles/4/"
    },
    {
        "name": "T-16 skyhopper",
        "model": "T-16 skyhopper",
        "manufacturer": "Incom Corporation",
        "cost_in_credits": "14500",
        "length": "10.4 ",
        "max_atmosphering_speed": "1200",
        "crew": "1",
        "passengers": "1",
        "cargo_capacity": "50",
        "consumables": "0",
        "vehicle_class": "repulsorcraft",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/1/"
        ],
        "created": "2014-12-10T16:01:52.434000Z",
        "edited": "2014-12-20T21:30:21.665000Z",
        "url": "https://swapi.dev/api/vehicles/6/"
    },
    {
        "name": "X-34 landspeeder",
        "model": "X-34 landspeeder",
        "manufacturer": "SoroSuub Corporation",
        "cost_in_credits": "10550",
        "length": "3.4 ",
        "max_atmosphering_speed": "250",
        "crew": "1",
        "passengers": "1",
        "cargo_capacity": "5",
        "consumables": "unknown",
        "vehicle_class": "repulsorcraft",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/1/"
        ],
        "created": "2014-12-10T16:13:52.586000Z",
        "edited": "2014-12-20T21:30:21.668000Z",
        "url": "https://swapi.dev/api/vehicles/7/"
    },
    {
        "name": "TIE/LN starfighter",
        "model": "Twin Ion Engine/Ln Starfighter",
        "manufacturer": "Sienar Fleet Systems",
        "cost_in_credits": "unknown",
        "length": "6.4",
        "max_atmosphering_speed": "1200",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "65",
        "consumables": "2 days",
        "vehicle_class": "starfighter",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/"
        ],
        "created": "2014-12-10T16:33:52.860000Z",
        "edited": "2014-12-20T21:30:21.670000Z",
        "url": "https://swapi.dev/api/vehicles/8/"
    },
    {
        "name": "Snowspeeder",
        "model": "t-47 airspeeder",
        "manufacturer": "Incom corporation",
        "cost_in_credits": "unknown",
        "length": "4.5",
        "max_atmosphering_speed": "650",
        "crew": "2",
        "passengers": "0",
        "cargo_capacity": "10",
        "consumables": "none",
        "vehicle_class": "airspeeder",
        "pilots": [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/18/"
        ],
        "films": [
            "https://swapi.dev/api/films/2/"
        ],
        "created": "2014-12-15T12:22:12Z",
        "edited": "2014-12-20T21:30:21.672000Z",
        "url": "https://swapi.dev/api/vehicles/14/"
    },
    {
        "name": "TIE bomber",
        "model": "TIE/sa bomber",
        "manufacturer": "Sienar Fleet Systems",
        "cost_in_credits": "unknown",
        "length": "7.8",
        "max_atmosphering_speed": "850",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "none",
        "consumables": "2 days",
        "vehicle_class": "space/planetary bomber",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/"
        ],
        "created": "2014-12-15T12:33:15.838000Z",
        "edited": "2014-12-20T21:30:21.675000Z",
        "url": "https://swapi.dev/api/vehicles/16/"
    },
    {
        "name": "AT-AT",
        "model": "All Terrain Armored Transport",
        "manufacturer": "Kuat Drive Yards, Imperial Department of Military Research",
        "cost_in_credits": "unknown",
        "length": "20",
        "max_atmosphering_speed": "60",
        "crew": "5",
        "passengers": "40",
        "cargo_capacity": "1000",
        "consumables": "unknown",
        "vehicle_class": "assault walker",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/"
        ],
        "created": "2014-12-15T12:38:25.937000Z",
        "edited": "2014-12-20T21:30:21.677000Z",
        "url": "https://swapi.dev/api/vehicles/18/"
    },
    {
        "name": "AT-ST",
        "model": "All Terrain Scout Transport",
        "manufacturer": "Kuat Drive Yards, Imperial Department of Military Research",
        "cost_in_credits": "unknown",
        "length": "2",
        "max_atmosphering_speed": "90",
        "crew": "2",
        "passengers": "0",
        "cargo_capacity": "200",
        "consumables": "none",
        "vehicle_class": "walker",
        "pilots": [
            "https://swapi.dev/api/people/13/"
        ],
        "films": [
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/"
        ],
        "created": "2014-12-15T12:46:42.384000Z",
        "edited": "2014-12-20T21:30:21.679000Z",
        "url": "https://swapi.dev/api/vehicles/19/"
    },
    {
        "name": "Storm IV Twin-Pod cloud car",
        "model": "Storm IV Twin-Pod",
        "manufacturer": "Bespin Motors",
        "cost_in_credits": "75000",
        "length": "7",
        "max_atmosphering_speed": "1500",
        "crew": "2",
        "passengers": "0",
        "cargo_capacity": "10",
        "consumables": "1 day",
        "vehicle_class": "repulsorcraft",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/2/"
        ],
        "created": "2014-12-15T12:58:50.530000Z",
        "edited": "2014-12-20T21:30:21.681000Z",
        "url": "https://swapi.dev/api/vehicles/20/"
    },
    {
        "name": "Sail barge",
        "model": "Modified Luxury Sail Barge",
        "manufacturer": "Ubrikkian Industries Custom Vehicle Division",
        "cost_in_credits": "285000",
        "length": "30",
        "max_atmosphering_speed": "100",
        "crew": "26",
        "passengers": "500",
        "cargo_capacity": "2000000",
        "consumables": "Live food tanks",
        "vehicle_class": "sail barge",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/3/"
        ],
        "created": "2014-12-18T10:44:14.217000Z",
        "edited": "2014-12-20T21:30:21.684000Z",
        "url": "https://swapi.dev/api/vehicles/24/"
    }
]

const HomePage = () => {
    const [data, setData] = React.useState(testData1);
    const [selectedEntity, setSelectedEntity] = React.useState("");
    const [nextAPICall, setNextAPICall] = React.useState("");
    const [isCurrentlyFetching, setIsCurrentlyFetching] = React.useState(false);

    const getData = async (endpoint) => {
        setIsCurrentlyFetching(true);
        const response = await (fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }));
        const responseData = await response.json();
        setData([...data, ...responseData.results]);
        setIsCurrentlyFetching(false);
        if (responseData.next) {
            setNextAPICall = responseData.next;
        }
    }


    const handleSelectedEntityChange = (e, entity) => {
        setSelectedEntity(entity);
        setNextAPICall("");
        setData([], getData("https://swapi.dev/api/" + entity));
    }

    const handleScroll = (e) => {
        const isAtBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (isAtBottom && !isCurrentlyFetching) { console.log("Reached Bottom")}
    }


    return (
        <div className="page-container" onScroll={handleScroll}> 
            <header>
                <h1>SWAPI Dashboard</h1>
                <div className="input-container">
                    <EntitySelectionInput options={["starships", "vehicles", "films"]} selectedOption={selectedEntity} onChangeFunction={handleSelectedEntityChange} />
                </div>
            </header>
            <div >
                <VehicleList vehicles={data} />
            </div>
        </div>
    );
};

export default HomePage;