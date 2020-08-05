import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Item, TeacherItemHeader, TeacherItemFooter } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Item>
      <TeacherItemHeader>
        <img
          src="https://avatars0.githubusercontent.com/u/63375574?s=460&u=8ac3cf30639b5a02182741ae5b59a2aad8a1de3f&v=4"
          alt="João Victor"
        />
        <div>
          <strong>João Victor</strong>
          <span>Programação</span>
        </div>
      </TeacherItemHeader>

      <p>
        Há mais de 100 anos na área.
        <br />
        <br />
        Já passou por poucas e boas!
      </p>

      <TeacherItemFooter>
        <p>Price/Hour</p>
        <strong>10$</strong>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Get in Touch
        </button>
      </TeacherItemFooter>
    </Item>
  );
};

export default TeacherItem;
