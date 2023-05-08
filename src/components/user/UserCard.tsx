import { useContext } from "react"
import { UserContext } from "../../context/userContext"

export const UserCard = () => {

  const {user} = useContext(UserContext)

  return (
    <div className="d-flex">
      <div className="me-5">
        <h4>{user.name}</h4>
        <a href="" className="text-decoration-none fw-bold">My Settings</a>
      </div>
      <div className="col-auto">
        <img src="/profilePic.svg"/>
      </div>
    </div>
  )
}
