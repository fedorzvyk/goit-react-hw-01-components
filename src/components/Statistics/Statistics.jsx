import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function Statistics({ title, stats }) {
  //   console.log(props);
  //   console.log(stats);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={css.list__item}>
            <span className={css.list__label}>{label}</span>
            <span className={css.list__percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
