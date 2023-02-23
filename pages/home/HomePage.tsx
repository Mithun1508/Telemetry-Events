import React from "react";
import { USER_GROUP_ROUTE } from "../../routes";
import { Link } from "react-router-dom";
import AppContext from "../../contexts/App/AppContenxt";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = props => {
  const {
    state: { data }
  } = React.useContext(AppContext);

  const renderUserGroups = () => {
    return data.map((group, idx) => {
      const { groupName, users } = group;
      return (
        <li key={`user-${idx}`}>
          {groupName}: {users.length ? users.join(", ") : "empty group"}
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <div>
        <label>User groups:</label>
        <ul className={"range user-groups-range"}>{renderUserGroups()}</ul>
        <Link to={USER_GROUP_ROUTE}>
          <span className="clickable-text">Create user group</span>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
