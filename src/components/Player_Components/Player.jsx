import React from "react";
import "./player.css";
import Davido from "../../../public/davido.jpeg";
import {
  BiFullscreen,
  BiMicrophone,
  BiShuffle,
  BiSpeaker,
  BiVolumeFull,
} from "react-icons/bi";
import { GiPreviousButton } from "react-icons/gi";
import { GiPlayButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";
import { TfiLoop } from "react-icons/tfi";
import { MdQueueMusic } from "react-icons/md";
import { CgMiniPlayer } from "react-icons/cg";

const Player = () => {
  return (
    <div className="player_container">
      <div className="player_frame">
        <div className="song_info">
          <img src={Davido} alt="" />
          <div className="song_info_p">
            <p>Davido</p>
            <p>Unavailable</p>
          </div>
        </div>

        <div className="song_operator">
          <div className="song_controls">
            <BiShuffle className="icon-xn controls" />
            <GiPreviousButton className="icon-xn controls" />
            <GiPlayButton className="icon-xn controls" />
            <GiNextButton className="icon-xn controls" />
            <TfiLoop className="icon-xn controls" />
          </div>
          <div className="song_bar_container">
            <p className="song_timer_start">1:06</p>
            <div className="song_bar">
              <hr />
            </div>
            <p className="song_timer_end">3:26</p>
          </div>
        </div>

        <div className="extra_settings">
          <BiMicrophone className="icon-xn" />
          <MdQueueMusic className="icon-xn" />
          <BiSpeaker className="icon-xn" />
          <BiVolumeFull className="icon-xn" />
          <div className="vol_bar">

          </div>
          <CgMiniPlayer className="icon-xn" />
          <BiFullscreen className="icon-xn" />
        </div>
      </div>
    </div>
  );
};

export default Player;
