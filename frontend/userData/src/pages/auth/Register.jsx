import { useState } from "react";

const  Register=()=>{

const[formData, setformData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    passwordConfirm:""
})

const handleChange=(e)=>{
    setformData({...formData, [e.target.name]: [e.target.value]});
}

const handleSubmit=(e)=>{
    e.preventDefault();

    if (formData.password != formData.passwordConfirm){
    alert("Password do not match")
}
}
    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName" className="focus blue/60" >First Name</label>
                        <input type="text" 
                        name="firstName" 
                        id="firstName" 
                        placeholder="first name"
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="laststName">Last Name</label>
                        <input type="text" 
                        name="lastName" 
                        id="lastName" 
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        name="email" 
                        id="email" 
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        name="password" 
                        id="password" 
                        onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <input type="passwordConfirm" 
                        name="passwordConfirm" 
                        id="passwordConfirm" 
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
} 
export default Register;