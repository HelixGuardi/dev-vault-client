import TrashIcon from "../assets/trash-icon-btn.png"
import axios from "axios";

function CardRear(props) {


    const {isFlipped, setIsFlipped, eachCard, getData} = props;

    const handleClick = (event) => {
        event.preventDefault();
        props.setIsFlipped(!props.isFlipped);
        // console.log(props.isFlipped)
      }
    
    const deleteCard = async () => {
        try {
            await axios.delete(`http://localhost:5005/flipCards/${eachCard.id}`)
            //navegar hacia otra página (no sirve)
            //función para actualizar el estado local del componente padre
            getData()
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="flip-card-container">
            <button className="delete-btn" onClick={deleteCard}><img src={TrashIcon} alt="trash-icon (delete)" /></button> 
            <div className="flip-card">
                <p>{eachCard.resume}</p>
                <button onClick={handleClick} className="flipCard-btn">¡ Flip Back !</button>
                <button className="flipCard-btn">Saber más</button>
            </div>
        </div>
    )
}

export default CardRear;