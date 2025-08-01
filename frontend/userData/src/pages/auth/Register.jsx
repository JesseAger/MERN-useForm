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
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" 
                        name="firstName" 
                        id="firstName" 
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
                </form>
            </div>
        </div>
    )
} 
export default Register;