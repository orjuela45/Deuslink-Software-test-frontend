import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TaskInterface } from '../../interfaces';
import { useContext } from 'react';
import { ModalContext } from '../../context';

export const ModalShowTask = ({task}: {task: TaskInterface}) => {

  const { show, handleClose } = useContext(ModalContext);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className='text-end'>{task.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Date: <span className='ff-regular'>{task.date}</span></p>
        {
          task.description &&
          <p>Description: <span className='ff-regular'>{task.description}</span></p>
        }
        {
            task.tags?.map(tag => {
              return (
                <div key={`${task._id}-${tag}`}>
                  <span>Tags</span>
                  <span className="badge rounded-pill bg-primary ff-regular px-4 m-1">{tag}</span>
                </div>
              )
            })
          }

      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}