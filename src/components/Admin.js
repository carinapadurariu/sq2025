import { Link } from "react-router-dom";
import Users from './Users';

const Admin = () => {
    return (
        <section>
            <h1>Admins Page</h1>
            <br />
            <Users />
            <br />
            <div className="flexGrow">
                <Link to="https://team1-backend-jpdqtnohpq-uc.a.run.app/swagger-ui/index.html#/">Home</Link>
            </div>
        </section>
    )
}

export default Admin