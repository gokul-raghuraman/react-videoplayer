/** @jsx React.DOM */

var React = require('React');

module.exports = React.createClass({
	render: function() {
		console.log("CONFIG = " + JSON.stringify(this.props.config));
		return (
			<div className="video-player-container">
				<video id="video-player" width="100%" height="100%">
					<source src={this.props.config.video.url} type={this.props.config.video.type} />
					

				</video>

				<div id="video-player-controls" className="video-player-controls">
					<div className="seek-bar">
						<div className="seek-bar-lower" />
						
					</div>
					<div>

					</div>
				</div>
			</div>	
		);
	}
});