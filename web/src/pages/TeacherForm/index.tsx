import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import { PageTeacherForm, Main, Footer, ScheduleItem } from './styles';

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return {
          ...scheduleItem,
          [field]: value,
        };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Registration successful!');

        history.push('/');
      })
      .catch(() => {
        alert('Registration error.');
      });
  }

  return (
    <PageTeacherForm>
      <Header
        title="How amazing that you want to teach!"
        description="The first step is to fill out this registration form."
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Your data</legend>

            <Input
              name="name"
              label="Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />

            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />

            <Textarea
              name="bio"
              label="Biography"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>About the class</legend>

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

            <Input
              name="cost"
              label="Cost of your hour per class"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Available times
              <button type="button" onClick={addNewScheduleItem}>
                + New Time
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <ScheduleItem key={scheduleItem.week_day}>
                  <Select
                    name="week_day"
                    label="Week Day"
                    value={scheduleItem.week_day}
                    onChange={(e) => {
                      setScheduleItemValue(index, 'week_day', e.target.value);
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
                    name="from"
                    label="From"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, 'from', e.target.value)}
                  />

                  <Input
                    name="to"
                    label="To"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, 'to', e.target.value)
                    }
                  />
                </ScheduleItem>
              );
            })}
          </fieldset>

          <Footer>
            <p>
              <img src={warningIcon} alt="Important warning" />
              Important!
              <br />
              Fill in all the details!
            </p>
            <button type="submit">Save Registration</button>
          </Footer>
        </form>
      </Main>
    </PageTeacherForm>
  );
}

export default TeacherForm;
