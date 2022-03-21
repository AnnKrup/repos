import React from 'react';
import Repo from "../../repo/Repo";
import {useSelector} from "react-redux";
import "../main.less";

const RepoList = () => {
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);

    return (
        <div>
            {isFetching === false ?
                <div>  {repos.map(repo => <Repo key={repo.id} repo={repo}/>)} </div>
                :
                <div className="loader"></div>
            }
        </div>
    );
};

export default RepoList;