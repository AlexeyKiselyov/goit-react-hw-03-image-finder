import { Component } from 'react';
import { requestGallery } from './services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
// import {Modal} from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    gallery: [],
    image: null,
    error: null,
    loading: false,
    page: 1,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        requestGallery(query, page).then(response => {
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...response.data.hits],
          }));
        });
      } catch (error) {
        this.setState({ error: error.message });
      } finally{
        console.log('Finaly');
      }
    }
  }

  onSubmit = queryUpdate => {
    this.setState({
      query: queryUpdate,
      gallery: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { gallery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {gallery.length > 0 && (
          <>
            <ImageGallery>
              <ImageGalleryItem gallery={gallery} />
            </ImageGallery>
            <Button loadMore={this.loadMore} />
          </>
        )}
        {/* <Modal/> */}
      </>
    );
  }
}
