import React from "react";
import playerVsBot from "../images/playerVsBot.svg";

interface ChildProps {
  gameBot: boolean;
  handlePingPongGame: () => void;
}

const PlayVsBot: React.FC<ChildProps> = ({ gameBot, handlePingPongGame }) => {
  return (
    <div className="vsBot">
      <button className="switcher" onClick={handlePingPongGame}>
        <img src={playerVsBot} alt="Play vs Bot" />
        <p>Play VS Bot</p>
      </button>
    </div>
  );
};

export default PlayVsBot;

