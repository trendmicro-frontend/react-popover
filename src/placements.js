const autoAdjustOverflow = {
    adjustX: 1,
    adjustY: 1
};

const targetOffset = [0, 0];

export const placements = {
    'top': {
        points: ['bc', 'tc'],
        overflow: autoAdjustOverflow,
        offset: [0, -8],
        targetOffset
    },
    'top-right': {
        points: ['bl', 'tr'],
        overflow: autoAdjustOverflow,
        offset: [-32, -8],
        targetOffset
    },
    'right-top': {
        points: ['bl', 'tr'],
        overflow: autoAdjustOverflow,
        offset: [12, 32],
        targetOffset
    },
    'right': {
        points: ['cl', 'cr'],
        overflow: autoAdjustOverflow,
        offset: [12, 0],
        targetOffset
    },
    'right-bottom': {
        points: ['tl', 'br'],
        overflow: autoAdjustOverflow,
        offset: [12, -40],
        targetOffset
    },
    'bottom-right': {
        points: ['tl', 'br'],
        overflow: autoAdjustOverflow,
        offset: [-32, 8],
        targetOffset
    },
    'bottom': {
        points: ['tc', 'bc'],
        overflow: autoAdjustOverflow,
        offset: [0, 8],
        targetOffset
    },
    'bottom-left': {
        points: ['tr', 'bl'],
        overflow: autoAdjustOverflow,
        offset: [32, 8],
        targetOffset
    },
    'left-bottom': {
        points: ['tr', 'bl'],
        overflow: autoAdjustOverflow,
        offset: [-12, -40],
        targetOffset
    },
    'left': {
        points: ['cr', 'cl'],
        overflow: autoAdjustOverflow,
        offset: [-12, 0],
        targetOffset
    },
    'left-top': {
        points: ['br', 'tl'],
        overflow: autoAdjustOverflow,
        offset: [-12, 32],
        targetOffset
    },
    'top-left': {
        points: ['br', 'tl'],
        overflow: autoAdjustOverflow,
        offset: [32, -8],
        targetOffset
    }
};

export default placements;
