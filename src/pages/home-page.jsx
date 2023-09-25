import React, { useEffect } from "react";
import { VehicleList, EntitySelectionInput, SortInput, FilmList } from "../components";
import "./home-page.css";
import { toast } from 'react-toastify';

const HomePage = () => {
    const [data, setData] = React.useState([]);
    const [selectedEntity, setSelectedEntity] = React.useState("");
    const [selectedSort, setSelectedSort] = React.useState("None");
    const [nextAPICall, setNextAPICall] = React.useState("");
    const [isCurrentlyFetching, setIsCurrentlyFetching] = React.useState(false);

    useEffect(()=>{
        if(data.length > 1){
            runSort(selectedSort);
        }
    }, [data.length])

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
            const lastOriginalIndex = data.length > 0 ? data[data.length - 1].originalIndex + 1 : 0;
            const results = responseData.results.map((result, i) => ({ ...result, originalIndex: lastOriginalIndex + i }))
            setData([...data, ...results]);
            setNextAPICall(responseData.next);
            resolve();
        }).finally(() => {
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

    const handleSelectedEntityChange = (e, entity) => {
        if(isCurrentlyFetching) return false;

        setSelectedEntity(entity);
        setNextAPICall("");
        setData([]);
        getData("https://swapi.dev/api/" + entity)
    }

    const runSort = (methodToSortBy) => {
        const tempData = data;
        const nameAttribute = (selectedEntity === "starships" || selectedEntity === "vehicles") ? "name" : "title";
        switch (methodToSortBy) {
            case "None":
                tempData.sort((a, b) => a.originalIndex - b.originalIndex)
                break;
            case "Name ▲":
                tempData.sort((a, b) => {
                    const nameA = a[nameAttribute].toLowerCase(), nameB = b[nameAttribute].toLowerCase();
                    if (nameA < nameB)
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0;
                })
                break;
            case "Name ▼":
                tempData.sort((a, b) => {
                    const nameA = a[nameAttribute].toLowerCase(), nameB = b[nameAttribute].toLowerCase();
                    if (nameA > nameB)
                        return -1;
                    if (nameA < nameB)
                        return 1;
                    return 0;
                })
                break;
            default:
                break;
        }
        setData([...tempData]);
    }

    const handleSelectedSortChange = (e, sort) => {
        if(isCurrentlyFetching) return false;

        setSelectedSort(sort);
        runSort(sort);
    }

    const handleScroll = (e) => {
        const isAtBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (isAtBottom && !isCurrentlyFetching && nextAPICall) {
            getData(nextAPICall);
        }
    }

    return (
        <div className="page-container" onScroll={handleScroll}>
            <header>
                <h1>SWAPI DASHBOARD</h1>
                <div className="user-controls">
                    <div className="input-container">
                        <EntitySelectionInput options={[{value:"starships", label:"StarShips"}, {value:"vehicles", label:"Vehicles"}, {value:"films", label:"Films"}]} selectedOption={selectedEntity} onChangeFunction={handleSelectedEntityChange} />
                    </div>
                    <div className="input-container">
                        <SortInput options={["None", "Name ▲", "Name ▼"]} selectedOption={selectedSort} onChangeFunction={handleSelectedSortChange} />
                    </div>
                </div>
            </header>
            <div>
                {(selectedEntity === "starships" || selectedEntity === "vehicles") && <VehicleList vehicles={data} />}
                {(selectedEntity === "films") && <FilmList films={data} />}
            </div>
        </div>
    );
};

export default HomePage;