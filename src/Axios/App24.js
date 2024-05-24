import axios from "axios";
import React, { useEffect, useState } from "react";

const App24 = () => {
    const [apiRes, setApiRes] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                console.log(res.data);
                setApiRes(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <h1 className="text-center m-5">CRUD with Axios API <sub className="fs-6">Code By AK</sub></h1>
            <div className="container row mx-auto">
                {apiRes.map((val_, ind_) => {
                    return (
                        <div key={ind_} className="col-3 mb-3 text-center">
                            {/* <img src={val_.url} alt="img"></img> */}
                            <img src={val_.thumbnailUrl} alt="imgThumb"></img>
                            <h3>{val_.id}</h3>
                            <h5>{val_.title}</h5>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default App24;
