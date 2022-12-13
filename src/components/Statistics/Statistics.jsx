import PropTypes from 'prop-types';
import CSS from './Statistics.module.css'

export default function Statistics({ title, stats }) {
  //   console.log(props);
  //   console.log(stats);
  return (
    <section className={CSS.statistics}>
      {title && <h2 className={CSS.title}>{title}</h2>}

      <ul className={CSS.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={CSS.list__item}>
            <span className={CSS.list__label}>{label}</span>
            <span className={CSS.list__percentage}>{percentage}%</span>
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
