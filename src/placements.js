const autoAdjustOverflow = {
    adjustX: true,
    adjustY: true
};

const targetOffset = [0, 0];

const placements = {
    'top': {
        points: ['bc', 'tc'],
        offset: [0, -12],
        overflow: autoAdjustOverflow,
        targetOffset
    },
    'top-left': {
        points: ['br', 'tc'],
        offset: [25, -12],
        overflow: autoAdjustOverflow,
        targetOffset
    },
    'top-right': {
        points: ['bl', 'tc'],
        offset: [-25, -12],
        overflow: autoAdjustOverflow,
        targetOffset
    },
    'right': {
        points: ['cl', 'cr'],
        offset: [12, 0],
        overflow: autoAdjustOverflow,
        targetOffset
    },
    'right-top': {
        points: ['bl', 'cr'],
        offset: [12, 25],
        overflow: autoAdjustOverflow,
        targetOffset
    },
    'right-bottom': {
        points: ['tl', 'cr'],
        offset: [12, -25],
        overflow: autoAdjustOverflow,
        targetOffset
    },
    'bottom': {
        points: ['tc', 'bc'],
        offset: [0, 12],
        overflow: autoAdjustOverflow,
        targetOffset
    },
    'bottom-left': {
        points: ['tr', 'bc'],
        offset: [25, 12],
        overflow: autoAdjustOverflow,
        targetOffset
    },
    'bottom-right': {
        points: ['tl', 'bc'],
        offset: [-25, 12],
        overflow: autoAdjustOverflow,
        targetOffset
    },
    'left': {
        points: ['cr', 'cl'],
        offset: [-12, 0],
        overflow: autoAdjustOverflow,
        targetOffset
    },
    'left-top': {
        points: ['br', 'cl'],
        offset: [-12, 25],
        overflow: autoAdjustOverflow,
        targetOffset
    },
    'left-bottom': {
        points: ['tr', 'cl'],
        offset: [-12, -25],
        overflow: autoAdjustOverflow,
        targetOffset
    }
};

export default placements;
