import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { UserContext } from "../../contexts/UserContext";

const DataContactCard = ({ name, email, tel, id }) => {
  const { data } = useContext(ContactContext);

  return (
    <div>
      <div>
        <h3>{data.name}</h3>
        <h4>{data.email}</h4>
        <h4>{data.tel}</h4>
      </div>
    </div>
  );
};

export default DataContactCard