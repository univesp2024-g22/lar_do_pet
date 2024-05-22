/* eslint-disable react/prop-types */
import * as S from './styles';

export const TutorContact = ({ userFirstName, userEmail, userPhone }) => {
  return (
    <S.TutorContacts>
      <span>Tutor: {' ' + userFirstName}</span>
      <span>E-mail: {' ' + userEmail}</span>
      <span>Telefone: {' ' + userPhone}</span>
    </S.TutorContacts>
  );
};
