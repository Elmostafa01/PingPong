import React, { useState } from "react";
import PlayVsBot from "../components/PlayVsBot";
import PlayVsPlayer from "../components/PlayVsPlayer";
import GameChoice from "./GameChoice";
import PingPongGame from "../components/PingPongGame";

const GameMode: React.FC = () => {
  const [showGameChoice, setShowGameChoice] = useState<boolean>(false);
  const [showPingPongGame, setShowPingPongGame] = useState<boolean>(false);

  const handlePlayerGame = () => {
    setShowGameChoice(true);
  };

  const handlePingPongGame = () => {
    setShowPingPongGame(true);
  };

  const handleCloseGameChoice = () => {
    setShowGameChoice(false);
    setShowPingPongGame(false);
  };

  return (
    <div className="game-modes">
      {!showGameChoice && !showPingPongGame ? (
        <>
          <PlayVsBot gameBot={false} handlePingPongGame={handlePingPongGame} />
          <PlayVsPlayer gamePlayer={false} handlePlayerGame={handlePlayerGame} />
        </>
      ) : showGameChoice ? (
        <GameChoice gameName="Player vs Player" handleClose={handleCloseGameChoice} />
      ) : (
        <PingPongGame handleClose={handleCloseGameChoice} />
      )}
    </div>
  );
};

export default GameMode;

