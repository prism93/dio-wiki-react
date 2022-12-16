import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({ repo, removeRepo }) {
    const remover = () => {
        removeRepo(repo.id);
    }

    return (
        <ItemContainer>
            <div className='picNName'>
                <h3>{repo.name}</h3>
                <p>{repo.full_name}</p>
            </div>
            <a href={repo.html_url} rel="noreferrer" target="_blank"><button className="verRepo" >Ver repositório</button></a><br />
            <button href="#" className="remover" rel="noreferrer" onClick={remover}>Remover</button>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo;