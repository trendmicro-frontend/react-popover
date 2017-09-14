import classNames from 'classnames';
import React, { PureComponent } from 'react';
import styles from './index.styl';

class PopoverFooter extends PureComponent {
    render() {
        const {
            style = {},
            className,
            ...props
        } = this.props;

        return (
            <div
                {...props}
                style={style}
                className={classNames(
                    className,
                    styles['popover-footer']
                )}
            />
        );
    }
}

export default PopoverFooter;
