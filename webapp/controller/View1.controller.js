sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/Device"
], function (Controller,Device) {
	"use strict";

	return Controller.extend("gdsd.claims.crimePrevention.controller.View1", {
		onInit: function () {
			this._mViewSettingsDialogs = {};
		},
		//Called to open dialog
		createFormDialog: function (sDialogFragmentName) {

			// https://stackoverflow.com/questions/55667673/how-to-remove-duplicates-and-display-only-unique-values-in-viewsettingsitem
			var oDialog = this._mViewSettingsDialogs[sDialogFragmentName];
			if (!oDialog) {
				oDialog = sap.ui.xmlfragment(sDialogFragmentName, this);
				this._mViewSettingsDialogs[sDialogFragmentName] = oDialog;

				if (Device.system.desktop) {
					oDialog.addStyleClass("sapUiSizeCompact");
				}
			}
			return oDialog;
		},
			handleButtonPressed: function () {
			this.createFormDialog("gdsd.claims.crimePrevention.view.AddBeneficiaries").open();
		},
		onCancel: function () {
			//Cater for the age group selected 
			var oDialogKey,
				oDialogValue;

			for (oDialogKey in this._mViewSettingsDialogs) {
				oDialogValue = this._mViewSettingsDialogs[oDialogKey];

				if (oDialogValue) {
// 					var oInput1 = sap.ui.getCore().byId("form0");

// oInput1.setValue("");
					oDialogValue.close();
					
				}
			}
		},
			changeRegion: function (e) {
		//	var FormElement = this.getView().byId("element1");
				var FormElement = sap.ui.getCore().byId("element1");
			if (e.getParameter("selectedIndex") === 0) {

				
				FormElement.setVisible(true);

			} else {

				
				FormElement.setVisible(false);
			}

		}
		,
			onTofilterAtoB:function(){
			this.byId("bar0").setSelectedKey("part1");
		},
			onTofilterBtoA:function(){
			this.byId("bar0").setSelectedKey("part0");
		},
			onTofilterBtoC:function(){
			this.byId("bar0").setSelectedKey("part2");
		},
			onTofilterCtoD:function(){
			this.byId("bar0").setSelectedKey("part3");
		},
			onTofilterCtoB:function(){
			this.byId("bar0").setSelectedKey("part1");
		},
			onTofilterDtoC:function(){
			this.byId("bar0").setSelectedKey("part2");
		}
	});
});