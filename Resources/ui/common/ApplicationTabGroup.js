function ApplicationTabGroup(AboutWindow,ConvWindow,CalcWindow,ReferenceWindow) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new AboutWindow(),
		win2 = new ConvWindow(),
		win3 = new CalcWindow(),
		win4 = new ReferenceWindow();
	
	var tab1 = Ti.UI.createTab({
		title: L('abUs'),
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('unitConv'),
		window: win2
	});
	win2.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
		title: L('calc'),
		window: win3
	});
	win3.containingTab = tab3;
	
	var tab4 = Ti.UI.createTab({
		title: L('ref'),
		window:win4
	});
	win4.containingTab = tab4;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	self.addTab(tab4);
	
	return self;
};

module.exports = ApplicationTabGroup;
