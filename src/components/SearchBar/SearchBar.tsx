import type React from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";
import type { SearchBarProps } from "../../types/SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const formElements = form.elements as HTMLFormControlsCollection;
    const searchInput = formElements.namedItem("search") as HTMLInputElement;
    const query = searchInput.value;

    if (query.trim() === "") {
      toast.error("Text must be entered to search for images!", {
        duration: 2000,
      });
      return;
    }
    onSearch(query);
    form.reset();
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputSearch}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.buttonSearch} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
