import React from "react";
import { VehicleList, EntitySelectionInput } from "../components";
import "./home-page.css";
import { toast } from 'react-toastify';

const HomePage = () => {
    const [data, setData] = React.useState([]);
    const [selectedEntity, setSelectedEntity] = React.useState("");
    const [nextAPICall, setNextAPICall] = React.useState("");
    const [isCurrentlyFetching, setIsCurrentlyFetching] = React.useState(false);


    const webRequest = async (endpoint) => {
        return new Promise(async (resolve, reject) => {
            setIsCurrentlyFetching(true);
            const response = await (fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }));
            const responseData = await response.json();
            setData([...data, ...responseData.results]);
            setNextAPICall(responseData.next);
            resolve();
        }).finally(()=>{
            setIsCurrentlyFetching(false);
        })
    }

    const getData = async (endpoint) => {
        toast.promise(webRequest(endpoint), {
            pending: "Getting Data...",
            success: "Got Data!",
            error: "Couldn't get data"
        })
    }

    // const getData = async (endpoint) => {
    //     setIsCurrentlyFetching(true);
    //     const response = await (fetch(endpoint, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }));
    //     const responseData = await response.json();
    //     setData([...data, ...responseData.results]);
    //     setIsCurrentlyFetching(false);
    //     setNextAPICall(responseData.next);
    // }


    const handleSelectedEntityChange = (e, entity) => {
        setSelectedEntity(entity);
        setNextAPICall("");
        setData([], getData("https://swapi.dev/api/" + entity));
    }

    const handleScroll = (e) => {
        const isAtBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (isAtBottom && !isCurrentlyFetching && nextAPICall) {
            console.log("Reached Bottom")
            getData(nextAPICall);
        }
    }


    return (
        <div className="page-container" onScroll={handleScroll}>
            <header>
                <h1>SWAPI Dashboard</h1>
                <div className="user=controls">
                    <div className="input-container">
                        <EntitySelectionInput options={["starships", "vehicles", "films"]} selectedOption={selectedEntity} onChangeFunction={handleSelectedEntityChange} />
                    </div>
                </div>
            </header>
            <div >
                <VehicleList vehicles={data} />
            </div>
        </div>
    );
};

export default HomePage;