import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Item, TeacherItemHeader, TeacherItemFooter } from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <Item>
      <TeacherItemHeader>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </TeacherItemHeader>

      <p>{teacher.bio}</p>

      <TeacherItemFooter>
        <p>Price/Hour</p>
        <strong>
{teacher.cost}
{' '}
 </strong>
        <a href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt="Whatsapp" />
          Get in Touch
        </a>
      </TeacherItemFooter>
    </Item>
  );
};

export default TeacherItem;
