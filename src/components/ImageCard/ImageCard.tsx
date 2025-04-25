import type React from "react";
import styles from "./ImageCard.module.css";
import type { ImageCardProps } from "../../types/ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  alt,
  likes,
  userName,
  onClick,
}) => {
  return (
    <div className={styles.imageCard}>
      <img
        className={styles.imageItem}
        src={image || "/placeholder.svg"}
        alt={alt}
        onClick={onClick}
      />
      <div className={styles.infoContainer}>
        <p className={styles.info}>Likes: {likes}</p>
        <p className={styles.info}>Uploaded by: {userName}</p>
      </div>
    </div>
  );
};

export default ImageCard;
