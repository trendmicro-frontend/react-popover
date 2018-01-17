import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.styl';

class PopoverArrow extends PureComponent {
    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string
    };

    render() {
        const {
            prefixCls,
            className,
            ...props
        } = this.props;

        return (
            <div
                {...props}
                className={classNames(
                    `${prefixCls}-arrow`,
                    className,
                    styles.arrow
                )}
            />
        );
    }
}

export default PopoverArrow;
