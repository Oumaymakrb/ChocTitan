import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTicket } from '@fortawesome/free-solid-svg-icons';
import { IKVideo, IKContext } from 'imagekitio-react';
import { video } from "../../utils/media";

export default function WorkshopModal({show,handleClose,data}) {
  // const videoRef = useRef(null);

  // const setDefaultVolume = () =>{
  //     videoRef.current.volume = 0.1;
  // }
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{data?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className='workshop__modal'>
                    
            {data?.video ? 
            (
              <IKContext urlEndpoint="https://ik.imagekit.io/c8tuygr88">
                        <IKVideo className="workshop__modal-video"
                            path={video}
                            controls={true}
                            autoPlay={true}
                            loop={true}
                            muted={true}
                        />
                        </IKContext> 

            ):
            (
              <div className='workshop__modal-image'>
                <img src={data?.thumbnail} alt="..."/>
              </div>
            )}
          </div>
          <div className='workshop__modal-content'>
              <span>{data?.date}</span>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
          </div>
      </Modal.Body>
      <Modal.Footer>
        {new Date(data?.date) > new Date() && <a href={data?.ticket_link}><Button  className="ticket-btn"><FontAwesomeIcon icon={faTicket}/> Get Ticket</Button></a>} 
        <a href={data?.presentation_link}><Button  className='download-ticket'><FontAwesomeIcon icon={faDownload}/> Download Presentation</Button></a>
      </Modal.Footer>
  </Modal>
  )
}
