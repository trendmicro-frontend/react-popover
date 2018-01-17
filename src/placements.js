const autoAdjustOverflow = {
    adjustX: 1,
    adjustY: 1
};

const targetOffset = [0, 0];

export const placements = {
    top: {
        points: ['bc', 'tc'],
        overflow: autoAdjustOverflow,
        offset: [0, -8],
        targetOffset
    },
    topRight: {
        points: ['bl', 'tr'],
        overflow: autoAdjustOverflow,
        offset: [-32, -8],
        targetOffset
    },
    rightTop: {
        points: ['bl', 'tr'],
        overflow: autoAdjustOverflow,
        offset: [12, 32],
        targetOffset
    },
    right: {
        points: ['cl', 'cr'],
        overflow: autoAdjustOverflow,
        offset: [12, 0],
        targetOffset
    },
    rightBottom: {
        points: ['tl', 'br'],
        overflow: autoAdjustOverflow,
        offset: [12, -40],
        targetOffset
    },
    bottomRight: {
        points: ['tl', 'br'],
        overflow: autoAdjustOverflow,
        offset: [-32, 8],
        targetOffset
    },
    bottom: {
        points: ['tc', 'bc'],
        overflow: autoAdjustOverflow,
        offset: [0, 8],
        targetOffset
    },
    bottomLeft: {
        points: ['tr', 'bl'],
        overflow: autoAdjustOverflow,
        offset: [32, 8],
        targetOffset
    },
    leftBottom: {
        points: ['tr', 'bl'],
        overflow: autoAdjustOverflow,
        offset: [-12, -40],
        targetOffset
    },
    left: {
        points: ['cr', 'cl'],
        overflow: autoAdjustOverflow,
        offset: [-12, 0],
        targetOffset
    },
    leftTop: {
        points: ['br', 'tl'],
        overflow: autoAdjustOverflow,
        offset: [-12, 32],
        targetOffset
    },
    topLeft: {
        points: ['br', 'tl'],
        overflow: autoAdjustOverflow,
        offset: [32, -8],
        targetOffset
    }
};

export default placements;
