import { useParams, useNavigate } from 'react-router-dom'

export const AboutItem = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButton = () => {
        //Volta uma pagina por conta do -1, podendo voltar o tanto de pagina necessária dependendo do numero mas faz o carregamento todo da pagina
        navigate(-1);
    }

    const handleHomeButton = () => {
        //Navega entre paginas utilizando a URL, sem fazer o carregamento da pagina toda novamente
        navigate('/');
    }

    return(
        <div>
            Página Sobre {params.slug?.toUpperCase()}
            <hr />
            <button onClick={handleBackButton}>Voltar</button>
            <br />
            <button onClick={handleHomeButton}>Home</button>
        </div>
    );
}