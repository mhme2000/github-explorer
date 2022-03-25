import '../style/repositories.scss';
import IRepository from '../types/IRepository';

interface RepositoryItemProps {
    repository : IRepository;
}

export default function RepositoryItem(props : RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Click here!</a>
        </li>
    );
}