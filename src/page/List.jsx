import React from "react";
import { useEffect, useState } from "react";
import { Center } from "../styles/Center"
import Table from "../components/Table/Table";

export default function List() {

    const [data, setData] = useState([]);

    useEffect(() => {
        let list = sessionStorage.getItem("list");
        if (!list) {
            list = []
        } else {
            list = JSON.parse(list);
        }
        setData(list);
        console.log(list)
    }, [])

    const handleRemove = (rowIndex) => {
        const updatedData = data.filter((_, index) => index !== rowIndex);
        setData(updatedData);
        sessionStorage.setItem("list", JSON.stringify(updatedData));
       }

       const handleEdit = (rowIndex, field, value) => {
        const updatedData = [...data];
        updatedData[rowIndex][field] = value;
        setData(updatedData);
       }

       const handleSave = (rowIndex) => {
        sessionStorage.setItem("list", JSON.stringify(data));
        console.log("data saved to storage")
       }
    return (
        <div>
            <h1>Table</h1>
           <Center V H>
            <Table data={data} onDeleteRow={handleRemove} onEdit={handleEdit} onSave={handleSave}/>
           </Center>
        </div>
    );
}