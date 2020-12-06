import s from '../Form/Form.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={s.input}>
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
      />
    </label>
  );
};

export default Filter;
