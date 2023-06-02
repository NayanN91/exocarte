import "./smashcards.css";

const SmashCard = (props) => {
    const{name, image, description} = props;

    return (
        <div className="smashCardsGlobal">
            <img className="smashCardImg" src={image} alt= "perso" />
            <p className="blaze">{name}</p>
            <p className="descriptif">{description}</p>
        </div>
    );
} ;


export default SmashCard;