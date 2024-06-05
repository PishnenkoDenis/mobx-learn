import axios from "axios";

export type TPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";

export const getPhotos = async () => (await axios.get(PHOTOS_URL)).data;
