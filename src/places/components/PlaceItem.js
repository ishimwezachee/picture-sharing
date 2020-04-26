import React,{ useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from "../../shared/components/FormElements/button";
import Modal from "../../shared/components/UIElements/Modal";
import './PlaceItem.css';

const PlaceItem = props => {
  const [showMap,setShowMap] = useState(false);
  const [showConfirmModal,setShowConfirmModal] = useState(false);
  const openMapHandler = ()=> setShowMap(true);

  const closeMapHandler = ()=> setShowMap(false);
  const showDeleteWarningHandler = () =>{
    setShowConfirmModal(true);
  }
  const cancelDeleteHandler = ()=>{
    setShowConfirmModal(false)
    setShowConfirmModal(false);
  }

  const confirmDeleteHandler = ()=>{
    console.log('DELETING...')
  }
  const mapImage ='https://www.ydesignservices.com/wp-content/uploads/2016/07/Googlemap-600x551.jpg'
  return (
  <React.Fragment>
 <Modal 
 show={showMap}
 onCancel = {closeMapHandler}
 header = {props.address}
 contentClass= "place-item__modal-content"
 footClass = "place-item__modal-actions"
 footerClass = "place-item__modal-actions"
 footer = {<Button onClick={closeMapHandler}>CLOSE</Button>}
  >

<div className="map-container">
<img className="map_image" src={mapImage} alt="map"/>
</div>
 </Modal>
 
 <Modal 
 show={showConfirmModal}
 onCancel = {cancelDeleteHandler}
 header="Are you sure? " 
 footerClass="place-item__modal-actions" 
 footer={
   <React.Fragment>
     <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
     <Button danger onClick={confirmDeleteHandler} >DELETE</Button>
   </React.Fragment>
 }>
 <p>Do you want to proceed and delete the place ?
 please not that it can't be undone therafter .
 </p>
 </Modal>

    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
        </div>
      </Card>
    </li>
    </React.Fragment>
  );
};

export default PlaceItem;