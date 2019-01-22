chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			var replace = function () {
				var favicon = document.querySelector('#favicon');
				if (favicon) {
					favicon.href = chrome.runtime.getURL('/icons/icon32.png');
				}
			};
			replace();
			setInterval(replace, 2000); //replace frequently in case it is swapped out for an ugly one
		}
	}, 100);
});