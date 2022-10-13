import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = () => {
  return (
    <>
      <li className={s.imageGalleryItem}>
        <img className={s.imageGalleryItemImage} src="" alt="" />
      </li>
    </>
  );
};
