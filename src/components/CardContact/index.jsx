import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ContactContext } from "../../contexts/ContactContext";
import DataContactCard from "../DataContactCard";

const CardContact = () => {
    const { contactData } = useContext(ContactContext)
    // userIdStorage = localStorage.getItem("@userId")

    return (
        <div>
            {/* <h2>Contatos Cadastrados</h2>
            <ul>
                <li>
                {
                    <>
                    contactData?.map(
                        (element) => {
                        
                            <DataContactCard
                                key={element.id}
                                name={element.name}
                                email={element.email}
                                tel={element.tel}
                            ></DataContactCard>
                        

                        }
                        // userIdStorage &&
                        // userIdStorage === element.user.id && 
                    )
                    </>
                }
                </li>
            </ul> */}
        </div>
    )
}

export default CardContact;