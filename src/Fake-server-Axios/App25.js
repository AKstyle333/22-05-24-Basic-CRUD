import React, { useEffect, useState } from "react";
import axios from "axios";

const App25 = () => {
    const [data, setData] = useState([]);
    const [view, setView] = useState({});

    // GET DATA API
    const getApi = () => {
        axios
            .get("http://localhost:3001/posts")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // POST DATA API
    const submit_handler = async () => {
        await axios.post("http://localhost:3001/posts", view);
    };

    // DELETE DATA API
    const delete_handler = async (id) => {
        await axios.delete(`http://localhost:3001/posts/${id}`);
    };

    // PUT DATA API
    const view_handler = (val, index) => {
        setView(val);
    };
    const update_handler = () => {
        axios
            .put(`http://localhost:3001/posts/${view.id}`, view)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getApi();
    }, [data]);

    const input_handler = (e) => {
        setView({ ...view, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="container">
                <h1 className="text-center m-5">FAKE SERVER AXIOS POST API</h1>
                <div>
                    <input name="title" value={view.title} className="w-25 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="TITLE" />
                </div>
                <div>
                    <input name="author" value={view.author} className="w-25 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="AUTHOR" />
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-dark me-2"
                        onClick={() => {
                            update_handler(view.id);
                        }}
                    >
                        UPDATE DATA
                    </button>
                    <button onClick={submit_handler} className="btn btn-success">
                        ADD NEW DATA
                    </button>
                </div>
            </div>
            <div className="container">
                <h1 className="text-center m-5">FAKE SERVER AXIOS GET API</h1>
                <div className="row">
                    {data?.map((val, index) => {
                        return (
                            <>
                                <div className="col-4 mb-4" key="index">
                                    <div className="p-3 border border-3">
                                        <h4>Title : {val.title}</h4>
                                        <h4>Author : {val.author}</h4>
                                        <button
                                            className="btn btn-warning me-2"
                                            onClick={() => {
                                                view_handler(val, index);
                                            }}
                                        >
                                            EDIT
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => {
                                                delete_handler(val.id);
                                            }}
                                        >
                                            DELETE
                                        </button>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default App25;
