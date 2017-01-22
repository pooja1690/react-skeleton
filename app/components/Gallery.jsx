import React, { Component } from 'react';
import '../assets/styles/Gallery.css';
import ImageGallery from 'react-image-gallery';

class Gallery extends Component {
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
        <div id="gallery">
          <div className="container">
            <div className="row text-center">
                <div className="col-md-8 col-md-offset-2">
                    <div className="section-title">
                        <h2>Gallery</h2>
                        <hr />
                    </div>
                </div>
            </div>
          </div>
          <div className='photo-space'>
            <ImageGallery
              items={images}
              slideInterval={2000}
              onImageLoad={this.handleImageLoad}
              showBullets={true}
              showNav={true}
              slideOnThumbnailHover={true}
              showPlayButton={false}/>
          </div>
          <div className="text-center">
              <a href="#how-it-works" className="down-btn page-scroll"><span className="fa fa-angle-down"></span></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
