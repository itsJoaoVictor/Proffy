import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import { PageTeacherList, FormSearchTeachers, Main } from './styles';

import Header from '../../components/Header';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    console.log(response.data);

    setTeachers(response.data);
  }

  return (
    <PageTeacherList>
      <Header title="These are the available Proffys:">
        <FormSearchTeachers onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: 'Programação', label: 'Programação' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Ciências de Dados', label: 'Ciências de Dados' },
              { value: 'Machine Learning', label: 'Machine Learning' },
              { value: 'História', label: 'História' },
            ]}
          />

          <Select
            name="week_day"
            label="Week Day"
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            type="time"
            name="Time"
            label="Hour"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Search</button>
        </FormSearchTeachers>
      </Header>
      <Main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </Main>
    </PageTeacherList>
  );
}

export default TeacherList;
