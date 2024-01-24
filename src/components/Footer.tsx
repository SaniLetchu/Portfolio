/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import {
	containerVariants,
	childVariants,
	whitePrimary,
	blackPrimary,
} from '../styles';

export default function Footer(): JSX.Element {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			ref={ref}
			variants={containerVariants}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			style={{
				padding: 20,
				paddingRight: 40,
				paddingLeft: 40,
				display: 'flex',
				justifyContent: 'space-between',
				backgroundColor: blackPrimary,
			}}
		>
			<motion.div
				variants={childVariants}
				style={{
					display: 'flex',
					justifyContent: 'start',
				}}
			>
				<Typography
					sx={{
						color: 'rgb(142, 142, 142)',
						fontSize: 15,
					}}
				>
					© Developed by Sani Letchu
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
						height: 25,
						width: 25,
						background: 'white',
						padding: 1,
					}}
				>
					<div
						style={{
							borderRadius: '50%',
							height: 25,
							width: 25,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							background: 'black',
						}}
					>
						<LinkedIn sx={{ color: whitePrimary, fontSize: 20 }} />
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
						height: 25,
						width: 25,
						background: 'white',
						padding: 1,
					}}
				>
					<div
						style={{
							borderRadius: '50%',
							height: 25,
							width: 25,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							background: 'black',
						}}
					>
						<GitHub sx={{ color: whitePrimary, fontSize: 20 }} />
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
