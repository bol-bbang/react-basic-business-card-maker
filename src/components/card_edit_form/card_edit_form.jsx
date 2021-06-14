import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, title, phone, email, theme, message, fileName, fileURL } = card;

  return(
      <form>
        <input type="text" name="name" value={name} />
        <input type="text" name="company" value={company} />
        <input type="text" name="title" value={title} />
        <input type="text" name="phone" value={phone} />
        <input type="text" name="email" value={email} />
        <select name="theme" value={theme}>
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="colorful">colorful</option>
        </select>
        <textarea name="message" value={message}></textarea>
        <input type="text" name="fileName" value={fileName} />
      </form>
  );
}

export default CardEditForm;