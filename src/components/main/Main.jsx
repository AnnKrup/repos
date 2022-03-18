import React, {useEffect, useState} from "react";
import "./main.less";
import {getRepos} from "../actions/repos";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Repo from "../repo/Repo";
import {setCurrentPage, setFetchingError} from "../../reducers/reposReducer";
import {createPages} from "../../utils/pagesCreator";

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const isFetchingError = useSelector(state => state.repos.isFetchingError);
    const currentPage = useSelector(state => state.repos.currentPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const perPage = useSelector(state => state.repos.perPage);
    const [searchValue, setSearchValue] = useState();
    const pagesCount = Math.ceil(totalCount/perPage);
    const pages = [];
    const navigate = useNavigate();

    createPages(pages, pagesCount, currentPage);


    useEffect( () => {
        dispatch(getRepos(searchValue, currentPage, perPage));
    }, [currentPage])

    function searchHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue));
    }

    if (isFetchingError) {
        navigate("/error");
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
            {isFetching === false ?
                <div>  {repos.map(repo => <Repo key={repo.id} repo={repo}/>)} </div>
                :
                <div className="loader"></div>
            }
            <div className="pagination">
                {pages.map((page, index) =>
                    <button key={index}
                            className={currentPage == page ? "pagination__current-page" : "pagination__page" }
                            onClick={() => dispatch(setCurrentPage(page))}>{page}</button>
                )}
            </div>
        </div>
    );
};

export default Main;