var React = require('react'),
    css = require('<%= cssOutputPath %>');

var IconComponent = React.createClass({

    propTypes: {
        name: React.PropTypes.oneOf([
            <% _.each(glyphs, function(i, index) { %><%= "'" + i['glyph-name'] + '\'' + (index === glyphs.length-1 ? '' : ',\n\t\t\t') %><% }); %>
        ])
    },

    /**
     * Default the icon to the first one just to show something
     * @return {Object} The default props
     */
    getDefaultProps: function() {
        return {
            name: '<%= glyphs[0]['glyph-name'] %>'
        };
    },

    render: function () {
        return (
            <span className={css[this.props.name]}></span>
        );
    }

});

module.exports = IconComponent;