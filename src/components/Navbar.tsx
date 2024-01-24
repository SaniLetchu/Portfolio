import React, { useState, useRef, useEffect } from 'react';
import { AppBar, Toolbar, Typography, ButtonBase, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import HamburgerButton from './HamburgerButton';
import GradientDivider from './GradientDivider';
import {
	blackPrimary,
	whitePrimary,
	whiteSecondary,
	buttonFontSize,
	buttonRemoveStyle,
} from '../styles';

function Navbar(): JSX.Element {
	const [isOpen, setOpen] = useState(false);
	const [isEnoughSpace, setEnoughSpace] = useState(true);
	const toolbarRef = useRef<HTMLDivElement | null>(null);

	const showButton = isOpen || !isEnoughSpace;

	const handleScroll = (destination: string): void => {
		const element = document.querySelector(destination);
		if (element) {
			const yCoordinate =
				element.getBoundingClientRect().top + window.pageYOffset;
			const yOffset = -65;
			window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const updateEnoughSpace = (): void => {
			if (toolbarRef.current) {
				const toolbarWidth = toolbarRef.current?.offsetWidth;
				const allowedWidth = 600;
				setEnoughSpace(toolbarWidth <= allowedWidth);
			}
		};

		updateEnoughSpace(); // Call once to initialize
		window.addEventListener('resize', updateEnoughSpace);

		return () => {
			window.removeEventListener('resize', updateEnoughSpace);
		};
	}, []);

	const buttonVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<AppBar
			position="sticky"
			sx={{
				backgroundColor: blackPrimary,
				overflow: 'hidden',
				boxShadow: 'none',
			}}
		>
			<Toolbar ref={toolbarRef}>
				<Box
					sx={{
						flexGrow: 1,
						display: 'flex',
						gap: 3,
						alignItems: 'center',
					}}
				>
					{isEnoughSpace && (
						<HamburgerButton
							color={whitePrimary}
							isOpen={isOpen}
							onClick={() => setOpen(!isOpen)}
						/>
					)}
					<AnimatePresence>
						{showButton && (
							<motion.div
								initial="hidden"
								animate="visible"
								exit="hidden"
								style={{ display: 'flex', gap: 10 }}
								variants={containerVariants}
							>
								<motion.div variants={buttonVariants}>
									<motion.div
										onClick={() => handleScroll('#About')}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										transition={{ type: 'spring', stiffness: 400 }}
										style={{
											display: 'flex',
											alignItems: 'center',
											cursor: 'pointer',
											justifyContent: 'center',
										}}
									>
										<Typography>About</Typography>
									</motion.div>
								</motion.div>
								<motion.div variants={buttonVariants}>
									<motion.div
										onClick={() => handleScroll('#Education')}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										transition={{ type: 'spring', stiffness: 400 }}
										style={{
											display: 'flex',
											alignItems: 'center',
											cursor: 'pointer',
											justifyContent: 'center',
										}}
									>
										<Typography>Education</Typography>
									</motion.div>
								</motion.div>
								<motion.div variants={buttonVariants}>
									<motion.div
										onClick={() => handleScroll('#Experience')}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										transition={{ type: 'spring', stiffness: 400 }}
										style={{
											display: 'flex',
											alignItems: 'center',
											cursor: 'pointer',
											justifyContent: 'center',
										}}
									>
										<Typography>Experience</Typography>
									</motion.div>
								</motion.div>
								<motion.div variants={buttonVariants}>
									<motion.div
										onClick={() => handleScroll('#Projects')}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										transition={{ type: 'spring', stiffness: 400 }}
										style={{
											display: 'flex',
											alignItems: 'center',
											cursor: 'pointer',
											justifyContent: 'center',
										}}
									>
										<Typography>Projects</Typography>
									</motion.div>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</Box>
				<AnimatePresence>
					{!(isOpen && isEnoughSpace) && (
						<motion.div
							initial={{ opacity: 0, x: 150 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 150 }}
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: 'spring', stiffness: 400 }}
							>
								<motion.button
									onClick={() => handleScroll('#Contact')}
									style={{
										...buttonRemoveStyle,
										backgroundColor: whitePrimary,
										paddingTop: 10,
										paddingBottom: 10,
										paddingLeft: 20,
										paddingRight: 20,
										borderRadius: 50,
									}}
								>
									<Typography
										sx={{
											color: blackPrimary,
											fontWeight: 'bold',
											fontSize: buttonFontSize,
										}}
									>
										LET&apos;S TALK
									</Typography>
								</motion.button>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</Toolbar>
			<GradientDivider height={2} />
		</AppBar>
	);
}

export default Navbar;
