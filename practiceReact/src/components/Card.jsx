const Card = ({ name, experience, profession, imgProfile }) => {
  return (
    <div className="card">
      <img src={imgProfile} alt={name} />

      <h1 style={{ marginLeft: "10px" }}>
        Employee Name: <span className="name">{name}</span>
      </h1>
      <div className="card-content">
        <h3>Profession: {profession}</h3>
        <h3>Experience: {experience}</h3>
      </div>
      <h3 style={{ marginLeft: "10px" }}>
        Position:-{" "}
        {experience > 3 ? `Senior ${profession}` : `Junior ${profession}`}
      </h3>
    </div>
  );
};
export default Card;
