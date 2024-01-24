/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Form from './Form';
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
			id="Contact"
			ref={ref}
			variants={containerVariants}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			style={{
				padding: 40,
				display: 'flex',
				gap: 25,
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: blackSecondary,
			}}
		>
			<motion.div
				variants={childVariants}
				style={{
					display: 'flex',
				}}
			>
				<Typography
					sx={{
						fontFamily: 'Bai Jamjuree, sans-serif',
						color: whitePrimary,
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
					display: 'flex',
				}}
			>
				<Typography
					sx={{
						color: whitePrimary,
						fontSize: defaultFontSize,
						lineHeight: 1.5,
					}}
				>
					Feel free to Contact me by submitting the form and I will get back to
					you as soon as possible
				</Typography>
			</motion.div>
			<motion.div
				variants={childVariants}
				style={{
					display: 'flex',
					width: '90%',
					maxWidth: '800px',
				}}
			>
				<Form />
			</motion.div>
			<motion.div
				variants={childVariants}
				style={{
					display: 'flex',
				}}
			>
				<Typography
					sx={{
						color: whitePrimary,
						fontSize: defaultFontSize,
						lineHeight: 1.5,
					}}
				>
					Or Contact me via these social platforms
				</Typography>
			</motion.div>
			<motion.div
				variants={childVariants}
				style={{
					display: 'flex',
					gap: 15,
				}}
			>
				<motion.div
					onClick={() =>
						window.open(
							'https://www.linkedin.com/in/sani-letchu-a90a00179/',
							'_blank'
						)
					}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					transition={{ type: 'spring', stiffness: 400 }}
					style={{
						display: 'flex',
						cursor: 'pointer',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '50%',
						height: 100,
						width: 100,
						background: 'white',
						padding: 1,
					}}
				>
					<div
						style={{
							borderRadius: '50%',
							height: 100,
							width: 100,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							background: blackSecondary,
						}}
					>
						<LinkedIn sx={{ color: whitePrimary, fontSize: 75 }} />
					</div>
				</motion.div>
				<motion.div
					onClick={() => window.open('https://github.com/SaniLetchu', '_blank')}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					transition={{ type: 'spring', stiffness: 400 }}
					style={{
						display: 'flex',
						alignItems: 'center',
						cursor: 'pointer',
						justifyContent: 'center',
						borderRadius: '50%',
						height: 100,
						width: 100,
						background: 'white',
						padding: 1,
					}}
				>
					<div
						style={{
							borderRadius: '50%',
							height: 100,
							width: 100,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							background: blackSecondary,
						}}
					>
						<GitHub sx={{ color: whitePrimary, fontSize: 75 }} />
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
