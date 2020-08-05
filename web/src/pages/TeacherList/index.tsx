import React from 'react';

import Header from '../../components/Header';

import { PageTeacherList, FormSearchTeachers, Main } from './styles';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
  return (
    <PageTeacherList>
      <Header title="These are the available Proffys:">
        <FormSearchTeachers>
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Week Day</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Time</label>
            <input type="text" id="time" />
          </div>
        </FormSearchTeachers>
      </Header>
      <Main>
        <TeacherItem />
        <TeacherItem />
      </Main>
    </PageTeacherList>
  );
}

export default TeacherList;
