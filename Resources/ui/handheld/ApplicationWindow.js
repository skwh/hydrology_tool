function ApplicationWindow() {
	var self = Ti.UI.createWindow({
		title:"HCH Unit Converter",
		backgroundColor:'#FFF000'
	});
	
	var button = Ti.UI.createButton({
		height:90,
		width:200,
		title:L('openWindow'),
		top:20
	});
	self.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: '#FF0000'
		}));
	});
	
	return self;
};

module.exports = ApplicationWindow;
