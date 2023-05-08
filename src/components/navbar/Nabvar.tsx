import { UserCard } from "../user/UserCard";

export const Nabvar = () => {
  return (
    <div>
      <nav className="navbar px-5 mt-4">
        <div className="d-flex">
          <img src="/btnPlus.svg"/>
          <h4 className="mx-3">taskly</h4>
        </div>
        <div>
          <UserCard />
        </div>
      </nav>
    </div>
  );
};
