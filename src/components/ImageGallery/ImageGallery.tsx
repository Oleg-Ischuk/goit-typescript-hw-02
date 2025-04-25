import type React from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import type { ImageGalleryProps } from "../../types/ImageGallery.types";
import type { UnsplashImage } from "../../types/App.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <div>
      <ul className={styles.galleryList}>
        {items.map((item: UnsplashImage) => (
          <li key={item.id}>
            <ImageCard
              image={item.urls.small}
              alt={item.alt_description}
              likes={item.likes}
              userName={item.user.name}
              onClick={() => onImageClick(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
