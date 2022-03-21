import React from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Error = () => {
    const navigate = useNavigate();
    const isFetchingError = useSelector(state => state.repos.isFetchingError);

    return (
        <div>
            <div>Упс.. Что-то пошло не так.</div>
            <br/>
            {isFetchingError === false ?
                <button onClick={() => navigate("/")}>Перейти на главую</button>
                : <div>Попробуйте зайти чуть позже.</div>
            }
        </div>

    )
};
export default Error;