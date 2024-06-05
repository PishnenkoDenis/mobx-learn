import { makeAutoObservable } from "mobx";
import { TPhoto, getPhotos } from "../api/getPhotos";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";

type FlowReturn<AsyncFunction extends (...args: any) => Promise<any>> =
  Generator<
    ReturnType<AsyncFunction>,
    void,
    Awaited<ReturnType<AsyncFunction>>
  >;

class PhotosStore {
  photos?: IPromiseBasedObservable<TPhoto[]>;

  constructor() {
    makeAutoObservable(this);
  }

  //   *fetchPhotos(): FlowReturn<typeof getPhotos> {
  //     const response = yield getPhotos();

  //     this.photos = response.json();
  //   }

  fetchPhotosAction = () => {
    this.photos = fromPromise(getPhotos());
  };

  //   get limitedPhotos() {
  //     return this.photos?.slice(0, 4);
  //   }
}

const photosStore = new PhotosStore();
export default photosStore;
