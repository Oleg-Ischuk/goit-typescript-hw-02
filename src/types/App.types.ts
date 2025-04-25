export interface UnsplashImage {
  id: string;
  alt_description: string;
  likes: number;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
    username: string;
  };
}

export interface UnsplashResponse {
  results: UnsplashImage[];
  total_pages: number;
}
