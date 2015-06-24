var React = require('react'),
    Icon = require('./components/view.js'),
    Content = React.createClass({
		render: function() {
			return (
				<div>
					<Icon name="stackoverflow"/>
					<Icon name="github-squared"/>
				</div>
			);
		}
	});

React.render(
	<Content/>,
    document.getElementById('content')
);