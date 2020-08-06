import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { PageHeader, TopBarContainer, HeaderContent } from './styles';

interface HeaderProps {
  title: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({ title, description, children }) => {
  return (
    <PageHeader>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Return" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </HeaderContent>
    </PageHeader>
  );
};

export default Header;
