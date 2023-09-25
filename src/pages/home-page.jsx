import React, { useEffect } from "react";
import { VehicleList, EntitySelectionInput, SortInput, FilmList } from "../components";
import "./home-page.css";
import { toast } from 'react-toastify';

const dataReducer = (state, action) => {
    switch(action.type) {
        case "CLEAR":
            return [];
        case "APPEND":
            return [...state, ...action.data];
        case "SET":
            return [...action.data];
        case "SORT":
            switch (action.methodToSortBy) {
                case "None":
                    return state.sort((a, b) => a.originalIndex - b.originalIndex)
                case "Name ▲":
                    return state.sort((a, b) => {
                        const nameA = a[action.nameAttribute].toLowerCase(), nameB = b[action.nameAttribute].toLowerCase();
                        if (nameA < nameB)
                            return -1;
                        if (nameA > nameB)
                            return 1;
                        return 0;
                    })
                case "Name ▼":
                    return state.sort((a, b) => {
                        const nameA = a[action.nameAttribute].toLowerCase(), nameB = b[action.nameAttribute].toLowerCase();
                        if (nameA > nameB)
                            return -1;
                        if (nameA < nameB)
                            return 1;
                        return 0;
                    })
                default:
                    return state;
            }
        default:
        return state;
    }
};

const HomePage = () => {
    const [data, dispatchData] = React.useReducer(dataReducer, []);
    const [selectedEntity, setSelectedEntity] = React.useState("");
    const [selectedSort, setSelectedSort] = React.useState("None");
    const [nextAPICall, setNextAPICall] = React.useState("");
    const [isCurrentlyFetching, setIsCurrentlyFetching] = React.useState(false);

    useEffect(()=>{
        if(data.length > 1){
            runSort(selectedSort);
        }
    }, [data.length]);

    const webRequest = async (endpoint) => {
        return new Promise(async (resolve, reject) => {
            setNextAPICall("");
            setIsCurrentlyFetching(true);
            const response = await (fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })).catch((e)=>{reject(); return});
            if(!response.ok){
                toast.error("Web Error " + response.status + ":" + response.statusText);
                reject();
                return;
            }
            const responseData = await response.json();
            const lastOriginalIndex = data.length > 0 ? data[data.length - 1].originalIndex + 1 : 0; //Storing an index allows any sorts to be undone
            const results = responseData.results.map((result, i) => ({ ...result, originalIndex: lastOriginalIndex + i }));
            dispatchData({type:"APPEND", data: results});
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
        });
    }

    const runSort = (methodToSortBy) => {
        const nameAttribute = (selectedEntity === "starships" || selectedEntity === "vehicles") ? "name" : "title";
        dispatchData({type: "SORT", methodToSortBy, nameAttribute});
    }

    /* START - User Input Events */
    const handleSelectedEntityChange = (e, entity) => {
        if(isCurrentlyFetching) return false; //Fetching data for new entity before previous one completes would jumble the data together.
        setSelectedEntity(entity);
        dispatchData({type: "CLEAR"});
        getData("https://swapi.dev/api/" + entity);
    }

    const handleSelectedSortChange = (e, sort) => {
        if(isCurrentlyFetching) return false; //Shouldn't attempt to sort data until new data is present.
        setSelectedSort(sort);
        runSort(sort);
    }

    //Lazy loads extra data as user gets to the end of current data (if there is extra data to get).
    const handleScroll = (e) => {
        const isAtBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (isAtBottom && !isCurrentlyFetching && nextAPICall) {
            getData(nextAPICall);
        }
    }
    /* END - User Input Events */
    
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