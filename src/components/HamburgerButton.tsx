/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

interface Props extends SVGMotionProps<SVGSVGElement> {
	isOpen?: boolean;
	color?: string;
	strokeWidth?: string | number;
}

export default function HamburgerButton({
	isOpen = false,
	width = 24,
	height = 24,
	strokeWidth = 1,
	color = '#000',
	...props
}: Props): JSX.Element {
	const variant = isOpen ? 'opened' : 'closed';
	const top = {
		closed: {
			rotate: 0,
			translateY: 0,
		},
		opened: {
			rotate: 45,
			translateY: 2,
		},
	};
	const center = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};
	const bottom = {
		closed: {
			rotate: 0,
			translateY: 0,
		},
		opened: {
			rotate: -45,
			translateY: -2,
		},
	};
	const lineProps = {
		stroke: color,
		strokeWidth: strokeWidth as number,
		vectorEffect: 'non-scaling-stroke',
		initial: 'closed',
		animate: variant,
	};
	const unitHeight = 4;
	const unitWidth = (unitHeight * (width as number)) / (height as number);

	return (
		<motion.svg
			viewBox={`0 0 ${unitWidth} ${unitHeight}`}
			overflow="visible"
			preserveAspectRatio="none"
			width={width}
			height={height}
			{...props}
		>
			<motion.line
				x1="0"
				x2={unitWidth}
				y1="0"
				y2="0"
				variants={top}
				{...lineProps}
			/>
			<motion.line
				x1="0"
				x2={unitWidth}
				y1="2"
				y2="2"
				variants={center}
				{...lineProps}
			/>
			<motion.line
				x1="0"
				x2={unitWidth}
				y1="4"
				y2="4"
				variants={bottom}
				{...lineProps}
			/>
		</motion.svg>
	);
}
