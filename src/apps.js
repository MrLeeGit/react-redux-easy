import React from 'react';
import PropTypes from 'prop-types';


class Counter extends React.PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
  };
    /**
     * 渲染网页布局
     */
    render() {
      const { value, onIncreaseClick } = this.props
      return (
        <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>Increase</button>
        </div>
      )
    }
}

export default Counter;
