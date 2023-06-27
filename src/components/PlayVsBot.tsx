import React from "react";
import playerVsBot from "../images/playerVsBot.svg";

interface ChildProps {
  gameBot: boolean;
  handleBotGame: () => void; 
}

const PlayVsBot: React.FC<ChildProps> = ({ gameBot, handleBotGame }) => {
  return (
    <div className="vsBot">
      <button className="switcher" onClick={handleBotGame}>
        <img src={playerVsBot} alt="Play vs Bot" />
        <p >Play VS Bot</p>
      </button>
    </div>
  );
};

export default PlayVsBot;