function saveOptions() {
	var appKey = document.getElementById('app_key').value;
	var apiUrl = document.getElementById('api_url').value;
	var insightsUrl = document.getElementById('insights_url').value;
	var cdnUrl = document.getElementById('cdn_url').value;
	var adminPortal = document.getElementById('admin_portal').value;
	var insightsPortal = document.getElementById('insights_portal').value;
	var smbPortalUrl = document.getElementById('smb_portal').value;
	var staticAssetPathUrl = document.getElementById('asset_path').value;

	console.log("appKey: " + appKey);
	chrome.storage.sync.set({
		onPrem_appKey: appKey,
		onPrem_apiUrl: apiUrl,
		onPrem_insightsUrl: insightsUrl,
		onPrem_cdnUrl: cdnUrl,
		onPrem_adminPortal: adminPortal,
		onPrem_insightsPortal: insightsPortal,
		onPrem_smbLookUpUrl: smbPortalUrl,
		onPrem_assetPath: staticAssetPathUrl
	}, function() {
		notify();
	});
}

function notify() {
	var status = document.getElementById('status');
	status.textContent = 'Configuration saved.';
	setTimeout(function() {
		status.textContent = '';
	}, 750);
}

function restoreOptions() {

	chrome.storage.sync.get({
		onPrem_appKey: '',
		onPrem_apiUrl: '',
		onPrem_insightsUrl: '',
		onPrem_cdnUrl: '',
		onPrem_adminPortal: '',
		onPrem_insightsPortal: '',
		onPrem_smbLookUpUrl: '',
		onPrem_assetPath: ''
	}, function(items) {
		document.getElementById('app_key').value = items.onPrem_appKey;
		document.getElementById('api_url').value = items.onPrem_apiUrl;
		document.getElementById('insights_url').value = items.onPrem_insightsUrl;
		document.getElementById('cdn_url').value = items.onPrem_cdnUrl;
		document.getElementById('admin_portal').value = items.onPrem_adminPortal;
		document.getElementById('insights_portal').value = items.onPrem_insightsPortal;
		document.getElementById('smb_portal').value = items.onPrem_smbLookUpUrl;
		document.getElementById('asset_path').value = items.onPrem_assetPath;
	});
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('gss-save').addEventListener('click', saveOptions);
