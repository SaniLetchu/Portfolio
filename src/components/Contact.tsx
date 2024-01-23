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

export default function Contact(): JSX.Element {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
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
					My{' '}
					<motion.span
						style={gradientTextStyle}
						animate={{ backgroundSize: ['100%', '200%', '100%'] }}
						transition={{
							duration: 5,
							ease: 'easeInOut',
							repeat: Infinity,
						}}
					>
						Contact
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
					Feel free to Contact me by submitting the form and I will get back to
					you as soon as possible
				</Typography>
			</motion.div>
		</motion.div>
	);
}
