var app = angular.module("ondeck.common", []);
app.directive("ondeckHeader", function () {
  return {
    replace: 'true',
    restrict: 'E',   //element only
    template: '<div class="header" style="text-align: center"><img alt="" src="data:image/png;base64,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" /></div>'
	}
});

app.directive("ondeckFooter", function () {
  return {
	replace: 'true',
    restrict: 'E',   //element only
    template: '<div class="footer" style="text-align: center"><hr><small>Copyright © 2013 OnDeck, Inc. All rights reserved.</small></div>'
	}
});