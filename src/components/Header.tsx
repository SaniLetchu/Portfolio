/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import SkillCard from './SkillCard';
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
	containerVariants,
	childVariants,
	headerFontSize,
} from '../styles';

export default function Header(): JSX.Element {
	const ref = useRef(null);
	const cardsRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true });
	const [skillCardCount, setSkillCardCount] = useState(0);

	useEffect(() => {
		if (cardsRef.current) {
			setSkillCardCount(cardsRef.current.children.length);
		}
	}, []);

	const animationVariants = {
		hidden: {
			opacity: 1,
			x: '-30vw',
		},
		visible: {
			opacity: 1,
			x: '130vw',
			transition: {
				duration: 22,
				repeat: Infinity,
				repeatDelay: skillCardCount * 3.3 - 22,
				ease: 'linear',
			},
		},
	};

	const carouselVariants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 3.3,
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			variants={containerVariants}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			transition={{
				staggerChildren: 0.5,
				ease: 'linear',
				repeat: Infinity,
				repeatType: 'loop',
			}}
			style={{
				padding: 40,
				display: 'flex',
				gap: 25,
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: blackPrimary,
				overflow: 'hidden',
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
						animate={{ backgroundSize: ['100%', '200%', '100%'] }}
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
							animate={{ backgroundSize: ['100%', '200%', '100%'] }}
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
			<Box />
			<motion.div
				ref={cardsRef}
				variants={carouselVariants}
				style={{
					width: '100dvw',
					display: 'flex',
					overflow: 'hidden',
					position: 'relative',
					minHeight: '100px',
				}}
			>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png"
						text="TypeScript"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png"
						text="JavaScript"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png"
						text="HTML"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png"
						text="CSS"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
						text="React"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png"
						text="Redux"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png"
						text="Material UI"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
						text="Framer"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
						text="React Native"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
						text="Node.js"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2389/PNG/512/deno_logo_icon_145346.png"
						text="Deno.js"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_jest_icon_130514.png"
						text="Jest"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_cypress_icon_130654.png"
						text="Cypress"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png"
						text="Git"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2415/PNG/512/npm_original_wordmark_logo_icon_146402.png"
						text="npm"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2415/PNG/512/webpack_original_logo_icon_146300.png"
						text="Webpack"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61475.png"
						text="Firebase"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
						text="MongoDB"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_logo_icon_146389.png"
						text="PostgreSQL"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_sqlite_icon_130153.png"
						text="SQLite"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
						text="C++"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://www.sfml-dev.org/download/goodies/sfml-icon-big.png"
						text="SFML"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png"
						text="C"
					/>
				</motion.div>
				<motion.div
					variants={animationVariants}
					style={{ position: 'absolute', overflow: 'hidden' }}
				>
					<SkillCard
						image="https://cdn.icon-icons.com/icons2/112/PNG/512/python_18894.png"
						text="Python"
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}