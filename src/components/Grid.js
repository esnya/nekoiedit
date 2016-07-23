import { grey300, grey500 } from 'material-ui/styles/colors';
import React from 'react';

const Grid = () => {
    const smallElements = new Array(24 * 24);
    const largeElements = new Array(24 * 24 / 4 / 4);

    for (let y = 0; y < 24; y++) {
        for (let x = 0; x < 24; x++) {
            smallElements.push(
                <rect key={`${x},${y}`} x={x} y={y} width={1} height={1} />
            );
            if (x % 4 === 0 && y % 4 === 0) {
                largeElements.push(
                    <rect key={`${x},${y}`} x={x} y={y} width={4} height={4} />
                );
            }
        }
    }

    return (
        <g fill="none" strokeWidth={0.05}>
            <g stroke={grey300}>
                {smallElements}
                <circle cx={12} cy={12} r={5} />
                <line x1={0} y1={0} x2={24} y2={24} />
                <line x1={0} y1={24} x2={24} y2={0} />
            </g>
            <g stroke={grey500}>
                {largeElements}
                <circle cx={12} cy={12} r={10} />
                <rect x={3} y={3} width={18} height={18} rx={1} ry={1} />
                <rect x={2} y={4} width={20} height={16} rx={1} ry={1} />
                <rect x={4} y={2} width={16} height={20} rx={1} ry={1} />
                <rect x={0} y={0} width={24} height={24} />
            </g>
        </g>
    );
};
export default Grid;
