/* common to webview, tabrenderer, etc */

function navigate(tabId, newURL) {
	newURL = urlParser.parse(newURL);

	currentTask.tabs.update(tabId, {
		url: newURL
	});

	updateWebview(tabId, newURL);

	leaveTabEditMode({
		blur: true
	});
}

//destroys the webview and tab element for a tab
function destroyTab(id) {

	var tabEl = getTabElement(id);
	tabEl.parentNode.removeChild(tabEl);

	var t = currentTask.tabs.destroy(id); //remove from state - returns the index of the destroyed tab
	destroyWebview(id); //remove the webview

}

function destroyTask(id) {
	var task = tasks.get(id);
<<<<<<< HEAD
=======

	task.tabs.forEach(function (tab) {
		destroyWebview(tab.id);
	});

	tasks.destroy(id);
}

/* switches to a tab - update the webview, state, tabstrip, etc. */
>>>>>>> origin/tasks-overlay

	task.tabs.forEach(function (tab) {
		destroyWebview(tab.id);
	});

	tasks.destroy(id);
}

//destroys a tab, and either switches to the next tab or creates a new one
function closeTab(tabId) {

	/* disabled in focus mode */
	if (isFocusMode) {
		showFocusModeError();
		return;
	}

	if (tabId == currentTask.tabs.getSelected()) {
		var currentIndex = currentTask.tabs.getIndex(currentTask.tabs.getSelected());
		var nextTab = currentTask.tabs.getAtIndex(currentIndex - 1) || currentTask.getAtIndex(currentIndex + 1);

		destroyTab(tabId);

<<<<<<< HEAD
		if (nextTab) {
			switchToTab(nextTab.id);
		} else {
			addTab();
		}
=======
	currentTask.tabs.setSelected(id);
	setActiveTabElement(id);
	switchToWebview(id);
>>>>>>> origin/tasks-overlay

	} else {
		destroyTab(tabId);
	}

<<<<<<< HEAD
	/* switches to a tab - update the webview, state, tabstrip, etc. */

	function switchToTab(id, options) {
=======
	var tabData = currentTask.tabs.get(id);
	setColor(tabData.backgroundColor, tabData.foregroundColor);
>>>>>>> origin/tasks-overlay

		options = options || {};

<<<<<<< HEAD
		/* tab switching disabled in focus mode */
		if (isFocusMode) {
			showFocusModeError();
			return;
=======
	setTimeout(function () {
		if (currentTask.tabs.get(id) && currentTask.tabs.getSelected() == id) {
			currentTask.tabs.update(id, {
				lastActivity: Date.now(),
			});
			tabActivity.refresh();
>>>>>>> origin/tasks-overlay
		}

		leaveTabEditMode();

		currentTask.tabs.setSelected(id);
		setActiveTabElement(id);
		switchToWebview(id);

		if (options.focusWebview != false && !isExpandedMode) { //trying to focus a webview while in expanded mode breaks the page
			getWebview(id).focus();
		}

		var tabData = currentTask.tabs.get(id);
		setColor(tabData.backgroundColor, tabData.foregroundColor);

		//we only want to mark the tab as active if someone actually interacts with it. If it is clicked on and then quickly clicked away from, it should still be marked as inactive

		setTimeout(function () {
			if (currentTask.tabs.get(id) && currentTask.tabs.getSelected() == id) {
				currentTask.tabs.update(id, {
					lastActivity: Date.now(),
				});
				tabActivity.refresh();
			}
		}, 2500);

		sessionRestore.save();

	}
