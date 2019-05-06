$(function() {

	$(document).on("click", "#set-temperature", function() {
		$newDom = $('<div><div id="setting-row-name" class="form-row"><div class="form-label"><label class="control-label">Temperature</label></div><div id="setting-value-container-name" class="form-value"><input type="text" id="targetTempInput"><div class="setting-description">Set the target temperature in the incubator in Celsius. If the target temperature is higher than current temperature, heat bed will be turned on immediately, otherwise the incubator will wait for the temperature to drop to the target temperature and maintain it. If you want to convert Fahrenheit to Celsius, please refer to <a href="https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html" target="_blank">Celsius to Fahrenheit conversion</a>.</div></div></div></div>');

		freeboard.showDialog($newDom, "Set Temperature", "OK", "Cancel", function() {
			$targetTempInput = $("#targetTempInput");
			let targetTemp = $targetTempInput.val();
			if(!targetTemp || targetTemp.length === 0) return;

			$.ajax({
                url: "http://localhost:3000/incubator/target-temperature?newTargetTemp=" + targetTemp,
                type: "GET",
                dataType: "jsonp", // Use JSONP to handle CORS issue
                success: function (data) {
                    // Empty
                }
            });
		});
	});
	


});