import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from '../Statistics/Statistics.styled';

export function Statistics({ title = 'Upload stats', stats }) {
  function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: randomHexColor() }}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
}
Statistics.prototype = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  stats: PropTypes.shape.isRequired,
};
