import React, { useState } from "react";
import styles from "./addNewTransaction.module.css";

// directly destructure props
const AddNewTransaction = ({ formData, handleChange, handleFormSubmit }) => {
  return (
    <>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.formControlsContainer}>
          <div className={styles.formControl}>
            <label htmlFor="date">Date: </label>
            <input
              value={formData.date}
              onChange={handleChange}
              type="date"
              id="date"
              name="date"
            />
          </div>

          <div className={styles.formControl}>
            <input
              value={formData.description}
              onChange={handleChange}
              type="text"
              id="description"
              name="description"
              placeholder="Description"
            />
          </div>

          <div className={styles.formControl}>
            <input
              value={formData.category}
              onChange={handleChange}
              type="text"
              id="category"
              name="category"
              placeholder="Category"
            />
          </div>

          <div className={styles.formControl}>
            <input
              value={formData.amount}
              onChange={handleChange}
              type="number"
              id="amount"
              name="amount"
              placeholder="Amount"
            />
          </div>
        </div>

        <input type="submit" value="Add Transaction" />
      </form>
    </>
  );
};

export default AddNewTransaction;