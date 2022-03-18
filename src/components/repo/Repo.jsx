import "./repo.less";
import React from "react";
import {NavLink} from "react-router-dom";

const Repo = ({repo}) => {

    return (
        <div className="repo">
            <NavLink to={`/card/${repo.owner.login}/${repo.name}`}>
                <div className="repo__wrapper">
                    <div className="repo__title">Название репозитория: {repo.name}</div>
                    <div className="repo__stars">Коллчество звезд: {repo.stargazers_count}</div>
                </div>
                <br/>
                <div className="repo__last-commit">Последний commit: {repo.updated_at}</div>
                <div>Ссылка на репозиторий: {repo.html_url}</div>
            </NavLink>
        </div>
    );
};

export default Repo;