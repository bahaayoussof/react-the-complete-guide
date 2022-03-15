import React from "react";

import styles from "./Card.module.css";

const Card = props => {
	return (
		//custom card component
		<div className={`${styles.card} ${props.className}`}>{props.children}</div>
	);
};

export default Card;
