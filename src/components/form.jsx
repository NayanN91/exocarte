import { useState } from "react";
import "./form.css";


const Form = () => {
    const [firstname, setFirstname] = useState("");

return(
    <div className="form">
        <p>
Let's Smash, {firstname}</p>
<input type="text" 
name= "firstname"
placeholder="Smasher"
onChange={(e)=> setFirstname(e.target.value)}
/>

    </div>
);

};

export default Form;