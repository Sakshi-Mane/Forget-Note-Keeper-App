import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function Create(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(preValue => {
            return {
                ...preValue,
                [name]: value

            }
        })
    }

    function createNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleClick() {
        return setIsExpanded(true);

    }


    return (
        <div>
            <form>
                {isExpanded && (
                    <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />)}

                <textarea onClick={handleClick} onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
                <Zoom in={isExpanded && true}>
                    <button onClick={createNote}><AddIcon /></button>
                </Zoom>
            </form>
        </div>

    );
}

export default Create;