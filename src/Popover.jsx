import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Trigger from 'rc-trigger';
import PopoverArrow from './PopoverArrow';
import PopoverHeader from './PopoverHeader';
import PopoverBody from './PopoverBody';
import PopoverFooter from './PopoverFooter';
import { placements } from './placements';
import styles from './index.styl';

class Popover extends PureComponent {
    static propTypes = {
        placement: PropTypes.oneOf([
            'top',
            'topLeft',
            'topRight',
            'right',
            'rightTop',
            'rightBottom',
            'bottom',
            'bottomLeft',
            'bottomRight',
            'left',
            'leftTop',
            'leftBottom'
        ]),
        enterDelay: PropTypes.number, // The delay length (in ms) before popover appear.
        leaveDelay: PropTypes.number, // The delay length (in ms) between the mouse leaving the target and popover disappearance.
        // contents
        popoverClassName: PropTypes.string, // The className apply to popover itself. You can use it to override style portal if need
        popoverStyle: PropTypes.object, // The style apply to popover itself. You can use it to override style portal if need
        popoverHeader: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.func
        ]),
        popoverBody: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.func
        ]).isRequired,
        popoverFooter: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.func
        ])
    };
    static defaultProps = {
        placement: 'top',
        enterDelay: 0, // milliseconds
        leaveDelay: 100 // milliseconds
    };

    prefixCls = 'tm-popover'; // Reset prefix class name

    getPopupElement = () => {
        const { popoverHeader, popoverBody, popoverFooter } = this.props;
        return ([
            <PopoverArrow prefixCls={this.prefixCls} key="arrow" />,
            <PopoverHeader prefixCls={this.prefixCls} content={popoverHeader} key="header" />,
            <PopoverBody prefixCls={this.prefixCls} content={popoverBody} key="content" />,
            <PopoverFooter prefixCls={this.prefixCls} content={popoverFooter} key="footer" />
        ]);
    }

    getPopupDomNode() {
        return this.trigger.getPopupDomNode();
    }

    saveTrigger = (node) => {
        this.trigger = node;
    }

    render() {
        const {
            children,
            placement,
            enterDelay,
            leaveDelay,
            popoverClassName,
            popoverStyle,
            show,
            ...props
        } = this.props;

        // Remove props do not need to set into div
        delete props.content;
        if (typeof show !== 'undefined') {
            props.popupVisible = show;
        }

        const triggerActions = ['click'];
        const mouseEnterDelay = enterDelay / 1000; // To seconds
        const mouseLeaveDelay = leaveDelay / 1000; // To seconds

        // adjust placements
        const placementKey = placements[placement] ? placement : 'top';
        const placementSettings = placements[placementKey];
        const temp = { [placementKey]: placementSettings };
        const copy = Object.assign({}, placements);
        delete copy[placementKey];
        const adjustPlacements = Object.assign(temp, copy);

        return (
            <Trigger
                ref={this.saveTrigger}
                prefixCls={this.prefixCls}
                action={triggerActions}
                builtinPlacements={adjustPlacements}
                // popupVisible={show}
                popupPlacement={placement}
                popup={this.getPopupElement}
                popupClassName={classNames(
                    styles.popover,
                    popoverClassName
                )}
                popupStyle={popoverStyle}
                mouseEnterDelay={mouseEnterDelay}
                mouseLeaveDelay={mouseLeaveDelay}
                {...props}
            >
                {children}
            </Trigger>
        );
    }
}

export default Popover;
