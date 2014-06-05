function ReferenceWindow() {
	var self = Ti.UI.createWindow({
		title:"Reference",
		backgroundColor:'#FFFFFF'
	});
	
	var scrollView = Ti.UI.createScrollView({
		contentWidth:'auto',
		contentHeight:'auto',
		showVerticalScrollIndicator:true,
		height:'99%',
		width:'99%'
	});
	
	var volumeText = Ti.UI.createLabel({
		width:Ti.UI.SIZE,
		height:Ti.UI.HEIGHT,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		text:"Volume Conversions\n1 acre-ft = 0.504 cfs-days = 325.851 gallons = 43,560 cubic ft = 1233 cubic meters\n1 US gallon = 0.1337 cubic ft = 3.79 liters = 0.833 imperial gallons\n1 cfs-day = 1.983 acre-feet = 646,320 gallons = 2477 cubic meters\n1 million gallons = 3.07 acre-feet = 1.547 cfs-days\n1 cubic meter - 35.3 cubic feet = 264 gallons = 1000 liters\n\nFlow Rates\n1 cfs = 1.983 acre-feet/day = 449 gallons/minute = 0.646 million gallons/day\n1 gallon/minute(gpm) = 1.61 acre-ft/year = 1440 gallons/day = 0.0631 liters/second\n1 million gallons/day = 694 gallons/minute = 1.547 cfs = 1120 acre-feet/year\n\nLength\n1 mile = 5280 feet = 1.609 kilometers = 320 rods\n\nArea\n1 acre = 43,560 square feet = 0.4047 hectares\n1 square mile = 640 acres = 259 hectares = 2.59 square kilometers\n\nPressure\n1 psi = 2.31 ft. water = 0.068 atmospheres = 2.04 in mercury\n\nFlow Rate\n1cfs = 38.4 miner's inches (CO)\n1 cfs = 40 miner's inches (AZ, CA, NV, OR)\n1 cfs = 50 miner's inches = (ID, KS, NE, NM, ND, SD, UT)\n\nPower\n1 horsepower = 550 foot-pounds/second = 0.7457 kilowatts\n\nEnergy/Area\n1 langley = 1 calorie/square centimeter\n\nConcentration\n1 milligram/liter = 1 part per million (<7000 mg/l) = 8.35 lb/MG\n\nPermeability\n1 gallon/day/square foot = 0.1337 feet/day\n\nVelocity\n1 ft/second = 86,400 ft/day = 0.6816 mph = 2.097 kmh\n\nTemperature\ndegrees F = 9/5 degrees C + 32 : degrees K = degrees C + 273.15 : degrees R = degrees F + 459.67\n\nVolume\n1 barrel(oil) = 42 gallons = 5.615 cubic feet\n\nWeight\n1 cubic foot of water = 62.4 pounds @ 60 degrees F",
		color:'#000000'
	});
	scrollView.add(volumeText);
	self.add(scrollView);
	return self;
}

module.exports = ReferenceWindow;