/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gdsd/claims/crimePrevention/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});