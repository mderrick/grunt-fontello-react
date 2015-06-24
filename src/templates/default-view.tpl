var React = require('react'),
    css = require('<%= cssOutputPath %>');

var IconComponent = React.createClass({

    propTypes: {
        icon: React.PropTypes.oneOf([
            <% _.each(glyphs, function(i, index) { %><%= "'" + i['glyph-name'] + '\'' + (index === glyphs.length-1 ? '' : ',\n\t\t\t') %><% }); %>
        ])
    },

    /**
     * Default the icon to the first one just to show something
     * @return {Object} The default props
     */
    getDefaultProps: function() {
        return {
            icon: '<%= glyphs[0]['glyph-name'] %>'
        };
    },

    render: function () {
        return (
            <span className={'icon ' + this.props.icon}></span>
        );
    }

});

module.exports = IconComponent;