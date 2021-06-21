import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = (props) => (
  <>
    <button className={styles.button}>Image</button>
    <input name="file" type="file"
    class="file-upload" data-cloudinary-field="image_id"
    data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/>
  </>
  );

export default ImageFileInput;