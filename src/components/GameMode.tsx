import React, { useState } from "react";
import PlayVsBot from "../components/PlayVsBot";
import PlayVsPlayer from "../components/PlayVsPlayer";
import GameChoice from "./GameChoice";

const GameMode: React.FC = () => {
  const [showGameChoice, setShowGameChoice] = useState<boolean>(false);

  const handlePlayerGame = () => {
    setShowGameChoice(true);
  };

  const handleCloseGameChoice = () => {
    setShowGameChoice(false);
  };

  return (
    <div className="game-modes">
      {!showGameChoice ? (
        <>
          <PlayVsBot gameBot={false} handleBotGame={handlePlayerGame} />
          <PlayVsPlayer gamePlayer={false} handlePlayerGame={handlePlayerGame} />
        </>
      ) : (
        <GameChoice gameName="Player vs Player" handleClose={handleCloseGameChoice} />
      )}
    </div>
  );
};

export default GameMode;
