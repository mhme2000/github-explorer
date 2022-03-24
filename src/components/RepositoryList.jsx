import RepositoryItem from "./RepositoryItem";
import '../style/repositories.scss';
import { useEffect, useState } from "react";

export default function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>List of repositories</h1>

            <ul>
                {repositories.map((repository) => {
                   return <RepositoryItem key={repository.id} repository={repository} />
                })}
            </ul>
        </section>
    );
}