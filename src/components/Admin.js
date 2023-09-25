import { Link } from "react-router-dom";

const HOST_URL = 'https://team1-backend-jpdqtnohpq-uc.a.run.app/';
//const HOST_URL = 'http://localhost:8080/';

const Admin = () => {
    return (
        <section>
            <h1>Admins Page</h1>
            <br />
            <br />
            <div className="flexGrow">
                <Link to = " " >Admin</Link>
            </div>
        </section>
    )
}

export default Admin