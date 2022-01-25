import { Navigate } from 'react-router-dom';

type Props = {
    children: JSX.Element;
}

export const RequireAuth = ({ children }:Props) => {
    //Verificação de autenticação true ou false
    const isAuth = true;

    if (isAuth){
        return children;
    } else {
        return <Navigate to='/login' />
    }
}