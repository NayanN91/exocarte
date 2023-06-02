import "./smashcards.css";


const SmashCard = (props) => {
    const { name, image, description, nameColor } = props;
    const cardStyle = {
        color: nameColor,
    };
    return (
        <div className="smashCardsGlobal">
            <img className="smashCardImg" src={image} alt="perso" />
            <p className="blaze" style={cardStyle}>
                {name}
            </p>
            <p className="descriptif">{description}</p>
        </div>
    );
};


export default SmashCard;