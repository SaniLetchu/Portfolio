/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import {
	containerVariants,
	childVariants,
	whitePrimary,
	gradientTextStyle,
	headerFontSize,
	blackSecondary,
	secondHeaderFontSize,
	defaultFontSize,
} from '../styles';

export default function Experience(): JSX.Element {
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
						Experience
					</motion.span>
				</Typography>
			</motion.div>
			<Grid container spacing={3}>
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
							Consultant/System Tester
						</Typography>
						<Box sx={{ display: 'flex', gap: 2 }}>
							<Typography
								sx={{
									color: whitePrimary,
									fontSize: defaultFontSize,
									lineHeight: 1.1,
									textAlign: 'center',
								}}
							>
								2023 - Present
							</Typography>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.1,
										fontWeight: 'bold',
									}}
								>
									Accenture
								</Typography>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.3,
									}}
								>
									At Accenture, I&apos;m immersed in system testing, ensuring
									the reliability of intricate software systems. Collaborating
									with cross-functional teams, I design and execute test cases,
									identify defects, and contribute to continuous improvement. My
									role is crucial in maintaining high-quality solutions for our
									clients in a dynamic and innovative work environment.
								</Typography>
								<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
									<img
										alt="Salesforce"
										src="https://img.shields.io/badge/Salesforce-%2300A1E0.svg?logo=salesforce&logoColor=white"
									/>
									<img
										alt="Testrail"
										src="https://img.shields.io/badge/Testrail-%231A1F71.svg?logo=testrail&logoColor=green"
									/>
									<img
										alt="Jira"
										src="https://img.shields.io/badge/Jira-0052CC?logo=Jira&logoColor=white"
									/>
									<img
										alt="Confluence"
										src="https://img.shields.io/badge/Confluence-%23172BF4.svg?logo=confluence&logoColor=white"
									/>
									<img
										alt="Teams"
										src="https://img.shields.io/badge/Microsoft_Teams-6264A7?logo=microsoft-teams&logoColor=white"
									/>
								</Box>
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
							Mobile Developer
						</Typography>
						<Box sx={{ display: 'flex', gap: 2 }}>
							<Typography
								sx={{
									color: whitePrimary,
									fontSize: defaultFontSize,
									lineHeight: 1.1,
									textAlign: 'center',
								}}
							>
								2022 - 2023
							</Typography>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.1,
										fontWeight: 'bold',
									}}
								>
									Komu Homes
								</Typography>
								<Typography
									sx={{
										color: whitePrimary,
										fontSize: defaultFontSize,
										lineHeight: 1.3,
									}}
								>
									During my academic journey, I had the opportunity to take
									Software Project course where I with group of students worked
									with real clients. The project took about 9 months and during
									that we practiced using Scrum methodology. Collaborating
									closely with the client, I translated user requirements into a
									functional and user-friendly mobile app. Throughout the
									project&apos;s duration, my professional growth was palpable.
									Embracing new challenges, I expanded my technical skills in
									mobile development and gained a deeper understanding of client
									collaboration. The experience not only solidified my expertise
									but also instilled a sense of assurance in my abilities to
									tackle intricate tasks and collaborate effectively in a
									professional setting.
								</Typography>
								<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
									<img
										alt="TypeScript"
										src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white"
									/>
									<img
										alt="React Native"
										src="https://img.shields.io/badge/React_Native-20232A?logo=react&logoColor=61DAFB"
									/>
									<img
										alt="Firebase"
										src="https://img.shields.io/badge/Firebase-ffca28?logo=firebase&logoColor=black"
									/>
									<img
										alt="Trello"
										src="https://img.shields.io/badge/Trello-0052CC?logo=trello&logoColor=white"
									/>
									<img
										alt="Slack"
										src="https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white"
									/>
								</Box>
							</Box>
						</Box>
					</motion.div>
				</Grid>
			</Grid>
		</motion.div>
	);
}
