import classNames from 'classnames';
import React, { PureComponent } from 'react';
import styles from './index.styl';

class PopoverBody extends PureComponent {
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
                    styles['popover-content']
                )}
            />
        );
    }
}

export default PopoverBody;
