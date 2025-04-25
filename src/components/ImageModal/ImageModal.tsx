import type React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { RxCross2 } from "react-icons/rx";
import type { ImageModalProps } from "../../types/ImageModal.types";

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  imageUrl,
  alt,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <button className={styles.closeButton} onClick={onRequestClose}>
        <RxCross2 />
      </button>
      <img
        src={imageUrl || "/placeholder.svg"}
        alt={alt}
        className={styles.modalImage}
      />
    </Modal>
  );
};

export default ImageModal;
