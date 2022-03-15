import React, {useEffect, useState} from "react";
import "./card.less";
import {useNavigate, useParams} from "react-router-dom";
import {getCurrentRepo} from "../../actions/repos";

const Card = () => {
    const {username, reponame} = useParams();
    const navigate = useNavigate();
    const [repo, setRepo] = useState({});
    const [loader, setLoader] = useState(true);

    useEffect( () => {
        getCurrentRepo(username, reponame, setRepo);
        setLoader(false);
    }, []);

    return (
        <div>
            { loader ?
                <div className="loader"></div>
                :
                <div>
                    <div className="card">
                        <div className="card__title">Название репозитория: {repo.name}</div>
                        <div>Количество звезд: {repo.stargazers_count}</div>
                        <div>Последний commit: {repo.updated_at}</div>
                        <div>
                            Ссылка на репозиторий:
                            <a href={repo.html_url}>{repo.html_url}</a>
                        </div>
                    </div>
                    <div className="card__btn">
                        <button onClick={() => navigate(-1)}>НАЗАД</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Card;