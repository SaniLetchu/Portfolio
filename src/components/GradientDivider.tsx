import React from 'react';
import { motion } from 'framer-motion';
import { gradientBackgroundStyle } from '../styles';

interface GradientDividerProps {
	height: number;
}

export default function GradientDivider({
	height,
}: GradientDividerProps): JSX.Element {
	return (
		<motion.div
			animate={{ backgroundSize: ['100%', '150%', '100%'] }}
			transition={{
				duration: 5,
				ease: 'easeInOut',
				repeat: Infinity,
			}}
			style={{ minHeight: height, ...gradientBackgroundStyle }}
		/>
	);
}
