import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { whitePrimary } from '../styles';

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
			whileHover={{ scale: 1.1 }}
			style={{
				height: 100,
				width: 100,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 5,
			}}
		>
			<img
				style={{
					height: 50,
					width: 50,
					objectFit: 'contain',
					filter: 'drop-shadow(8px 5px 2px rgb(0,0,0,1))',
				}}
				src={image}
				alt={text}
			/>
			<Typography
				sx={{
					color: whitePrimary,
					margin: 0.5,
					fontSize: 15,
					fontWeight: 'bold',
					textShadow: '8px 5px 2px rgb(0,0,0,1)',
				}}
			>
				{text}
			</Typography>
		</motion.div>
	);
}
