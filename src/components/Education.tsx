/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import {
	blackPrimary,
	containerVariants,
	childVariants,
	whitePrimary,
	gradientTextStyle,
	headerFontSize,
	secondHeaderFontSize,
	defaultFontSize,
} from '../styles';

export default function Education(): JSX.Element {
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
				backgroundColor: blackPrimary,
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
						width: '90%',
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
						Education
					</motion.span>
				</Typography>
			</motion.div>
			<Grid container spacing={20}>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					xl={6}
					sx={{ display: 'flex', flexDirection: 'column' }}
				>
					<motion.div
						variants={childVariants}
						whileHover={{
							scale: 1.05,
						}}
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'column',
							gap: 20,
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Bai Jamjuree, sans-serif',
								color: whitePrimary,
								fontSize: secondHeaderFontSize,
								lineHeight: 1.1,
								fontWeight: 'bold',
							}}
						>
							Master&apos;s in Software and Service Engineering
						</Typography>
						<Box sx={{ display: 'flex', gap: 2 }}>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.1,
									}}
								>
									<span style={{ fontWeight: 'bold' }}>Aalto University </span>
									Present
								</Typography>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.3,
									}}
								>
									Software and Service Engineering is the backbone of modern
									society and economy. Software is needed in almost every
									industry, in every business, and for every function - from
									healthcare and information technology to R&D industry or
									governmental organisations. The Master&apos;s Programme in
									Computer, Communication and Information Sciences - Software
									and Service Engineering equips students with some of the most
									sought after skills in today&apos;s job market, across a wide
									range of industries.
								</Typography>
							</Box>
						</Box>
					</motion.div>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
					<motion.div
						variants={childVariants}
						whileHover={{
							scale: 1.05,
						}}
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'column',
							gap: 20,
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Bai Jamjuree, sans-serif',
								color: whitePrimary,
								fontSize: secondHeaderFontSize,
								lineHeight: 1.1,
								fontWeight: 'bold',
							}}
						>
							Bachelor&apos;s in Chemical Engineering
						</Typography>
						<Box sx={{ display: 'flex', gap: 2 }}>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.1,
									}}
								>
									<span style={{ fontWeight: 'bold' }}>Aalto University </span>
									2023
								</Typography>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.3,
									}}
								>
									In the Chemical engineering major in Aalto Bachelor&apos;s
									Programme in Science and Technology students learn the basic
									skills and knowledge required for a transition from anfossil
									fuel-based to a sustainable society. Utilizing natural
									resources is vital for a sustainable way of living and will be
									crucial for future economic growth, as it will provide also
									new business opportunities.
								</Typography>
							</Box>
						</Box>
					</motion.div>
				</Grid>
			</Grid>
		</motion.div>
	);
}
