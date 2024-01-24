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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
					pharetra sapien. Vivamus interdum blandit nisl. Sed pellentesque augue
					sit amet quam pulvinar dapibus. Donec orci ante, sagittis vel lectus
					id, dignissim iaculis sem. Donec tempor rhoncus lorem. Vestibulum ante
					ipsum primis in faucibus orci luctus et ultrices posuere cubilia
					curae; Mauris volutpat nunc nec dui rutrum sollicitudin. Phasellus
					erat orci, efficitur at elit vel, tincidunt scelerisque lorem.
					Praesent risus ex, suscipit a lorem sit amet, lacinia euismod lectus.
					Sed condimentum, diam eu aliquet euismod, elit elit pellentesque
					neque, auctor pellentesque nisl nulla id turpis. Fusce ut lectus quis
					metus convallis dignissim id sit amet est. Ut neque libero, fringilla
					vel justo semper, accumsan aliquet augue. Aenean vel convallis leo.
					Sed quis pharetra arcu. In pretium cursus turpis eu iaculis. Nulla
					facilisi. Maecenas condimentum lorem ligula. Nulla rhoncus mi ac
					viverra bibendum. Fusce sed hendrerit tellus, eu bibendum turpis. Cras
					felis mauris, aliquet maximus ligula ut, volutpat dictum purus. In et
					sapien at elit aliquet ullamcorper vel maximus purus. Cras eu feugiat
					nisl. Integer ultricies aliquet ex at ultrices. Nunc dictum elementum
					mollis. Aenean et pulvinar justo, at tincidunt magna. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. In suscipit hendrerit
					pellentesque. Morbi velit neque, malesuada eu lobortis sed, tempor et
					odio. Etiam efficitur tristique augue sed finibus. Duis condimentum
					risus non dolor pulvinar, et blandit odio hendrerit. Cras sagittis
					justo quis orci rhoncus, id posuere dui condimentum. Nunc tristique
					odio eu augue scelerisque, aliquam dignissim libero volutpat. Nam
					aliquet, magna at laoreet interdum, velit nulla tincidunt quam,
					pretium ullamcorper tellus mauris vitae leo. Praesent suscipit cursus
					massa. Ut volutpat non ante eget viverra. In hac habitasse platea
					dictumst. Mauris venenatis nisl id augue maximus tincidunt. Donec
					egestas, felis non porttitor fermentum, nisi neque posuere leo, et
					ultricies arcu urna sit amet nisi. Donec metus massa, dapibus id
					mollis a, blandit id justo. Nam elit sem, vestibulum eget elit a,
					scelerisque laoreet odio. Vestibulum scelerisque porta massa, id
					consectetur nulla vehicula vitae. Aliquam scelerisque purus lectus, id
					gravida mi condimentum a. Ut sed felis dictum, finibus odio a, ornare
					enim. Vivamus ultricies ac nisi nec ornare. Maecenas pretium facilisis
					pellentesque. Donec aliquet lacus justo, sed scelerisque odio placerat
					non. Pellentesque mauris lacus, vehicula ut accumsan a, suscipit vitae
					tellus. Phasellus vitae ante metus.
				</Typography>
			</motion.div>
		</motion.div>
	);
}
