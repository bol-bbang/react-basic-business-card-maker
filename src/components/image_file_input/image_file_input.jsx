import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ uploadService, name, onFileChange }) => {

  const inputRef = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  }
  const onChange = async (e) => {
    const uploaded = await uploadService.upload(e.target.files[0]);
    //uploaded가 끝나고 나면 아래 내용이 실행됨
    onFileChange && onFileChange({
      name : uploaded.original_filename,
      url : uploaded.secure_url
    });
  }

  return (
    <div className={styles.contatiner}>
      <button className={`${styles.button} ${name && styles.hasFile}`} onClick={onButtonClick}>{ name || 'No File' }</button>
      <input className={styles.input} name="file" type="file" accept="image/*"
        ref={inputRef}
        onChange={onChange}
        // data-cloudinary-field="image_id"
        // data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
      />
    </div>
    );
}

export default ImageFileInput;