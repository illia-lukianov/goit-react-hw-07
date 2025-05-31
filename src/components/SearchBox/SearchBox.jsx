import { useDispatch } from 'react-redux';
import styles from './SearchBox.module.css';
import { changeFilterValue } from '../../redux/filtersSlice';
import { useDebouncedCallback } from 'use-debounce';
import { useState } from 'react';

export default function SearchBox() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setValue(value);
    debouncedChange(value);
  };

  const debouncedChange = useDebouncedCallback((value) => {
    dispatch(changeFilterValue(value));
  }, 500);

  return (
    <>
      <p className={styles.searchBoxDescr}>Find contacts by name</p>
      <input
        className={styles.inputSearchBox}
        type="text"
        onChange={(event) => handleChange(event.target.value)}
        value={value}
      />
    </>
  );
}
