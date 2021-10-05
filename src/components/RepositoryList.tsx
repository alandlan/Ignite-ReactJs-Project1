import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useEffect, useState } from "react";

const url = 'https://api.github.com/users/alandlan/repos';

interface IRepository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){

    const [repositories, setRepositories] = useState<IRepository[]>([]);

    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(data => setRepositories(data))
    },[])

    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
                
            </ul>
        </section>
    )
}