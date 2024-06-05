import { observer } from "mobx-react-lite";
import { useStores } from "../../Context/root-store-context";
import { useEffect } from "react";
import { TPhoto } from "../../api/getPhotos";

const slicePhotos = (photos: TPhoto[]) => photos.slice(0, 4);

export const Photos = observer(() => {
  const {
    photos: { photos, fetchPhotosAction },
  } = useStores();

  useEffect(() => {
    fetchPhotosAction();
  }, [fetchPhotosAction]);

  if (!photos) {
    return null;
  }

  return photos?.case({
    pending: () => <h2>...Loading</h2>,
    rejected: () => <h2>Something went wrong</h2>,
    fulfilled: (photos) => (
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {slicePhotos(photos).map(({ id, url, title }) => (
          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid grey",
            }}
          >
            <span>{title}</span>
            <img src={url} alt={title} width={"70px"} height={"50px"} />
          </div>
        ))}
      </div>
    ),
  });
});
