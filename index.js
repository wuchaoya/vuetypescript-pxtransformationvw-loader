const loaderUtils = require('loader-utils')
// 默认参数
const defaultsProp = {
	unitToConvert: 'px',
	viewportWidth: 350,
	unitPrecision: 5,
	viewportUnit: 'vw',
	fontViewportUnit: 'vw',
	minPixelValue: 1
}
const opts = loaderUtils.getOptions(this);

const config = Object.assign({}, defaultsProp, opts);
const ZPXRegExp = /(\d+)px/

function createPxReplace (viewportSize, minPixelValue, unitPrecision, viewportUnit) {
	return function ($0, $1) {
		if (!$1) return
		var pixels = parseFloat($1)
		if (pixels <= minPixelValue) return
		return toFixed((pixels / viewportSize * 100), unitPrecision) + viewportUnit
	}
}

function toFixed (number, precision) {
	var multiplier = Math.pow(10, precision + 1),
		wholeNumber = Math.floor(number * multiplier)
	return Math.round(wholeNumber / 10) * 10 / multiplier
}

module.exports = function (source) {
	const pxGlobalRegExp = new RegExp(ZPXRegExp.source, 'g');
	if (this.cacheable) {
	  this.cacheable();
	}

	if (pxGlobalRegExp.test(source)) {
		return source.replace(pxGlobalRegExp, createPxReplace(defaultsProp.viewportWidth, defaultsProp.minPixelValue, defaultsProp.unitPrecision, defaultsProp.viewportUnit));
	} else {
		return source;
	}
}
