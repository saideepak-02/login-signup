import { Link, useNavigate } from "react-router-dom";
import './style.css'
import { useState } from "react";

function Signup(){

    const navigate = useNavigate();
    const [data, setData] = useState({ email:"", password: "" });
    const handleSignup = (e) => {
        e.preventDefault();
       
            const user=JSON.parse(localStorage.getItem(data.email));
            console.log(user)
            if(user){
                alert("user already exist");
                return 0;
            }
            localStorage.setItem(data.email, JSON.stringify(data))
            navigate('/');
    }

    const handleChange = (e) => {
        setData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
       
    }

    return(
        <>
        <h1 className="mb-2">Signup</h1>
         <div className="container login">
                <form onSubmit={(e)=>handleSignup(e)}>
                <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" onChange={(e) => handleChange(e)} value={data.email} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" onChange={(e) => handleChange(e)} value={data.password} />
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Signup</button>
                    <div>
                        <p>have an accoun please login <Link to="/" style={{color:"darkred"}}>here</Link></p>
                    </div>
                    {/* <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Signup</button>
                    <div>
                        <p>have an accoun please login <Link to="/" style={{color:"darkred"}}>here</Link></p>
                    </div> */}
                </form>
            </div>
        </>
    )
}

export default Signup;