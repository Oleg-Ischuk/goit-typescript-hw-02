import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import type { UnsplashImage, UnsplashResponse } from "./types/App.types";

function App() {
  const [gallery, setGallery] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );
  const [totalPages, setTotalPages] = useState<number>(0);

  const onSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setGallery([]);
    setPage(1);
  };

  useEffect(() => {
    const fetchImages = async (): Promise<void> => {
      if (!query) return;
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<UnsplashResponse>(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=20&page=${page}&orientation=landscape&client_id=onM49Kt67Vh6DOKtoVKSfzkiOO2CkuSWYu7uADzJnxI`
        );
        setGallery((prevGallery) => [...prevGallery, ...response.data.results]);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setError("Unfortunately, an error occurred. Please try again!");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  useEffect(() => {
    if (gallery.length > 0 && page > 1) {
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: "smooth",
      });
    }
  }, [gallery, page]);

  const openModal = (image: UnsplashImage): void => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div>
        <SearchBar onSearch={onSearch} />
        {gallery.length > 0 && (
          <ImageGallery items={gallery} onImageClick={openModal} />
        )}
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          imageUrl={selectedImage ? selectedImage.urls.regular : ""}
          alt={selectedImage ? selectedImage.alt_description : ""}
        />
        {loading && <Loader size={60} />}
        {gallery.length > 0 && !loading && page < totalPages && (
          <LoadMoreBtn onClick={() => setPage((prevPage) => prevPage + 1)} />
        )}
        {error && <ErrorMessage message={error} />}
        {gallery.length === 0 && !error && query && (
          <ErrorMessage
            message={`No images found for "${query}". Please try a different search.`}
          />
        )}
      </div>
    </>
  );
}

export default App;
