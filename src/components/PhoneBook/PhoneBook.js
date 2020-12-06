import s from './PhoneBook.module.css';
import propTypes from 'prop-types';

const PhoneBookItem = ({ id, name, number, onRemove }) => {
  return (
    <li>
      {name}:{number} <button onClick={() => onRemove(id)}>delete</button>
    </li>
  );
};

const PhoneBook = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.phoneList}>
      {contacts.map(contact => (
        <PhoneBookItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

PhoneBookItem.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  number: propTypes.number,
  onRemove: propTypes.func,
};

PhoneBook.propTypes = {
  contacts: propTypes.arrayOf(propTypes.string),
  onRemove: propTypes.func,
};

export default PhoneBook;
