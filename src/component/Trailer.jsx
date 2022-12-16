import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RiMovieFill } from 'react-icons/ri';
import YouTube from 'react-youtube';

const Trailer = ({ img, trailerVideo }) => {
  const [show, setShow] = useState(false);
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  // official 영상 보여주기
  const official = trailerVideo && trailerVideo.results.find((item) => {if (item.name === 'Official Trailer') {return item}})
  return (
    <>
      <div
        className='show_youtube'
        onClick={() => setShow(true)}
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${img})` }}
      >
        <span>
          <RiMovieFill />
        </span>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <YouTube videoId={official?.key && trailerVideo.results[0].key} opts={opts} onReady={_onReady} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Trailer