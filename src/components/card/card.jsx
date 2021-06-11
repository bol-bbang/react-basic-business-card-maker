import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => <div>{card.id} {card.name}</div>;

export default Card;