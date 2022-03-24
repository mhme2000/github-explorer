import '../style/repositories.scss';

export default function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Click here!</a>
        </li>
    );
}