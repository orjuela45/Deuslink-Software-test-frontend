import { ModalContext } from "../../context";
import { ImageCard } from "./ImageCard"
import { useContext } from 'react';

export const CardAdd = ({pinned}: {pinned: boolean}) => {

  const { handleShow } = useContext(ModalContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
    e.preventDefault()
    handleShow(null)
  }

  return (
    <div className="card flex-row col-12 col-xl-3 bg-white border-0 py-4 m-4">
      <div className="d-flex col-3 align-self-center justify-content-center">
        <a href="" onClick={handleClick}>
          <ImageCard src={'/btnPlus.svg'} />
        </a>
      </div>
      <div className="col-8">
        <div className="card-body px-4">
          <div className="row justify-content-between">
            <span className="card-title h5 h4-sm col-auto">Add new {pinned ? 'weekly pin' : 'task'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
