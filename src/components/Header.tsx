import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { motion } from 'framer-motion';
import {
	blackPrimary,
	whitePrimary,
	gradientTextStyle,
	titleFontSize,
	profilePictureSize,
	whiteSecondary,
	defaultFontSize,
	gradientBackgroundStyle,
	buttonRemoveStyle,
	buttonFontSize,
} from '../styles';

export default function Header(): JSX.Element {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				repeatDelay: 0.3,
			},
		},
	};

	const childVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			style={{
				padding: 40,
				display: 'flex',
				gap: 25,
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: blackPrimary,
			}}
		>
			<motion.div
				variants={childVariants}
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					component="img"
					sx={{
						height: profilePictureSize,
						width: profilePictureSize,
						borderRadius: '50%',
						objectFit: 'cover',
					}}
					alt="The house from the offer."
					src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
				/>
			</motion.div>
			<motion.div
				variants={childVariants}
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography
					sx={{
						fontFamily: 'Bai Jamjuree, sans-serif',
						color: whitePrimary,
						width: '90%',
						fontSize: titleFontSize,
						lineHeight: 1.1,
						fontWeight: 'bold',
						textAlign: 'center',
					}}
				>
					<motion.span
						style={gradientTextStyle}
						animate={{ backgroundSize: ['100%', '150%', '100%'] }}
						transition={{
							duration: 5,
							ease: 'easeInOut',
							repeat: Infinity,
						}}
					>
						Hello, I&apos;m Sani,{' '}
					</motion.span>
					creative
					<br />
					developer based in Finland.
				</Typography>
			</motion.div>
			<motion.div
				variants={childVariants}
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography
					sx={{
						width: '65%',
						color: whiteSecondary,
						fontSize: defaultFontSize,
						textAlign: 'center',
					}}
				>
					I just enjoy making things work. Whether it&apos;s tackling tricky
					problems or crafting simple solutions, I&apos;m all about hands-on
					coding and creating practical stuff.
				</Typography>
			</motion.div>
			<motion.div
				variants={childVariants}
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box sx={{ display: 'flex', gap: 1 }}>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: 'spring', stiffness: 400 }}
					>
						<motion.button
							animate={{ backgroundSize: ['100%', '150%', '100%'] }}
							transition={{
								duration: 5,
								ease: 'easeInOut',
								repeat: Infinity,
							}}
							style={{
								...buttonRemoveStyle,
								...gradientBackgroundStyle,
								paddingTop: 10,
								paddingBottom: 10,
								paddingLeft: 20,
								paddingRight: 20,
								borderRadius: 50,
							}}
						>
							<Typography
								sx={{
									fontFamily: 'Bai Jamjuree, sans-serif',
									color: whitePrimary,
									fontSize: buttonFontSize,
								}}
							>
								GET IN TOUCH
							</Typography>
						</motion.button>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: 'spring', stiffness: 400 }}
					>
						<motion.button
							style={{
								...buttonRemoveStyle,
								border: `${whiteSecondary} 1px solid`,
								paddingTop: 10,
								paddingBottom: 10,
								paddingLeft: 20,
								paddingRight: 20,
								borderRadius: 50,
							}}
						>
							<Typography
								sx={{
									fontFamily: 'Bai Jamjuree, sans-serif',
									color: whitePrimary,
									fontSize: buttonFontSize,
								}}
							>
								VIEW ALL WORKS
							</Typography>
						</motion.button>
					</motion.div>
				</Box>
			</motion.div>
		</motion.div>
	);
}
