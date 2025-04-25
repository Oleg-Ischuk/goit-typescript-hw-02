import type { UnsplashImage } from "./App.types";

export interface ImageGalleryProps {
  items: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}
