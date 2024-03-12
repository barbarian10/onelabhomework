import React from "react";
import "./modal.css"
import { useState, useEffect } from "react";
import { edit } from "../../features/users/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import toast from 'react-hot-toast';

export const ModalEdit = ({ active, setActive, selectedId }) => {
    const users = useSelector((state) => state.users);
    const itemToEdit = users && users.items ? users.items.find((item) => item.id === selectedId) : null;
    const [name, setName] = useState(itemToEdit ? itemToEdit.name : "");
    const [calories, setCalories] = useState(itemToEdit ? itemToEdit.calories : "");
    const dispatch = useDispatch();

    useEffect(() => {
        setName(itemToEdit ? itemToEdit.name : "");
        setCalories(itemToEdit ? itemToEdit.calories : "");
    }, [itemToEdit]);
    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(name, 'name is set')
    }

    const handleCaloriesChange = (event) => {
        setCalories(event.target.value);
        console.log(calories, 'calories set')
    }

    const handleSaveEditClick = (event) => {
        event.preventDefault();
        if (!name || !calories) {
            toast.error('fill all inputs')
            return
        };
        dispatch(edit({ name, calories, selectedId }));
        console.log(name, calories, selectedId)
        setName("");
        setCalories("");
        setActive(false);
        toast.success('updated')
    }
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div>
                    <div className="form-content">
                        <h2 className="text">Edit</h2>
                        <TextField value={name} onChange={handleNameChange} type="text" name="name" id="outlined-basic" label="Food" variant="outlined" />
                        <TextField value={calories} onChange={handleCaloriesChange} type="number" id="outlined-basic" label="Calories" variant="outlined" />
                        <Button variant='outlined' onClick={handleSaveEditClick}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}