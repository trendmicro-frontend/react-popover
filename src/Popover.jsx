import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PopoverArrow from './PopoverArrow';
// import PopoverHeader from './PopoverHeader';
import styles from './index.styl';

const arrowWidth = 18;
const arrowShift = 16;

class Popover extends PureComponent {
    static propTypes = {
        target: PropTypes.object,
        // Specify whether to show the popover.
        show: PropTypes.bool,
        spacing: PropTypes.number, // The spacing between target and arrow
        top: PropTypes.number,
        left: PropTypes.number,
        preferPlace: PropTypes.oneOf([
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
        ])
    };
    static defaultProps = {
        target: null,
        show: false,
        spacing: 0, // in px
        top: 0,
        left: 0,
        preferPlace: 'top'
    };

    constructor(props) {
        super(props);

        this.state = {
            target: props.target,
            isShow: !!props.show,
            place: props.preferPlace,
            offset: {
                top: props.top,
                left: props.left
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        this.actions.toggle(nextProps.show);
    }

    componentDidMount() {
        this.actions.adjustPlace();
    }

    componentDidUpdate(prevProps, prevState) {
        this.actions.adjustPlace();
    }

    actions = {
        toggle: (toState = null) => {
            this.setState((prevState, props) => {
                return {
                    ...prevState,
                    isShow: (toState === null) ? !prevState.isShow : !!toState
                };
            });
        },
        adjustPlace: () => {
            const { place, offset } = this.state;
            const {
                target,
                preferPlace: newPlace,
                spacing
            } = this.props;
            const popover = this.popover;

            console.log('orz', place, newPlace, offset, target);

            if (!target) {
                return false;
            }

            let newOffset = {
                top: 0,
                left: 0
            };

            if (newPlace === 'top') {
                newOffset = {
                    top: Math.floor(target.offsetTop - popover.offsetHeight - spacing),
                    left: Math.floor(target.offsetLeft + (target.offsetWidth / 2) - (popover.offsetWidth / 2))
                };
            }

            if (newPlace === 'top-left') {
                newOffset = {
                    top: Math.floor(target.offsetTop - popover.offsetHeight - spacing),
                    left: Math.floor(target.offsetLeft + (target.offsetWidth / 2) - popover.offsetWidth + arrowShift + (arrowWidth / 2))
                };
            }

            if (newPlace === 'top-right') {
                newOffset = {
                    top: Math.floor(target.offsetTop - popover.offsetHeight - spacing),
                    left: Math.floor(target.offsetLeft + (target.offsetWidth / 2) - arrowShift - (arrowWidth / 2))
                };
            }

            if (newPlace === 'right') {
                newOffset = {
                    top: Math.floor(target.offsetTop + (target.offsetHeight / 2) - (popover.offsetHeight / 2)),
                    left: Math.floor(target.offsetLeft + target.offsetWidth + spacing)
                };
            }

            if (newPlace === 'right-top') {
                newOffset = {
                    top: Math.floor(target.offsetTop + (target.offsetHeight / 2) - popover.offsetHeight + arrowShift + (arrowWidth / 2)),
                    left: Math.floor(target.offsetLeft + target.offsetWidth + spacing)
                };
            }

            if (newPlace === 'right-bottom') {
                newOffset = {
                    top: Math.floor(target.offsetTop + (target.offsetHeight / 2) - arrowShift - (arrowWidth / 2)),
                    left: Math.floor(target.offsetLeft + target.offsetWidth + spacing)
                };
            }

            if (newPlace === 'bottom') {
                newOffset = {
                    top: Math.floor(target.offsetTop + target.offsetHeight + spacing),
                    left: Math.floor(target.offsetLeft + (target.offsetWidth / 2) - (popover.offsetWidth / 2))
                };
            }

            if (newPlace === 'bottom-left') {
                newOffset = {
                    top: Math.floor(target.offsetTop + target.offsetHeight + spacing),
                    left: Math.floor(target.offsetLeft + (target.offsetWidth / 2) - popover.offsetWidth + arrowShift + (arrowWidth / 2))
                };
            }

            if (newPlace === 'bottom-right') {
                newOffset = {
                    top: Math.floor(target.offsetTop + target.offsetHeight + spacing),
                    left: Math.floor(target.offsetLeft + (target.offsetWidth / 2) - arrowShift - (arrowWidth / 2))
                };
            }

            if (newPlace === 'left') {
                newOffset = {
                    top: Math.floor(target.offsetTop + (target.offsetHeight / 2) - (popover.offsetHeight / 2)),
                    left: Math.floor(target.offsetLeft - popover.offsetWidth - spacing)
                };
            }

            if (newPlace === 'left-top') {
                newOffset = {
                    top: Math.floor(target.offsetTop + (target.offsetHeight / 2) - popover.offsetHeight + arrowShift + (arrowWidth / 2)),
                    left: Math.floor(target.offsetLeft - popover.offsetWidth - spacing)
                };
            }

            if (newPlace === 'left-bottom') {
                newOffset = {
                    top: Math.floor(target.offsetTop + (target.offsetHeight / 2) - arrowShift - (arrowWidth / 2)),
                    left: Math.floor(target.offsetLeft - popover.offsetWidth - spacing)
                };
            }

            // this.actions.isElementInView(popover, true)
            if (place !== newPlace || offset.top !== newOffset.top || offset.left !== newOffset.left) {
                this.setState((prevState, props) => {
                    return {
                        ...prevState,
                        place: newPlace,
                        offset: newOffset
                    };
                });

                return true;
            }

            return false;
        },
        // https://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
        isElementInView: (element, fullyInView) => {
            const pageTop = document.body.scrollTop;
            const pageBottom = pageTop + document.body.offsetHeight;
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;

            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    };

    render() {
        const {
            className,
            children,
            target,
            show,
            spacing,
            top,
            left,
            preferPlace,
            ...props
        } = this.props;
        const { isShow, place, offset } = this.state;

        console.log(
            target,
            show,
            spacing,
            top,
            left,
            preferPlace
        );

        return (
            <div
                {...props}
                ref={node => {
                    this.popover = node;
                }}
                style={{
                    top: offset.top,
                    left: offset.left
                }}
                className={classNames(
                    className,
                    styles.popover,
                    { [styles.show]: isShow },
                    styles[place] || ''
                )}
            >
                <PopoverArrow className={styles[place]} />
                {children}
            </div>
        );
    }
}

export default Popover;
