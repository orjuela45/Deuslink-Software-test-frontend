import { ModalContext } from "../../context";
import { UserCard } from "../user/UserCard";
import { useContext } from 'react';

export const Nabvar = () => {
  const { handleShow } = useContext(ModalContext);

  return (
    <div>
      <nav className="navbar px-5 mt-4">
        <div className="d-flex">
          <img src="/btnPlus.svg" onClick={() => handleShow(null)}/>
          <h4 className="mx-3">taskly</h4>
        </div>
        <div>
          <UserCard />
        </div>
      </nav>
    </div>
  );
};
