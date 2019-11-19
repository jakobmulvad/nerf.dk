import React from "react";

import TechWheel from './tech-wheel';
import FluidBackground from './fluid-background';

import GmailIcon from './icons/gmail';
import LinkedInIcon from './icons/linkedin';
import GithubIcon from './icons/github';

const App:React.FC = () => {
	return <div className="main">
		<FluidBackground />
		<div className="segment">
			<div id="title">Jakob Mulvad Nielsen</div>
			<div>Freelance senior developer</div>
		</div>
		<div className="segment">
			<div style={{position: 'relative'}}><span>need help with </span><TechWheel /></div>
		</div>
		<div className="segment icon-list">
			<GmailIcon />
			<LinkedInIcon />
			<GithubIcon />
		</div>
	</div>
}

export default App;
