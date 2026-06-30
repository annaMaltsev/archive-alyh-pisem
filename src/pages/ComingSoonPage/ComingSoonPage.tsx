import { useState } from "react";
import "./ComingSoonPage.css";

// Страница-заглушка «Coming Soon».
function ComingSoonPage() {
  // У каждого близнеца — своя «память» позы, чтобы по клику двигался ТОЛЬКО он.
  const [ellianAlt, setEllianAlt] = useState(false);
  const [noelAlt, setNoelAlt] = useState(false);

  const pokeEllian = () => {
    if (ellianAlt) return;
    setEllianAlt(true);
    setTimeout(() => setEllianAlt(false), 2000);
  };

  const pokeNoel = () => {
    if (noelAlt) return;
    setNoelAlt(true);
    setTimeout(() => setNoelAlt(false), 2000);
  };

  const ellianSrc = ellianAlt
    ? "/images/characters/ellian-2.png"
    : "/images/characters/ellian-1.png";
  const noelSrc = noelAlt
    ? "/images/characters/noel-2.png"
    : "/images/characters/noel-1.png";

  return (
    <main className="coming-page">
      {/* Декоративная золотая рамка + виньетка */}
      <div className="coming-frame" aria-hidden="true" />

      <div className="coming-content">
        <p className="coming-eyebrow">Archive of Scarlet Letters</p>
        <h1 className="coming-title">Coming Soon</h1>
        <div className="coming-divider" aria-hidden="true" />
        <p className="coming-sub">
          The archive is still being written. Its doors will open soon.
        </p>
      </div>

      {/* Близнецы Верн — по клику двигается только тот, на кого нажали */}
      <div className="coming-twins">
        <img
          className="coming-twin coming-twin--ellian"
          src={ellianSrc}
          alt=""
          onClick={pokeEllian}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <img
          className="coming-twin coming-twin--noel"
          src={noelSrc}
          alt=""
          onClick={pokeNoel}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>
    </main>
  );
}

export default ComingSoonPage;
