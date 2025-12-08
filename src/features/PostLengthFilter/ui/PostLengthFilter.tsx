import { type ChangeEventHandler } from 'react';
import styles from './PostLengthFilter.module.css';
import type { LengthFilterType } from '../model/types';
import { POST_LENGTH_FILTER_OPTIONS } from '../model/consts';

interface Props {
  value: LengthFilterType;
  onChange: (value: LengthFilterType) => void;
}

const PostLengthFilter = ({ value, onChange }: Props) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (evt) => {
    onChange(evt.target.value as LengthFilterType);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="post-length-filter">
        Фильтр по длине заголовка:
      </label>

      <select
        id="post-length-filter"
        className={styles.select}
        value={value}
        onChange={handleChange}
      >
        {POST_LENGTH_FILTER_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PostLengthFilter;
