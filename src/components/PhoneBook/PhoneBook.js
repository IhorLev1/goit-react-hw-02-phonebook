import s from './PhoneBook.module.css';

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

export default PhoneBook;
