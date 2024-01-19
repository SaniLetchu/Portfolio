import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Navbar from './components/Navbar';
import GradientDivider from './components/GradientDivider';

export default function App(): JSX.Element {
	return (
		<Box>
			<Navbar />
			<Header />
			<GradientDivider height={10} />
		</Box>
	);
}
