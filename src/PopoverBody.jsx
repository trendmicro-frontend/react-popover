import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.styl';

class PopoverBody extends PureComponent {
    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        content: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.func
        ]).isRequired
    };

    render() {
        const {
            prefixCls,
            className,
            content,
            ...props
        } = this.props;

        return (
            <div
                {...props}
                className={classNames(
                    `${prefixCls}-arrow`,
                    className,
                    styles['popover-content']
                )}
            >
                {typeof content === 'function' ? content() : content}
            </div>
        );
    }
}

export default PopoverBody;
