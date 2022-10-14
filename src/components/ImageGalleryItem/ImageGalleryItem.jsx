import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ gallery }) => {
  return (
    <>
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <li className={s.imageGalleryItem} key={id}>
            <img
              className={s.imageGalleryItemImage}
              src={webformatURL}
              alt={tags}
            />
          </li>
        );
      })}
    </>
  );
};
