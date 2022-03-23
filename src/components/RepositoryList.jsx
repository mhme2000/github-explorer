import RepositoryItem from "./RepositoryItem";

const repository = {
    name: 'Unform',
    description: 'Forms in React',
    link: 'https://google.com'
};

export default function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>List of repositories</h1>
            <ul>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}