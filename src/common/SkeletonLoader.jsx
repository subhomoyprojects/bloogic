import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PropTypes from "prop-types";
export default function SkeletonLoader({ count, height, width }) {
  return (
    <SkeletonTheme>
      <p>
        <Skeleton height={height} width={width} containerClassName="skeleton" count={count} />
      </p>
    </SkeletonTheme>
  );
}
SkeletonLoader.propTypes = {
  count: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number,
};
