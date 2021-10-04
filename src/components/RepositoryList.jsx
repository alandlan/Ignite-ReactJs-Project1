import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'http://google.com.br'
}

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>

            <ul>
                <RepositoryItem 
                    repository={repository} />
            </ul>
        </section>
    )
}