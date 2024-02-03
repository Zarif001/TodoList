import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Todo.module.scss';
import Tasks from '../Tasks/Tasks';
import Empty from '../Empty/Empty';
import AddTask from '../AddTask/AddTask';

export default function Todo() {
  const [items, setItems] = useState([])
  const [modal, setModal] = useState(false);
  const [searchItem, setSearchItem] = useState('')


  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  }
  const filteredItems = items.filter(item =>
    item.includes(searchItem.toLowerCase())
  );

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const updateItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('todolist', JSON.stringify(newItems));
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodo) {
      setItems(savedTodo);
    }
  }, []);



  
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>Todo List </h1>
      <div>
        <div className={styles.search}>
          <input 
          type="text" 
          className={styles.searchInput} 
          placeholder='Search note...' 
          value={searchItem}
          onChange={handleSearch}
          />
          <img src="./images/search.svg" alt="search-icon" />
        </div>
      </div>

      {items.length > 0 ? (
          <Tasks items={filteredItems} setItems={setItems} />
      ) : 
      <Empty />
    }
        <div className={styles.addButton} onClick={openModal}>
        <img src="./images/addButton.svg" alt="addButton" />
      </div>
      {modal && (
        <AddTask closeModal={closeModal} updateItems={updateItems} items={items}  />
      )}
     
    </div>
  );
}
