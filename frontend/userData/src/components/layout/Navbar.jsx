import { useState, useEffect } from "react";
import Register from "../../pages/auth/Register";
import { Link } from "react-router-dom";
// const [data, setData] = useState({

// })

const Navbar =() =>{
    return(
       <section className ="">
        <div>
                <Link
                to="/register"
                >
                Sign up
                </Link>
        </div>
       </section>
    );
}

export default Navbar;
