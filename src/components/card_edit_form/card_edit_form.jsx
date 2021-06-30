import React, { memo } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = memo(({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, title, phone, email, theme, message, fileName } = card;

  const onChange = (e) => {
    const target = e.currentTarget;
    if(target === null){
      return;
    }
    e.preventDefault();
    
    updateCard({
      ...card,
      [target.name] : target.value
    });

  }

  const onDelete = () => {
    deleteCard(card);
  }

  const onFileChange = (data) => {
    updateCard({
      ...card,
      fileName : data.name,
      fileURL : data.url
    });
  }

  return(
      <form className={styles.form}>
        <input className={styles.input} type="text" name="name" value={name} onChange={onChange} />
        <select className={styles.select} name="theme" value={theme} onChange={onChange}>
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="colorful">colorful</option>
        </select>
        <input className={styles.input} type="text" name="company" value={company} onChange={onChange} />
        <input className={styles.input} type="text" name="title" value={title} onChange={onChange} />
        <input className={styles.input} type="text" name="phone" value={phone} onChange={onChange} />
        <input className={styles.input} type="text" name="email" value={email} onChange={onChange} />
        <textarea className={styles.textarea} name="message" value={message} onChange={onChange} ></textarea>
        <div className={styles.fileInput}>
          <FileInput name={fileName} onFileChange={onFileChange} />
        </div>
        <Button name="Delete" onClick={onDelete}/>
      </form>
  );
});

export default CardEditForm;