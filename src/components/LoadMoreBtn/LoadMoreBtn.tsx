import type React from "react";
import styles from "./LoadMoreBtn.module.css";
import type { LoadMoreBtnProps } from "../../types/LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={styles.loadMoreButton} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
