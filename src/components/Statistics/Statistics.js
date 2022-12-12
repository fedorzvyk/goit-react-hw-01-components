import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  //   console.log(props);
  //   console.log(stats);
  return (
    <section className="statistics">
      <h2 className="title">{title.toUpperCase()}</h2>

      <ul className="list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="list__item">
            <span className="list__label">{label}</span>
            <span className="list__percentage">{percentage}%</span>
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
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
