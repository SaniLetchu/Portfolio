/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Typography, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import {
	whitePrimary,
	blackSecondary,
	defaultFontSize,
	buttonFontSize,
	buttonRemoveStyle,
	whiteSecondary,
	blackPrimary,
} from '../styles';

export default function Form(): JSX.Element {
	return (
		<form
			action="https://formsubmit.co/sani.letchu@gmail.com"
			method="POST"
			style={{
				display: 'flex',
				flexDirection: 'column',
				padding: 25,
				gap: 40,
				width: '100%',
				backgroundColor: blackPrimary,
				borderRadius: 10,
			}}
		>
			<TextField
				autoComplete="off"
				aria-label="empty textarea"
				placeholder="Enter Your Name"
				sx={{
					fontSize: defaultFontSize,
					borderRadius: 2,
					backgroundColor: blackSecondary,
					color: whitePrimary,
					outline: 'none',
					input: {
						color: whitePrimary,
						'&::placeholder': {
							color: 'rgb(142, 142, 142)',
						},
					},
				}}
				type="text"
				name="name"
				required
			/>
			<TextField
				autoComplete="off"
				aria-label="empty textarea"
				placeholder="Enter Your Email"
				sx={{
					fontSize: defaultFontSize,
					borderRadius: 2,
					backgroundColor: blackSecondary,
					color: whitePrimary,
					outline: 'none',
					input: {
						color: whitePrimary,
						'&::placeholder': {
							color: 'rgb(142, 142, 142)',
						},
					},
				}}
				type="email"
				name="email"
				required
			/>
			<TextField
				autoComplete="off"
				aria-label="empty textarea"
				placeholder="Enter Your Message"
				sx={{
					fontSize: defaultFontSize,
					borderRadius: 2,
					backgroundColor: blackSecondary,
					color: whitePrimary,
					outline: 'none',
					input: {
						color: whitePrimary,
						'&::placeholder': {
							color: 'rgb(142, 142, 142)',
						},
					},
				}}
				type="text"
				name="message"
				required
			/>
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: 'spring', stiffness: 400 }}
				style={{ alignSelf: 'center' }}
			>
				<motion.button
					type="submit"
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
						Submit
					</Typography>
				</motion.button>
			</motion.div>
		</form>
	);
}
