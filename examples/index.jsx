/* eslint jsx-a11y/no-static-element-interactions: 0 */
import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import { Button } from '@trendmicro/react-buttons';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Navbar from './Navbar';
import Section from './Section';
import Popover from '../src';
import styles from './index.styl';

class App extends React.Component {
    state = {
        popover: {
            name: '',
            params: {}
        }
    };

    actions = {
        togglePopover: (name = '', params = {}) => {
            const { show = null } = params;
            this.setState((prevState, props) => {
                const { popover } = prevState;
                return {
                    ...prevState,
                    popover: {
                        name: name,
                        params: {
                            ...popover.params,
                            ...params,
                            show: (show === null) ? !popover.params.show : !!show
                        }
                    }
                };
            });
        },
        openPopover: (name = '', params = {}) => {
            this.setState({
                popover: {
                    name: name,
                    params: params
                }
            });
        },
        closePopover: () => {
            this.setState({
                popover: {
                    name: '',
                    params: {}
                }
            });
        }
    };

    render() {
        const name = 'React Popover';
        const url = 'https://github.com/trendmicro-frontend/react-popover';

        return (
            <div>
                <Navbar name={name} url={url} />
                <div className="container-fluid" style={{ padding: '20px 20px 0' }}>
                    <div className="row">
                        <div className="col-md-13">
                            <Section className="row-md-16">
                                <h2>Popovers</h2>
                                <p>Popovers display additional information or functionality related to an object without leaving the page.</p>
                                <ul className="description">
                                    <li>Popovers can contain various UI elements, such as links, images, or controls.</li>
                                    <li>The content can be scrollable if it exceeds the specified height of the pop-over box.</li>
                                    <li>Popovers should be positioned based on the screen space available.</li>
                                    <li>Popovers should have directional arrows pointing to the related object.</li>
                                </ul>
                                <div className={styles.examples}>
                                    { /* <!-- popover top --> */ }
                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            popoverBody={
                                                <span>
                                                    <span>Popover Top</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            }
                                        >
                                            <span style={{ position: 'absolute', bottom: 10, right: '50%' }}><i className="fa fa-info-circle" /></span>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            placement="topLeft"
                                            popoverBody={
                                                <span>
                                                    <span>Popover Top-left</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            }
                                        >
                                            <span style={{ position: 'absolute', bottom: 10, right: 45 }}><i className="fa fa-info-circle" /></span>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            placement="topRight"
                                            popoverBody={
                                                <span>
                                                    <span>Popover Top-right</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            }
                                        >
                                            <span style={{ position: 'absolute', bottom: 10, left: 45 }}><i className="fa fa-info-circle" /></span>
                                        </Popover>
                                    </div>

                                    { /* <!-- popover right --> */ }
                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            placement="right"
                                            popoverBody={
                                                <span>
                                                    <span>Popover Right</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            }
                                        >
                                            <span style={{ position: 'absolute', bottom: '50%', left: 10 }}><i className="fa fa-info-circle" /></span>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            placement="rightTop"
                                            popoverBody={
                                                <span>
                                                    <span>Popover Right-top</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            }
                                        >
                                            <span style={{ position: 'absolute', bottom: 45, left: 10 }}><i className="fa fa-info-circle" /></span>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            placement="rightBottom"
                                            popoverBody={
                                                <span>
                                                    <span>Popover Right-bottom</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            }
                                        >
                                            <span style={{ position: 'absolute', top: 45, left: 10 }}><i className="fa fa-info-circle" /></span>
                                        </Popover>
                                    </div>

                                    { /* <!-- popover bottom --> */ }
                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            placement="bottom"
                                            popoverBody={
                                                <span>
                                                    <span>Popover Bottom</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            }
                                        >
                                            <span style={{ position: 'absolute', top: 10, right: '50%' }}><i className="fa fa-info-circle" /></span>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            placement="bottomLeft"
                                            popoverBody={
                                                <span>
                                                    <span>Popover Bottom-left</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            }
                                        >
                                            <span style={{ position: 'absolute', top: 10, right: 45 }}><i className="fa fa-info-circle" /></span>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            placement="bottomRight"
                                            popoverBody={
                                                <span>
                                                    <span>Popover Bottom-right</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            }
                                        >
                                            <span style={{ position: 'absolute', top: 10, left: 45 }}><i className="fa fa-info-circle" /></span>
                                        </Popover>
                                    </div>

                                    { /* <!-- popover left --> */ }
                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            placement="left"
                                            popoverBody={
                                                <span>
                                                    <span>Popover left</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            }
                                        >
                                            <span style={{ position: 'absolute', top: '50%', right: 10 }}><i className="fa fa-info-circle" /></span>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            placement="leftTop"
                                            popoverBody={
                                                <span>
                                                    <span>Popover left-top</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            }
                                        >
                                            <span style={{ position: 'absolute', bottom: 35, right: 10 }}><i className="fa fa-info-circle" /></span>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            placement="leftBottom"
                                            popoverBody={
                                                <span>
                                                    <span>Popover left-bottom</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            }
                                        >
                                            <span style={{ position: 'absolute', top: 45, right: 10 }}><i className="fa fa-info-circle" /></span>
                                        </Popover>
                                    </div>
                                </div>
                            </Section>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Section className="row-md-6">
                                <h2>Popovers with Headers</h2>
                                <p>A popover can contain a header.</p>
                                <div className={styles['popover-example-rwd']}>
                                    <Popover
                                        show={true}
                                        placement="top"
                                        popoverHeader={<span>File Path (3)</span>}
                                        popoverBody={
                                            <ul>
                                                <li>c:\adipisicing.txt</li>
                                                <li>c:\ommod_luctus\nisiet\portor\ligu.txt</li>
                                                <li>c:\eget\lacinia_odio_sem.txt </li>
                                            </ul>
                                        }
                                    >
                                        <span style={{ position: 'absolute', bottom: 0, right: '50%' }}><i className="fa fa-info-circle" /></span>
                                    </Popover>
                                </div>
                            </Section>
                        </div>
                        <div className="col-md-6">
                            <Section className="row-md-6">
                                <h2>Popovers with Control Elements</h2>
                                <p>Popover can contain other control elements such as links and buttons. Click icon below to get an example.</p>
                                <Popover
                                    placement="bottom"
                                    popoverHeader={
                                        <span>Title</span>
                                    }
                                    popoverBody={
                                        <div>
                                            <div className="form-group">
                                                <label htmlFor="">IP address:</label>
                                                <input className="form-control" type="text" defaultValue="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Host name:</label>
                                                <input className="form-control" type="text" defaultValue="" />
                                            </div>
                                        </div>
                                    }
                                    popoverFooter={
                                        <Button
                                            btnStyle="primary"
                                            onClick={() => {
                                                this.actions.closePopover();
                                            }}
                                        >
                                            Apply
                                        </Button>
                                    }
                                >
                                    <span
                                        className={classNames(
                                            styles.icon,
                                            styles['icon-info-sign']
                                        )}
                                    />
                                </Popover>
                            </Section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
