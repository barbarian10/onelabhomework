import React from "react";
import "./modal.css"
import { useState } from "react";
import { add } from "../../features/users/actions";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import toast from 'react-hot-toast';

export const Modal = ({ active, setActive, }) => {

    const [name, setName] = useState("")
    const [calories, setCalories] = useState("")
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(name, 'name is set')
    }

    const handleCaloriesChange = (event) => {
        setCalories(event.target.value);
        console.log(calories, 'calories set')
    }

    const handleSaveClick = (event) => {
        event.preventDefault();
        if (!name || !calories) {
            toast.error('fill all inputs')
            return
        };
        dispatch(add({ name, calories }));
        console.log('New item added:', { name, calories });
        setName("");
        setCalories("");
        setActive(false);
        toast.success('saved')
    }
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="form">
                    <div className="form-content">
                    <TextField value={name} onChange={handleNameChange} type="text" name="name" id="outlined-basic" label="Food" variant="outlined" />
                    <TextField value={calories} onChange={handleCaloriesChange} type="number" id="outlined-basic" label="Calories" variant="outlined" />
                        <Button variant='outlined' onClick={handleSaveClick}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}