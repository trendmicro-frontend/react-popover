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
<Popover
    popoverBody={<span>Popover Top</span>}
>
    <i className="fa fa-info-circle" />
</Popover>

// With Header
<Popover
	popoverHeader={<span>File Path (3)</span>}
    popoverBody={<span>Popover Top</span>}
>
    <i className="fa fa-info-circle" />
</Popover>

// With footer
<Popover
	popoverHeader={<span>File Path (3)</span>}
    popoverBody={<span>Popover Top</span>}
    popoverFooter={<span>Footer</span>}
>
    <i className="fa fa-info-circle" />
</Popover>

// Set prefer place
<Popover
	placement="topLeft"
    popoverBody={<span>Popover Top</span>}
>
    <i className="fa fa-info-circle" />
</Popover>
```


## API

### Properties

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
placement | string | 'top' | One of: 'top', 'topLeft', 'topRight', 'right', 'rightTop', 'rightBottom', 'bottom', 'bottomLeft', 'bottomRight', 'left', 'leftTop', 'leftBottom'. <br />Will display at placement if possible, otherwise adjust it's location automatically. 
enterDelay | number | 0 | The delay length (in ms) before the popover appears.
leaveDelay | number | 100 | The delay length (in ms) before the popover disappears.
popoverClassName | string |  | The className apply to popover itself. You can use it to override style if need.
popoverStyle | object |  | The style apply to popover itself. You can use it to override style if need.
popoverBody | node or function |  | The popover body. Required.
popoverHeader | node or function |  | The popover header content. Optional.
popoverFooter | node or function |  | The popover footer content. Optional

## License

MIT
