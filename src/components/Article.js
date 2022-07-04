export default function Article(props) {
  return (
    <div className="article">
      <img className="article--photo" src={props.item.imageUrl} alt="photo" />
      <div className="article--description">
        <div className="article--lieu">
          <img
            className="article--logoMaps"
            src="./images/googleMaps.png"
            alt="logoMaps"
          />
          <span className="article--pays">{props.item.location}</span>
          <span className="article--linkMaps">
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </span>
        </div>
        <h2 className="article--titre">{props.item.title}</h2>
        <div className="article--dates">
          <span className="article--dateDebut">{props.item.startDate}</span>
          <span> - </span>
          <span className="article--dateFin">{props.item.endDate}</span>
        </div>
        <p className="article--texte">{props.item.description}</p>
      </div>
    </div>
  );
}
