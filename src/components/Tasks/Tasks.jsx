import React, { useState } from "react";
import styles from "./Tasks.module.scss"; 
import { AiOutlineDelete } from "react-icons/ai";

export default function Tasks({ items, setItems }) {
  const [checkedItems, setCheckedItems] = useState(
    items.map(() => false)
  );

  const handlerCheck = (index) => {
    setCheckedItems((prev) => {
      const updatedCheckedItems = [...prev];
      updatedCheckedItems[index] = !prev[index];
      return updatedCheckedItems;
    });
  };

  const handlerDeleteTodo = (index) =>{
    let reducedTodo = [...items]
    reducedTodo.splice(index,1)
    localStorage.setItem('todolist', JSON.stringify(reducedTodo))
    setItems(reducedTodo)

  }


  return (
    <>
    <div className={styles.tasks}>
      {items.map((item, index) => (
        <div className={styles.container} key={index}>
          <>
          <label
            htmlFor={`todoCheckbox${index}`}
            className={checkedItems[index] ? styles.checkInput : styles.input}
          >
            {item}
            <span className={styles.span}>#{index}</span>

            <input
              type="checkbox"
              onChange={() => handlerCheck(index)}
              checked={checkedItems[index]}
              id={`todoCheckbox${index}`}
            />
            <span className={styles.checkmark}></span>
          </label>
          </>
          <div className={`${styles.show} ${styles.hidden}`}>
          <AiOutlineDelete onClick={() => handlerDeleteTodo(index)} />
          </div>
          <div></div>
        </div>        
      ))}
      </div>
    </>
  );
}
