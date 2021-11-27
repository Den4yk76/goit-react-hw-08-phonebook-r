import React, { useState} from 'react';

import style from './ContactsList.module.css';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';
import { submitPhone } from '../redux/operation';




export default function ContactForm() {
 const inputNameId = uuidv4();
  const inputNumberId = uuidv4();
  
  const [name,setName] = useState("");
  const [number, setNumber] = useState("");
  
  const contacts = useSelector(state => state.contacts);
  const token = useSelector(state => state.token);

  const handleChangeAllInput = (ev) => {
       
    if (ev.target.name === "name") {
      setName(ev.target.value)
    } else if (ev.target.name === "number") {
      setNumber(ev.target.value)
    };
  };

  const dispatch = useDispatch();
  const addPhone = (data,token) => dispatch(submitPhone(data,token));


  function add(data) {
    
  if (!contacts.find(el => el.name === data[0])) {
    
    addPhone({
      data: {
        name: data[0],
        number: data[1]
      }, token
    })
    
  } else {
    alert(`${data[0]} is already in contacts`);
    
  }
}

  return (<>
      <form className={style.form} onSubmit={(e) => {
        e.preventDefault();
        add([name,number]);       
         
      }}>
        <label className={style.label} htmlFor={inputNameId}>Name</label>
        <input
          className={style.input}
          id={inputNameId}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChangeAllInput}
            />
            
        <label className={style.label} htmlFor={inputNumberId}>Phone</label>
        <input
          className={style.input}
          id={inputNumberId}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChangeAllInput}
        />

        <button className={style.button}
          type="submit"
        >Add contact</button>
      </form>
    </>)
};

