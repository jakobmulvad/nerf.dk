import React, {useEffect, useRef} from 'react';

const Video = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		videoRef.current.play();
	}, []);

	return <video ref={videoRef} muted loop id="myVideo" style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1}}>
		<source src="https://ak5.picdn.net/shutterstock/videos/1009164515/preview/stock-footage-burning-red-hot-sparks-rise-from-large-fire-in-the-night-sky-beautiful-abstract-background-on-the.webm" type="video/webm" />
	</video>
}

export default Video;
