import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import {Button} from './Button/Button';
import {Modal} from './Modal/Modal';

export class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem/>
        </ImageGallery>        
        <Button/>
        {/* <Modal/> */}
      </>
    );
  }
}
