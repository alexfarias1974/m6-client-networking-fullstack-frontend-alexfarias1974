import { useContext } from "react";
import "../../index.css";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../contexts/UserContext";
import { GrayButton } from "../../components/GrayButton/styles";
import FormContact from "../../components/FormContacts";
import CardContact from "../../components/CardContact";

const Home = ({logout}) => {
    
    const { user } = useContext(UserContext);
    
    
   
    
    
    return (
        <div>
        <div className="headerHome">
            <h1 className="logoKhRegister">Client Networking</h1>
            <header>teste</header>
            <GrayButton 
                className="btnBack" 
                onClick={() => logout()}>
                Sair
            </GrayButton>
        </div>
        <FormContact />
        {/* <CardContact /> */}
        
    </div>
    );
};
export default Home











{/* const buttonBack = () => {
                        navigate("/login", { replace: true });
                    };
                     */}
