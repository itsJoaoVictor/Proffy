import styled from 'styled-components';

export const Item = styled.article`
  background: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  > p {
    padding: 0.2rem;
    font-size: 1.6rem;
    line-height: 2rem;
    margin-left: 2rem;
  }

  @media (min-width: 700px) {
    > p {
      padding: 0 3.2rem;
      margin-left: 0;
    }
  }
`;

export const TeacherItemHeader = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  div {
    margin-left: 2.4rem;
  }

  div strong {
    font: 700 2.4rem Archivo;
    display: block;
    color: var(--color-text-title);
  }

  div span {
    font: 700 1.8rem Archivo;
    display: block;
    margin-top: 0.4rem;
  }
`;

export const TeacherItemFooter = styled.footer`
  padding: 3.2rem 2rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p + strong {
    color: var(--color-primary);
    font-size: 1.6rem;
    display: block;
    margin-left: -6rem;
  }

  a {
    width: 20rem;
    height: 5.6rem;
    background: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.4rem Archivo;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    transition: background-color 0.2s;
  }

  button:hover {
    background: var(--color-secondary-dark);
  }

  @media (min-width: 700px) {
    padding: 3.2rem;

    p + strong {
      display: block;
      margin-left: -28rem;
    }

    button {
      width: 245px;
      font-size: 1.6rem;
      justify-content: center;
    }

    button img {
      margin-right: 1.6rem;
    }
  }
`;
