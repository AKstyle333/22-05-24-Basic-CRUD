import React, { useState } from "react";
import fake_data from "./Components/fakeData";

const App = () => {
    const [inputData, setInputData] = useState({});
    const [inputFakeData, setFakeInputData] = useState(fake_data);
    const [tempIndex, setTempIndex] = useState(0);

    //For Get Data From Input Field
    const inputHandler = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    //For Add New Data (===CREATE===)
    const addDataHandler = () => {
        setFakeInputData([...inputFakeData, inputData]);
    };

    //For Edit(View) Data (===READ===)
    const readDataHandler = (data, index) => {
        setInputData(data);
        setTempIndex(index);
    };

    //For Update(Change) Old Data (===UPDATE===)
    const updateDataHandler = (tempIndex) => {
        inputFakeData.splice(tempIndex, 1, inputData);
        setFakeInputData([...inputFakeData]);
    };

    //For Delete Data (===DELETE===)
    const deleteDataHandler = (index) => {
        inputFakeData.splice(index, 1);
        setFakeInputData([...inputFakeData]);
    };
    console.log(inputData);
    return (
        <>
            <div className="container m-3 d-flex justify-content-center ">
                <input value={inputData.name} name="name" type="text" onChange={inputHandler} />
                <input value={inputData.age} name="age" type="text" onChange={inputHandler} />
                <button className="btn btn-primary mx-3" onClick={() => updateDataHandler(tempIndex)}>
                    Update Data
                </button>
                <button className="btn btn-dark " onClick={addDataHandler}>
                    Add New Data
                </button>
            </div>
            <div className="container">
                <div className="row">
                    {inputFakeData?.map((data, index) => {
                        return (
                            <div className="col-3">
                                <div className="border rounded rounded-3 p-3 my-3 border-3 ">
                                    <h3>Name : {data.name}</h3>
                                    <h3>Age : {data.age}</h3>
                                    <div className="my-3">
                                        <button className="btn btn-success me-2" onClick={() => readDataHandler(data, index)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger" onClick={() => deleteDataHandler(index)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default App;
