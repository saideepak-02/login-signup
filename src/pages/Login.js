import { Link, useNavigate } from "react-router-dom";
import './style.css'
import { useState } from "react";

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });
    const handleLogin = (e) => {
        e.preventDefault();

            localStorage.setItem(data.email, JSON.stringify(data))
            navigate('/Dashboard');
    }

    const handleChange = (e) => {
        setData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <>
            <h1 className="mb-2">Login page</h1>
            <div className="container login">
                <form onSubmit={(e) => handleLogin(e)}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" onChange={(e) => handleChange(e)} value={data.email} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" onChange={(e) => handleChange(e)} value={data.password} />
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Login</button>
                    <div>
                        <p>Dont have an accoun please signup <Link to="/signup" style={{ color: "darkred" }}>here</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;