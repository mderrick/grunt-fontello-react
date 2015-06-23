var React = require('react'),
    css = require('<%= cssOutputPath %>');

var IconComponent = React.createClass({

    propTypes: {
        icon: React.PropTypes.oneOf([
            <% _.each(glyphs, function(i) { %><%= "'" + i['glyph-name'] + "',\n\t\t\t" %><% }); %>
        ])
    },

    getDefaultProps: function() {
        return {
            icon: '<%= glyphs[0]['glyph-name'] %>'
        };
    },

    render: function () {
        return (
            <span className={this.props.icon}></span>
        );
    }

});

module.exports = IconComponent;