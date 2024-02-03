import React     from 'react'
import styles from './AddTask.module.scss'
import { useState } from 'react'

 function AddTask({closeModal, updateItems, items}) {

    const [newNote, setNewNote] = useState('')

    const getNote = (e) =>{
        setNewNote(e.target.value)
    }
    const getItems = () => {
        let newItems = [newNote, ...items];
        updateItems(newItems); // Обновляем состояние в родительском компоненте
        console.log(newItems);
        localStorage.setItem('todolist', JSON.stringify(newItems));
        closeModal();
      };

    return(
        <div className={styles.addTask}>
            <div className={styles.items}>
            <h2>New Note</h2>
            <input type="text" placeholder='Input your note...' onChange={getNote}/>
            <div className={styles.box}>
                <button onClick={closeModal}>Cancel</button>
                <button onClick={getItems}>Apply</button>
            </div>
            </div>
        </div>
    )
}
export default AddTask