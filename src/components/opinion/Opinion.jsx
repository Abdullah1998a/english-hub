import "./opinion.css";

export function Opinion({ POV, date }) {
  const { name, avatar, rank, opinion } = POV;
  return (
    <div className="opinion">
      <div className="member">
        <div className="avatar">
          <img src={avatar} alt={`avatar of ${name}`} width={50} height={50} />
          <div>
            <h3>{name}</h3>
            <p>{rank}</p>
          </div>
        </div>
        <span>{date}</span>
      </div>
      <p>{opinion}</p>
    </div>
  );
}
