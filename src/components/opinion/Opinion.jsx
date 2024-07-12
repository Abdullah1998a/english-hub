import "./opinion.css";

export function Opinion({ POV, show }) {
  const { name, avatar, rank, opinion } = POV;
  return (
    <div className={`opinion ${show && "active"}`}>
      <div className="member">
        <div className="avatar">
          <img src={avatar} alt={`avatar of ${name}`} width={50} height={50} />
          <div>
          <h3>{name}</h3>
          <p>{rank}</p>
          </div>
        </div>
        <span>11 July, 2024</span>
      </div>
      <p>{opinion}</p>
    </div>
  );
}
