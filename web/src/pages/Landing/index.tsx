import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  StudyButton,
  GiveClassesButton,
  TotalConnections,
} from './styles';

function Landing() {
  return (
    <PageLanding>
      <PageLandingContent className="container">
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Your online study platform.</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt="Study plataform" />

        <ButtonsContainer>
          <StudyButton as={Link} to="/study">
            <img src={studyIcon} alt="Study" />
            Study
          </StudyButton>

          <GiveClassesButton as={Link} to="/give-classes">
            <img src={giveClassesIcon} alt="Study" />
            Give Classes
          </GiveClassesButton>
        </ButtonsContainer>

        <TotalConnections>
          Total of 200 connections already made.
          <img src={purpleHeartIcon} alt="Purple Heart" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
}

export default Landing;
