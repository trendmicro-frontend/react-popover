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
                            <Section className="row-md-13">
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
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Body>
                                                <span>
                                                    <span>Popover Top</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            </Popover.Body>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            preferPlace="top-left"
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Body>
                                                <span>
                                                    <span>Popover Top-left</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            </Popover.Body>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            preferPlace="top-right"
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Body>
                                                <span>
                                                    <span>Popover Top-right</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            </Popover.Body>
                                        </Popover>
                                    </div>

                                    { /* <!-- popover right --> */ }
                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            preferPlace="right"
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Body>
                                                <span>
                                                    <span>Popover Right</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            </Popover.Body>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            preferPlace="right-top"
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Body>
                                                <span>
                                                    <span>Popover Right-top</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            </Popover.Body>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            preferPlace="right-bottom"
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Body>
                                                <span>
                                                    <span>Popover Right-bottom</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            </Popover.Body>
                                        </Popover>
                                    </div>

                                    { /* <!-- popover bottom --> */ }
                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            preferPlace="bottom"
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Body>
                                                <span>
                                                    <span>Popover Bottom</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            </Popover.Body>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            preferPlace="bottom-left"
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Body>
                                                <span>
                                                    <span>Popover Bottom-left</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            </Popover.Body>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            preferPlace="bottom-right"
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Body>
                                                <span>
                                                    <span>Popover Bottom-right</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            </Popover.Body>
                                        </Popover>
                                    </div>

                                    { /* <!-- popover left --> */ }
                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            preferPlace="left"
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Body>
                                                <span>
                                                    <span>Popover left</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            </Popover.Body>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            preferPlace="left-top"
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Body>
                                                <span>
                                                    <span>Popover left-top</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            </Popover.Body>
                                        </Popover>
                                    </div>

                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            preferPlace="left-bottom"
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Body>
                                                <span>
                                                    <span>Popover left-bottom</span><br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commod luctus, nisi erat porttitor ligula, eget lacinia.
                                                </span>
                                            </Popover.Body>
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
                                <div>
                                    { /* <!-- popover top --> */ }
                                    <div className={styles['popover-example-rwd']}>
                                        <Popover
                                            show={true}
                                            className={styles['popover-example']}
                                        >
                                            <Popover.Header>
                                                File Path (3)
                                            </Popover.Header>
                                            <Popover.Body>
                                                <ul>
                                                    <li>c:\adipisicing.txt</li>
                                                    <li>c:\ommod_luctus\nisiet\portor\ligu.txt</li>
                                                    <li>c:\eget\lacinia_odio_sem.txt </li>
                                                </ul>
                                            </Popover.Body>
                                        </Popover>
                                    </div>
                                </div>
                            </Section>
                        </div>
                        <div className="col-md-6">
                            <Section className="row-md-6">
                                <h2>Popovers with Control Elements</h2>
                                <p>Popover can contain other control elements such as links and buttons.</p>
                                <div>
                                    { /* <!-- popover bottom --> */ }
                                    <form>
                                        <span
                                            ref={node => {
                                                this.popoverTarget = node;
                                            }}
                                            className={classNames(
                                                styles.icon,
                                                styles['icon-info-sign']
                                            )}
                                            onClick={() => {
                                                this.actions.togglePopover('popover-example-ctrl', {
                                                    target: this.popoverTarget,
                                                    preferPlace: 'bottom-right'
                                                });
                                            }}
                                        />
                                    </form>
                                    {this.state.popover.name && this.state.popover.name === 'popover-example-ctrl' &&
                                    <Popover
                                        target={this.state.popover.params.target}
                                        preferPlace={this.state.popover.params.preferPlace}
                                        show={this.state.popover.params.show}
                                        className={styles['popover-example']}
                                    >
                                        <Popover.Header>Title</Popover.Header>
                                        <Popover.Body>
                                            <div>
                                                <div className="form-group">
                                                    <label htmlFor="">IP address:</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">Host name:</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </Popover.Body>
                                        <Popover.Footer>
                                            <Button
                                                btnStyle="primary"
                                                onClick={() => {
                                                    this.actions.closePopover();
                                                }}
                                            >
                                                Apply
                                            </Button>
                                        </Popover.Footer>
                                    </Popover>
                                    }
                                </div>
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
