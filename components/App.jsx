/** @jsx React.DOM */

var React = require('react');
var VideoPlayer = require('./video-player.jsx');

var playerConfig = {
	video: {
		url: "sample1.mp4",
		type: "video/mp4"
	},

	playlist: [
		{
			id: "1",
			name: "sample2",
			url: "sample2.mp4",
			type: "video/mp4"
		},
		{
			id: "2",
			name: "sample1",
			url: "sample1.mp4",
			type: "video/mp4"
		},
	]
}

React.render(
	<div className="app">
		<VideoPlayer config={playerConfig}/>
	</div>, 

	document.body);