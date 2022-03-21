import React, {useEffect, useState} from "react";
import "./main.less";
import {getRepos} from "../../actions/repos";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Repo from "../repo/Repo";
import {setCurrentPage, setFetchingError} from "../../../reducers/reposReducer";
import {createPages} from "../../../utils/pagesCreator";
import Input from "./mainComponents/Input";
import Pagination from "./mainComponents/Pagination";
import RepoList from "./mainComponents/RepoList";

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
           <Input/>
            <RepoList/>
            <Pagination/>
        </div>
    );
};

export default Main;