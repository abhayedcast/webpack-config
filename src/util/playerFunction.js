export const _location = () => {
	return window.location;
};

export const getPageDomain = () => {
	var d = (_location().host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1];
	if (d)
		return d;
	else
		return _location().host;
};

export const getExtUrl = (localUrl) => {
    return chrome.extension.getURL(localUrl);
};

export const getSidePanelIframe = () => {
	var u = getExtUrl("index.html") + "?domainName=" + GmXt.getPageDomain();

	var html = "<wgss class='gss-panel'>";

    html += "<wgss id='gss-panel-close' class='gss-panel-close'>" +
        "<wgss class='gss-close-lbl'><span id='gss-close-lbl-svg' ></span> </wgss>" +
        "</wgss>";
	


	var cname = 'gss-app';
        cname += ' ' + GmXt.conf.appName + '-side-panel';

	html += "<iframe id='gss-app' name='guideme-iframe' " +
		"	class='" + cname + "'" +
		"	src='" + u + "' allowfullscreen='true'  allow='microphone; camera' ></iframe> " +
		"</wgss>";

	return html;

};