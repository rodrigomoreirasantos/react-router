import { Link, useSearchParams } from 'react-router-dom';

export const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setOrder = (order: 'asc' | 'desc') => {
        searchParams.set('order', order);

        setSearchParams(searchParams);
    }

    return(
        <div>
            Filtro: {searchParams.get('filter')}
            <br />
            Ordem: {searchParams.get('order')}
            
            <hr />
            <button onClick={() => setOrder('asc')}>Asc</button>
            <br />
            <button onClick={() => setOrder('desc')}>Desc</button>
            <hr />

            Página Sobre
            <ul>
                <li><Link to='/sobre/rodrigo'>Rodrigo</Link></li>
                <li><Link to='/sobre/amanda'>Amanda</Link></li>
            </ul>
        </div>
    );
}