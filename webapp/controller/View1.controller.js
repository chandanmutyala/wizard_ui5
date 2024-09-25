sap.ui.define([
    "sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel'
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("wizards.controller.View1", {
        onInit: function () {
               var oModel = this.getOwnerComponent().getModel("dataModel");
                this.getView().setModel(oModel,"items");
                console.log(oModel);
        },
        onCategoryChange: function (oEvent) {
            // Get the selected key
            var selectedKey = oEvent.getSource().getSelectedKey();
            
            // Get references to the panels
            var oProjectPanel = this.byId("ProjectForm");
            var oProcurementPanel = this.byId("ProcurementForm");
            
            // Set visibility based on the selected key
            if (selectedKey === "ProjectForm") {
                oProjectPanel.setVisible(true);
                oProcurementPanel.setVisible(false);
            } else if (selectedKey === "ProcurementForm") {
                oProjectPanel.setVisible(false);
                oProcurementPanel.setVisible(true);
            }
        }
    });
});
