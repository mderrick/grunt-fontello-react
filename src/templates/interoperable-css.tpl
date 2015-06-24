/**
 * Interoperable CSS for use with Webpacks css-loader
 * http://glenmaddern.com/articles/interoperable-css
 * https://github.com/webpack/css-loader#css-modules
 */

@font-face {
  font-family: '<%= fontName %>';
  src: url('<%= eotFontPath %>?<%= timestamp %>');
  src: url('<%= eotFontPath %>?<%= timestamp %>#iefix') format('embedded-opentype'),
       url('<%= woffFontPath %>?<%= timestamp %>') format('woff'),
       url('<%= ttfFontPath %>?<%= timestamp %>') format('truetype'),
       url('<%= svgFontPath %>?<%= timestamp %>#fontello') format('svg');
  font-weight: normal;
  font-style: normal;
}

/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'fontello';
    src: url('../font/fontello.svg?73179758#fontello') format('svg');
  }
}
*/

.icon:before {
 	font-family: "<%= fontName %>";
	font-style: normal;
	font-weight: normal;
	speak: none;

	display: inline-block;
	text-decoration: inherit;
	width: 1em;
	margin-right: .2em;
	text-align: center;
	/* opacity: .8; */

	/* For safety - reset parent styles, that can break glyph codes*/
	font-variant: normal;
	text-transform: none;

	/* fix buttons height, for twitter bootstrap */
	line-height: 1em;

	/* Animation center compensation - margins should be symmetric */
	/* remove if not needed */
	margin-left: .2em;

	/* you can be more comfortable with increased icons size */
	/* font-size: 120%; */

	/* Font smoothing. That was taken from TWBS */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	/* Uncomment for 3D effect */
	/* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}

<% _.each(glyphs, function(i) { %>
.<%= i['glyph-name'] %>:before {
	composes: icon;
	content: '<%= i['unicode'] %>';
}
<% }); %>