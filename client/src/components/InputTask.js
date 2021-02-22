import React, {Fragment, useState } from 'react';
import { MdLibraryAdd } from "react-icons/md";

const InputTask = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch(err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
     <h2 class="header">Today's Tasks</h2>
     <form class="" onSubmit={onSubmitForm}>
         <input type="text" class="input" 
         value={description} 
         onChange={e=> setDescription(e.target.value)}
         />
         <button class="button"><MdLibraryAdd/></button>
     </form>
     </Fragment>
    );
};

export default InputTask;
