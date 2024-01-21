import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Navbar from './components/Navbar';
import GradientDivider from './components/GradientDivider';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';

export default function App(): JSX.Element {
	return (
		<Box>
			<Navbar />
			<Header />
			<GradientDivider height={3} />
			<About />
			<GradientDivider height={3} />
			<Education />
			<GradientDivider height={3} />
			<Experience />
			<GradientDivider height={3} />
			<Projects />
		</Box>
	);
}
