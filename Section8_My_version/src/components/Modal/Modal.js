import React, { useState } from "react";

import styles from "./Modal.module.css";

const Modal = (props) => {
  const modal = (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <span className={styles.close} onClick={props.closeModal}>
          &times;
        </span>
        <p>{props.children}</p>
      </div>
    </div>
  );

  return <>{props.open ? modal : null}</>;
};

export default Modal;
