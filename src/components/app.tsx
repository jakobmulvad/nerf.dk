import React from "react";

import TechWheel from './tech-wheel';
import FluidBackground from './fluid-background';
import Video from './video';
import WebGLCanvas from './webgl-canvas'

import GmailIcon from './icons/gmail';
import LinkedInIcon from './icons/linkedin';
import GithubIcon from './icons/github';

const App:React.FC = () => {
	return <div className="main">
		<WebGLCanvas />
		<div className="segment">
			<div id="title">JAKOB MULVAD NIELSEN</div>
			<span style={{'borderTop': '1px solid rgba(0,0,0,.2)'}}>freelance senior developer</span>
			<span className="icon-list">
				<a href="mailto:mulvad@gmail.com" target="_blank"><GmailIcon /></a>
				<a href="https://www.linkedin.com/in/jakob-mulvad-nielsen-5a53096/" target="_blank"><LinkedInIcon /></a>
				<a href="https://github.com/jakobmulvad" target="_blank"><GithubIcon /></a>
				</span>
		</div>
		<div className="segment" style={{position: 'static', left: '30vw', top: '50vh'}}>
			<div style={{position: 'relative'}}><span>need help with </span><TechWheel /></div>
		</div>
	</div>
}

export default App;
