import React, {useEffect, useState} from "react";
import "../main.less";
import {getRepos} from "../../../actions/repos";
import {useDispatch} from "react-redux";
import {setCurrentPage} from "../../../../reducers/reposReducer";


const Input = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState();

    function searchHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue));
    }

    return (
        <div>
            <div className="search-form">
                <input type="text"
                       value={searchValue}
                       onChange={(event) => setSearchValue(event.target.value)}
                       placeholder="Найти..."
                       className="search-form__input"/>
                <button onClick={() => searchHandler()} className="search-form__btn">ПОИСК</button>
            </div>
        </div>
    );
};

export default Input;