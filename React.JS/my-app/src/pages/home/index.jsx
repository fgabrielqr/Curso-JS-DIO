import { Link } from "react-router-dom"
import { Button } from '../../components/Button';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Button title="Teste 01" />
            <Button variant="secondary" title="Teste 02" />
            <Link to="/login">Fazer Login</Link>
        </>
    )
}
export { Home }