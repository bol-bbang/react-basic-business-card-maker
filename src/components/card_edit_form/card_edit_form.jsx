import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => (
      <form>
        <ul>
          <li>
            <span>name</span>
            <input type="text" name="name" />
          </li>
        </ul>
      </form>
  );

export default CardEditForm;