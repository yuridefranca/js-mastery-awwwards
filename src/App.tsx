import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Features } from './components/Features';
import { Story } from './components/Story';

export const App: React.FC = () => {
	return (
		<>
			<main className="relative min-h-screen w-screen overflow-x-hidden">
				<Navbar />
				<Hero />
				<About />
				<Features />
				<Story />
			</main>
		</>
	);
};

export default App;
