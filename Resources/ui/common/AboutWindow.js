function AboutWindow() {
	var self = Ti.UI.createWindow({
		title:"About Us",
		backgroundColor:'white'
	});
	
	var scrollView = Ti.UI.createScrollView({
		contentWidth:'auto',
		contentHeight:'auto',
		showVerticalScrollIndicator:true,
		height:'100%',
		width:'100%'
	});
	
	var label = Ti.UI.createLabel({
		text:"Water Resources Engineering for the Rocky Mountain West\n\nThrough our clients, High Country Hydrology provides water resources engineering services to one in seven Coloradans.  Our staff has earned a reputation for providing professional services in a timely manner.\nWe believe that coupling conservative engineering practice with clear communication is key for our clients' satisfaction.  While our expertise in water resources planning and management is that of a large firm, our small size means that you will talk to a knowledgable person every time you call.\n\nAt High Country Hydrology we believe we are responsible for three things:\n-to help our clients steward the resources they posess,\n-to help people in developing areas better themselves, and\n-to help our staff reach their full potential as water resources experts.\n\nServing Our Clients\nWhy hire High Country Hydrology? Some clients need additional manpower to complete projects faster than they could do the work themselves. High Country can either complete projects independently or provide supplemental manpower to the client's existing staff. Other clients need expertise they themselves do not have. In these cases, part of our obligation is to educate the client about what we are doing and why, so they can explain our work to the people they report to. Lastly, some clients use High Country's experience to objectively review their work before taking it to their governing board or the public. This independent review provides credibility to the Client's own work.\n\nGiving Back\nHigh Country Hydrology provides pro bono services for humanitarian projects in developing areas. Donating time for pro bono work enables HCH and, indirectly, our clients to make the world a better place for everyone.\n\nStaying Sharp\nHigh Country pursues continuing education and career development opportunities so we can continue to provide the professional water resources engineering the world needs today and will continue to need in the future.",
		width:"80%",
		height:Ti.UI.HEIGHT,
		textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
		color:'#000000'
	});
	scrollView.add(label);
	self.add(scrollView);
	
	return self;
}

module.exports = AboutWindow;