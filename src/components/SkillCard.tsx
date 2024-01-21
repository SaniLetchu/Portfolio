import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
	blackSecondary,
	whitePrimary,
	gradientBackgroundStyle,
} from '../styles';

interface SkillCardProps {
	image: string;
	text: string;
}

export default function SkillCard({
	image,
	text,
}: SkillCardProps): JSX.Element {
	return (
		<motion.div
			style={{
				height: 100,
				width: 100,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: blackSecondary,
				borderRadius: 5,
			}}
		>
			<img style={{ height: 50, width: 50 }} src={image} alt={text} />
			<Typography
				sx={{
					color: whitePrimary,
					margin: 0.5,
					fontSize: 15,
					fontWeight: 'bold',
				}}
			>
				{text}
			</Typography>
		</motion.div>
	);
}
