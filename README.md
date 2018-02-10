
# react-popover [![build status](https://travis-ci.org/trendmicro-frontend/react-popover.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-popover) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-popover/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-popover?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-popover.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-popover/)

React Popover

Demo: https://trendmicro-frontend.github.io/react-popover

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-popover](https://github.com/trendmicro-frontend/react-popover):

  ```
  npm install --save react @trendmicro/react-popover
  ```

2. At this point you can import `@trendmicro/react-popover` and its styles in your application as follows:

  ```js
  import Popover from '@trendmicro/react-popover';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-popover/dist/react-popover.css';
  ```

## Usage

```js
// Basic
<Popover show={true}>
    <Popover.Body>
        <span>Popover Top</span>
    </Popover.Body>
</Popover>

// With Header
<Popover show={true}>
    <Popover.Header>Title</Popover.Header>
    <Popover.Body>
        <span>Popover Top</span>
    </Popover.Body>
</Popover>

// With footer
<Popover show={true}>
    <Popover.Body>
        <span>Popover Top</span>
    </Popover.Body>
    <Popover.Footer>Footer</Popover.Footer>
</Popover>

// Set prefer place
<Popover
    show={true}
    placement="top-left"
>
    <Popover.Body>
        <span>Popover Top-left</span>
    </Popover.Body>
</Popover>

// Set target
<Popover
    show={true}
    target={document.querySelector(".example-target")}
>
    <Popover.Body>
        <span>Popover Top</span>
    </Popover.Body>
</Popover>
```


## API

### Properties

<table>
    <thead>
        <tr>
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Default</th>
            <th align="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>show</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Specify whether to show the popover.</td>
        </tr>
        <tr>
            <td>placement</td>
            <td>String</td>
            <td>'top'</td>
            <td>
                One of
                <ul>
                    <li>'top'</li>
                    <li>'top-left'</li>
                    <li>'top-right'</li>
                    <li>'right'</li>
                    <li>'right-top'</li>
                    <li>'right-bottom'</li>
                    <li>'bottom'</li>
                    <li>'bottom-left'</li>
                    <li>'bottom-right'</li>
                    <li>'left'</li>
                    <li>'left-top'</li>
                    <li>'left-bottom'</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>target</td>
            <td>Object</td>
            <td>null</td>
            <td>Target element to aligned</td>
        </tr>
  </tbody>
</table>

## License

MIT
