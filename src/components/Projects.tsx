/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { GitHub, Visibility } from '@mui/icons-material';
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
	buttonFontSize,
	buttonRemoveStyle,
	whiteSecondary,
} from '../styles';

export default function Projects(): JSX.Element {
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
					Look At{' '}
					<motion.span
						style={gradientTextStyle}
						animate={{ backgroundSize: ['100%', '200%', '100%'] }}
						transition={{
							duration: 5,
							ease: 'easeInOut',
							repeat: Infinity,
						}}
					>
						My Projects
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
						onClick={() =>
							window.open(
								'https://saniletchu.github.io/Instagram-clone',
								'_blank'
							)
						}
						whileHover={{
							scale: 1.05,
						}}
						style={{
							display: 'flex',
							cursor: 'pointer',
							flexDirection: 'column',
							alignItems: 'start',
							gap: 20,
						}}
					>
						<img
							style={{
								width: '100%',
								borderRadius: 10,
								objectFit: 'contain',
							}}
							alt="Instagram"
							src="https://github.com/SaniLetchu/Instagram-clone/assets/92727936/1f7ab6a6-cf71-4fdf-8ddc-ecdd4e8cfadc"
						/>
						<Typography
							sx={{
								fontFamily: 'Bai Jamjuree, sans-serif',
								color: whitePrimary,
								fontSize: secondHeaderFontSize,
								lineHeight: 1.1,
								fontWeight: 'bold',
							}}
						>
							Instagram Clone
						</Typography>
						<Box sx={{ display: 'flex', gap: 2 }}>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.3,
									}}
								>
									My Instagram project replicates fundamental features of the
									platform, encompassing user authentication, post interactions,
									private messaging, and profile customization. The web design
									mirrors Instagram&apos;s aesthetics, prioritizing mobile
									responsiveness. Noteworthy functionalities include secure
									authentication, Google Sign-in, post creation, liking,
									commenting, private conversations, and following/unfollowing.
									Users can personalize profiles, search for others, and toggle
									between Dark/Light modes.
								</Typography>
								<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
									<img
										alt="TypeScript"
										src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white"
									/>
									<img
										alt="React"
										src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB"
									/>
									<img
										alt="Material UI"
										src="https://img.shields.io/badge/Material--UI-%230081CB.svg?logo=material-ui&logoColor=white"
									/>
									<img
										alt="Firebase"
										src="https://img.shields.io/badge/Firebase-ffca28?logo=firebase&logoColor=black"
									/>
								</Box>
							</Box>
						</Box>
					</motion.div>
				</Grid>
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
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							gap: 20,
						}}
					>
						<img
							style={{
								width: '100%',
								borderRadius: 10,
								objectFit: 'contain',
							}}
							alt="Tower Defense Game"
							src="https://user-images.githubusercontent.com/92727936/194776151-fa752d17-fc9c-49f9-b82c-35e624fa97f6.gif"
						/>
						<Typography
							sx={{
								fontFamily: 'Bai Jamjuree, sans-serif',
								color: whitePrimary,
								fontSize: secondHeaderFontSize,
								lineHeight: 1.1,
								fontWeight: 'bold',
							}}
						>
							Tower Defense Game
						</Typography>
						<Box sx={{ display: 'flex', gap: 2 }}>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.3,
									}}
								>
									In the realm of school group projects, I undertook the
									development of a tower defense game, playing a substantial
									role in its coding. The game introduces a map builder for
									creative freedom and incorporates sound effects to enhance the
									gaming experience. Within the game, players strategically
									deploy three unique towers; Basic Tower, Bomb Tower, and
									Sticky Tower.
								</Typography>
								<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
									<img
										alt="C++"
										src="https://img.shields.io/badge/C++-%2300599C.svg?logo=c%2B%2B&logoColor=white"
									/>
									<img
										alt="SFML"
										src="https://img.shields.io/badge/SFML-%238CC445.svg?&logo=sfml&logoColor=black"
									/>
								</Box>
							</Box>
						</Box>
					</motion.div>
				</Grid>
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
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							gap: 20,
						}}
					>
						<img
							style={{
								width: '100%',
								borderRadius: 10,
								objectFit: 'contain',
							}}
							alt="Sorting Algorithm Visualizer"
							src="https://user-images.githubusercontent.com/92727936/190877772-b6d0cbcc-510a-477a-a79a-f7caf37e62fd.gif"
						/>
						<Typography
							sx={{
								fontFamily: 'Bai Jamjuree, sans-serif',
								color: whitePrimary,
								fontSize: secondHeaderFontSize,
								lineHeight: 1.1,
								fontWeight: 'bold',
							}}
						>
							Sorting Algorithm Visualizer
						</Typography>
						<Box sx={{ display: 'flex', gap: 2 }}>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.3,
									}}
								>
									My sorting algorithm visualizer project showcases the dynamic
									implementation of three key sorting algorithms: Quicksort,
									Bubble Sort, and Insertion Sort. Users can interactively
									observe the step-by-step execution of these algorithms,
									providing an engaging platform for learning and understanding
									their functionality.
								</Typography>
								<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
									<img
										alt="C++"
										src="https://img.shields.io/badge/C++-%2300599C.svg?logo=c%2B%2B&logoColor=white"
									/>
									<img
										alt="SFML"
										src="https://img.shields.io/badge/SFML-%238CC445.svg?&logo=sfml&logoColor=black"
									/>
								</Box>
							</Box>
						</Box>
					</motion.div>
				</Grid>
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
						onClick={() =>
							window.open('https://www.theodinproject.com/', '_blank')
						}
						whileHover={{
							scale: 1.05,
						}}
						style={{
							display: 'flex',
							cursor: 'pointer',
							flexDirection: 'column',
							alignItems: 'start',
							gap: 20,
						}}
					>
						<img
							style={{
								width: '100%',
								borderRadius: 10,
								objectFit: 'contain',
							}}
							alt="Odin Project"
							src="https://www.theodinproject.com/assets/og-logo-dc2c719e367496ffaee876882b3f62c9b139279824de6a6e16448398fa513f7a.png"
						/>
						<Typography
							sx={{
								fontFamily: 'Bai Jamjuree, sans-serif',
								color: whitePrimary,
								fontSize: secondHeaderFontSize,
								lineHeight: 1.1,
								fontWeight: 'bold',
							}}
						>
							Odin Project
						</Typography>
						<Box sx={{ display: 'flex', gap: 2 }}>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.3,
									}}
								>
									I incorporated The Odin Project into my portfolio to showcase
									my commitment to continuous learning and skill development.
									This comprehensive, open-source curriculum has been
									instrumental in honing my proficiency in web development. By
									completing hands-on projects and engaging in practical coding
									challenges, I&apos;ve gained valuable experience in front-end
									and back-end technologies. The Odin Project is a testament to
									my dedication to staying current with industry trends and
									refining my abilities in building robust and dynamic web
									applications.
								</Typography>
							</Box>
						</Box>
					</motion.div>
				</Grid>
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
						onClick={() => window.open('https://fullstackopen.com/', '_blank')}
						whileHover={{
							scale: 1.05,
						}}
						style={{
							display: 'flex',
							cursor: 'pointer',
							flexDirection: 'column',
							alignItems: 'start',
							gap: 20,
						}}
					>
						<img
							style={{
								width: '100%',
								borderRadius: 10,
								objectFit: 'contain',
							}}
							alt="Full Stack Open"
							src="https://user-images.githubusercontent.com/92727936/189920183-b956d5a3-ce07-49f4-adb2-8911acbb87cf.png"
						/>
						<Typography
							sx={{
								fontFamily: 'Bai Jamjuree, sans-serif',
								color: whitePrimary,
								fontSize: secondHeaderFontSize,
								lineHeight: 1.1,
								fontWeight: 'bold',
							}}
						>
							Full Stack Open
						</Typography>
						<Box sx={{ display: 'flex', gap: 2 }}>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.3,
									}}
								>
									Full Stack Open course from the University of Helsinki. This
									comprehensive program has equipped me with proficiency in both
									front-end and back-end web development, focusing on
									technologies such as React, Redux, Node.js, and MongoDB. It
									demonstrates my commitment to staying current and mastering
									the essentials of full-stack development.
								</Typography>
							</Box>
						</Box>
					</motion.div>
				</Grid>
			</Grid>
			<motion.div
				variants={childVariants}
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 20,
				}}
			>
				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					transition={{ type: 'spring', stiffness: 400 }}
				>
					<motion.button
						onClick={() =>
							window.open('https://github.com/SaniLetchu', '_blank')
						}
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
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 1,
							}}
						>
							Want to see more? Check my GitHub
							<GitHub sx={{ fontSize: buttonFontSize }} />
						</Typography>
					</motion.button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
