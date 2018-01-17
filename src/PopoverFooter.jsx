import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.styl';

class PopoverFooter extends PureComponent {
    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        content: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.func
        ])
    };

    render() {
        const {
            prefixCls,
            className,
            content,
            ...props
        } = this.props;

        if (!content) {
            return null;
        }

        return (
            <div
                {...props}
                className={classNames(
                    `${prefixCls}-arrow`,
                    className,
                    styles['popover-footer']
                )}
            >
                {typeof content === 'function' ? content() : content}
            </div>
        );
    }
}

export default PopoverFooter;
