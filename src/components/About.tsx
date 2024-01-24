/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import {
	containerVariants,
	childVariants,
	whitePrimary,
	gradientTextStyle,
	headerFontSize,
	blackSecondary,
	defaultFontSize,
} from '../styles';

export default function About(): JSX.Element {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			id="About"
			ref={ref}
			variants={containerVariants}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			style={{
				padding: 40,
				display: 'flex',
				gap: 25,
				flexDirection: 'column',
				backgroundColor: blackSecondary,
			}}
		>
			<motion.div
				variants={childVariants}
				style={{
					width: '100%',
					display: 'flex',
				}}
			>
				<Typography
					sx={{
						fontFamily: 'Bai Jamjuree, sans-serif',
						color: whitePrimary,
						width: '100%',
						fontSize: headerFontSize,
						lineHeight: 1.1,
						fontWeight: 'bold',
					}}
				>
					Learn{' '}
					<motion.span
						style={gradientTextStyle}
						animate={{ backgroundSize: ['100%', '200%', '100%'] }}
						transition={{
							duration: 5,
							ease: 'easeInOut',
							repeat: Infinity,
						}}
					>
						About Me
					</motion.span>
				</Typography>
			</motion.div>
			<motion.div
				variants={childVariants}
				style={{
					width: '100%',
					display: 'flex',
				}}
			>
				<Typography
					sx={{
						color: whitePrimary,
						width: '100%',
						fontSize: defaultFontSize,
						lineHeight: 1.5,
					}}
				>
					Might write something here eventually...
				</Typography>
			</motion.div>
		</motion.div>
	);
}
