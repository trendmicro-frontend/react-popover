import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import Align from 'rc-align';
import placements from './placements';
import PopoverArrow from './PopoverArrow';
import styles from './index.styl';

class Popover extends PureComponent {
    static propTypes = {
        target: PropTypes.object,
        show: PropTypes.bool, // Specify whether to show the popover.
        placement: PropTypes.oneOf([
            'top',
            'top-left',
            'top-right',
            'right',
            'right-top',
            'right-bottom',
            'bottom',
            'bottom-left',
            'bottom-right',
            'left',
            'left-top',
            'left-bottom'
        ]),
        onAlign: PropTypes.func
    };
    static defaultProps = {
        target: null,
        show: false,
        placement: 'top'
    };

    constructor(props) {
        super(props);

        this.state = {
            placement: props.placement
        };
    }

    actions = {
        getTarget: () => {
            const { target } = this.props;
            return findDOMNode(target);
        },
        getAlign: () => {
            const { placement } = this.props;
            const align = placements[placement];
            // console.log('getPopupAlign', align, placement); // debug
            return align;
        },
        getPlacementFromAlign: (align) => {
            const jsonAlign = JSON.stringify({
                // offset: align.offset,
                points: align.points
            });
            for (const placement in placements) {
                if (Object.prototype.hasOwnProperty.call(placements, placement)) {
                    const buildAlign = placements[placement];
                    const jsonPlacement = JSON.stringify({
                        // offset: buildAlign.offset,
                        points: buildAlign.points
                    });

                    // http://www.mattzeunert.com/2016/01/28/javascript-deep-equal.html
                    if (jsonPlacement === jsonAlign) {
                        return placement;
                    }
                }
            }

            // Should not happened
            return this.state.placement;
        },
        onAlign: (source, align) => {
            const placement = this.actions.getPlacementFromAlign(align);
            // console.log('onAlign', align, placement); // debug

            // update className
            this.setState((prevState, props) => {
                if (placement !== prevState.placement) {
                    return {
                        placement: placement
                    };
                }

                return {};
            });

            if (this.props.onAlign) {
                this.props.onAlign(source, align, placement);
            }
        }
    };

    render() {
        const {
            className,
            children,
            target,
            show,
            ...props
        } = this.props;
        const { placement } = this.state;

        // Remove props do not need to set into div
        delete props.placement;

        if (!target) {
            return (
                <div
                    {...props}
                    className={classNames(
                        className,
                        styles.popover,
                        { [styles.show]: show },
                        styles[placement] || ''
                    )}
                >
                    <PopoverArrow className={styles[placement]} />
                    {children}
                </div>
            );
        }

        const align = this.actions.getAlign();
        return (
            <Align
                align={align}
                target={this.actions.getTarget}
                onAlign={this.actions.onAlign}
                monitorWindowResize={true}
            >
                <div
                    {...props}
                    className={classNames(
                        className,
                        styles.popover,
                        { [styles.show]: show },
                        styles[placement] || ''
                    )}
                >
                    <PopoverArrow className={styles[placement]} />
                    {children}
                </div>
            </Align>
        );
    }
}

export default Popover;
