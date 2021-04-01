import { getSidePanelIframe } from '../util/playerFunction';

const addOverlay = () => {
	var html = "<wgss class='gss-global-black-overlay' style='display:none' > </wgss>";
	mg$("html").append(html);
};


const bootApplication = () => {
    console.log('Inside the boot application ');
	addOverlay();

	var imgStepLoader = '';
	var editStepLoader = '';


	var html = getSidePanelIframe() +
		"<wgss class='gss-screen-blackout'></wgss>" +
		editStepLoader +
		imgStepLoader +
		"<wgss id='gss-toast-msg'></wgss>";

	
    mg$("html").append(html);

	mg$(".gss-player-close-wrapper").click(function() {
		GmXt.sendMessageToApp('GM:action:close_video');
		GmXt.closeAppPanel();
	});


};

bootApplication();