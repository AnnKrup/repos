import React, {useEffect, useState} from "react";
import "../main.less";
import {getRepos} from "../../../actions/repos";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../../../reducers/reposReducer";
import {createPages} from "../../../../utils/pagesCreator";


const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.repos.currentPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const perPage = useSelector(state => state.repos.perPage);
    const [searchValue, setSearchValue] = useState();
    const pagesCount = Math.ceil(totalCount/perPage);
    const pages = [];

    createPages(pages, pagesCount, currentPage);


    useEffect( () => {
        dispatch(getRepos(searchValue, currentPage, perPage));
    }, [currentPage])


    return (
            <div className="pagination">
                {pages.map((page, index) =>
                    <button key={index}
                            className={currentPage == page ? "pagination__current-page" : "pagination__page" }
                            onClick={() => dispatch(setCurrentPage(page))}>{page}</button>
                )}
            </div>
    );
};

export default Pagination;