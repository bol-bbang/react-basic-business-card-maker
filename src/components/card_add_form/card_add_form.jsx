import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = ({ addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const themeRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name : nameRef.current.value || '',
      theme : themeRef.current.value,
      company : companyRef.current.value || '',
      title : titleRef.current.value || '',
      phone : phoneRef.current.value || '',
      email : emailRef.current.value || '',
      message : messageRef.current.value || '',
      fileName : '',
      fileURL : '',
    }
    formRef.current.reset();
    addCard(card);

  }

  return(
      <form ref={formRef} className={styles.form}>
        <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="name"/>
        <select ref={themeRef} className={styles.select} name="theme" >
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="colorful">colorful</option>
        </select>
        <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="company" />
        <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="title" />
        <input ref={phoneRef} className={styles.input} type="text" name="phone" placeholder="phone" />
        <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="email" />
        <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="message"></textarea>
        <div className={styles.fileInput}>
          <ImageFileInput />
        </div>
        <Button name="Add" onClick={onSubmit}/>
      </form>
  );
}

export default CardAddForm;