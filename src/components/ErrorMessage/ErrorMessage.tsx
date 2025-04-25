import type React from "react";
import styles from "./ErrorMessage.module.css";
import type { ErrorMessageProps } from "../../types/ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className={styles.errorMessage}>{message}</div>;
};

export default ErrorMessage;
