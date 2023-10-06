import Stats from "./Stats";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import { useState } from "react";


function App() {

  const [items, setItem] = useState([])

  const handleAddItem = (item)=>{
    setItem((items)=> [...items, item])
  }

  const onDeleteItem = (id)=>{
    setItem((items)=> items.filter(item=> item.id !==id))
  }

  const onToggleItem = (id) =>{
    console.log(id)
    setItem((items)=> items.map(item => item.id === id ? {...item, packed: !item.packed}: item))
  }

  const onClearList = () =>{
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItem([]);
  }
  return (
    <>
      <Logo/>
      <Form addIteam = {handleAddItem}/>
      <PackingList items = {items} onDeleteItem = {onDeleteItem} onToggleItem = {onToggleItem} onClearList = {onClearList} />
      <Stats items = {items}/>
    </>
  );
}

export default App;
