var React = require('react'),
    Icon = require('./components/view.js'),
    Content = React.createClass({
        render: function() {
            return (
                <div>
                    <a href="http://stackoverflow.com/users/976497/matt-derrick" target="_blank">
                        <Icon name="stackoverflow"/>
                    </a>
                    <a href="https://github.com/mderrick/" target="_blank">
                        <Icon name="github-squared"/>
                    </a>
                </div>
            );
        }
    });

React.render(
    <Content/>,
    document.getElementById('content')
);