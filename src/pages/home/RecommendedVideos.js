import React from "react";
import PropTypes from "prop-types";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import avatarMarvel from "../../images/avatar_marvel.jpg";
import whatIf from "../../images/what_if_marvel.jpg";
import avatarAlexLab from "../../images/avatar_alex_lab.jpg";
import alexLabIronMan from "../../images/iron_man_alex_lab.jpg";
import avatarModernDayJames from "../../images/avatar_modern_day_james.jpg";
import elementsOfCharacter from "../../images/elements_of_character.jpg";
import avatarRowan from "../../images/avatar_rowan.jpg";
import tenMinuteFatBurning from "../../images/10_min_fat_burning.jpg";
import avatarDennisIvy from "../../images/avatar_dennis_ivy.jpg";
import djangoSocialMediaApp from "../../images/django_social_media_app.jpg";
import avatarProko from "../../images/avatar_proko.jpg";
import howToKimJung from "../../images/how_to_draw_kim_jung_gi.jpg";

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos_videos">
        <VideoCard
          title="Space. Time. Reality. It's more than a linear path."
          views="7.3M Views"
          timestamp="3 days ago"
          channelImage={avatarMarvel}
          channel="Marvel"
          image={whatIf}
        />
        <VideoCard
          title="Building real Iron Man suit (Part#1: Conception & Protoypes. Reactor, Repulsor, Armor, Exosuit)"
          views="391K Views"
          timestamp="1 month ago"
          channelImage={avatarAlexLab}
          channel="ALEX LAB"
          image={alexLabIronMan}
        />
        <VideoCard
          title="ELEMENTS OF CHARACTER: Gesture, Forms, and Animation"
          views="827K Views"
          timestamp="10 months ago"
          channelImage={avatarModernDayJames}
          channel="Rowan Row"
          image={elementsOfCharacter}
        />
        <VideoCard
          title="10 MINUTE FAT BURNING MORNING ROUTINE | Do this every day | Rowan Row"
          views="24M Views"
          timestamp="10 months ago"
          channelImage={avatarRowan}
          channel="Rowan Row"
          image={tenMinuteFatBurning}
        />
        <VideoCard
          title="Open Sourcing A Django Social Media Website With My Viewers"
          views="11k Views"
          timestamp="4 days ago"
          channelImage={avatarDennisIvy}
          channel="Dennis Ivy"
          image={djangoSocialMediaApp}
        />
        <VideoCard
          title="How to Draw like Kim Jung Gi"
          views="1.9M Views"
          timestamp="1 year ago"
          channelImage={avatarProko}
          channel="Proko"
          image={howToKimJung}
        />
      </div>
    </div>
  );
};

RecommendedVideos.defaultProps = {};

RecommendedVideos.propTypes = {};

export default RecommendedVideos;
