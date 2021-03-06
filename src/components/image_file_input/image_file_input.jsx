import React, { memo, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = memo(({ uploadService, cropService, name, onFileChange }) => {

  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  }
  const onChange = async (e) => {
    setLoading(true);

    //선택된 이미지 팝업
    //이미지 사이즈 조정
    cropService.showCropArea(e.target.files[0]);


    const uploaded = await uploadService.upload(e.target.files[0]);
    //uploaded가 끝나고 나면 아래 내용이 실행됨
    setLoading(false);
    onFileChange && onFileChange({
      name : uploaded.original_filename,
      url : uploaded.secure_url
    });
  }

  return (
    <div className={styles.container}>
      <input className={styles.input} name="file" type="file" accept="image/*"
        ref={inputRef}
        onChange={onChange}
      />
      { !loading && <button className={`${styles.button} ${name && styles.hasFile}`} onClick={onButtonClick}>{ name || 'No File' }</button> }
      { loading && <div><img className={styles.loading} src="images/loding_bean_eater.gif" alt="loading..." /></div> }
    </div>
    );
});

export default ImageFileInput;