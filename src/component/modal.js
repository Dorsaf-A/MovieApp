import React,{useState} from 'react';
import '../App.css'
import 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rate from './rate';
import './modal.css'

function CenteredModal(props) {
  const [moviename, setMovieName] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const save = (e) => {
    let newMovie = {
        id:Math.random,
        moviename,
      rating,
      description,
      image,

    };
    props.addNewMovie(e, newMovie);
    setMovieName('');
    setRating('');
    setImage('');
    setDescription('');
  };

    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Body>
        <label>Movie Title</label>
        <input type='text' name='Movie Title' value={moviename} onChange={(e) => setMovieName(e.target.value)}></input><br></br>
        <label>Rating</label>
        <input type="number" id="quantity" name="quantity" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)}>
        </input><p><Rate rating={rating}/></p><br></br>
        <label>Image URL</label>
        <input type='text' value={image} onChange={(e) => setImage(e.target.value)}></input><br></br>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </Modal.Body>
        <Modal.Footer>
        <button className='bttn' onClick={save}>Save</button>
        <button className='bttn' onClick={props.onHide}>Close</button>
        </Modal.Footer>
    </Modal>
    );
}

function App({addNewMovie}) {
    const [modalShow, setModalShow] = React.useState(false);

    return (<div>
        <button className="movieDetails" style={{justifyContent:'center',color:'white',fontSize:'200px',margin:'0 40%'}} onClick={() => setModalShow(true)}>
        +
        </button>
        <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        addNewMovie={addNewMovie}
        />
    </div>
    );
}

export default App;