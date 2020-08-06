import styled from 'styled-components';

export const PageTeacherList = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const FormSearchTeachers = styled.form`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    transition: background-color 0.2s;

    margin-top: 3.2rem;
  }

  button:hover {
    background: var(--color-secondary-dark);
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 16px;
    position: absolute;
    bottom: -28px;

    label {
      width: 100%;
    }
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
