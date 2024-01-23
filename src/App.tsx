import React from 'react';
import { Box } from '@mui/material';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
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
			<GradientDivider height={2} />
			<About />
			<GradientDivider height={2} />
			<Education />
			<GradientDivider height={2} />
			<Experience />
			<GradientDivider height={2} />
			<Projects />
			<GradientDivider height={2} />
			<Contact />
			<GradientDivider height={2} />
			<Footer />
		</Box>
	);
}
