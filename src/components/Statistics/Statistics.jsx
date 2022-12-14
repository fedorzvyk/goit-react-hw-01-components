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
          <li key={id} className={css.list__item}
           style={{
       backgroundColor: getRandomHexColor()
      }}>
            <span className={css.list__label}>{label}</span>
            <span className={css.list__percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor())

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
