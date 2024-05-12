import React from "react";
import styles from "./search.module.css";

// directly destructure props
const Search = ({ filter, handleFilter }) => {
  return (
    <>
      <input
        value={filter}
        onChange={handleFilter}
        className={styles.search}
        type="text"
        placeholder="Search Your Recent Transactions (filter by category)"
      />
    </>
  );
};

export default Search;