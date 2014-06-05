function ConvWindow() {
	var volumes = ["acre-ft","cfs-days","gallons","cubic-ft","cubic meters","imperial gallons","million gallons","liters"];
	var flows = ["cfs","acre-ft/yr","gal/day","liters/second","gal/min","mil gal/day"];
	var lengths = ["miles","kilometers","feet","rods"];
	var area = ["acres","square feet","hectares"];
	
	var self = Ti.UI.createWindow({
		title:"Converter",
		backgroundColor:'white'
	});
	var typePicker = Ti.UI.createPicker({
		top:20,left:15,right:15
	});
	
	var data = [];
	data[0] = Ti.UI.createPickerRow({title:"Volume",custom_item:"volu"});
	data[1] = Ti.UI.createPickerRow({title:"Flow Rate",custom_item:"flow"});
	data[2] = Ti.UI.createPickerRow({title:"Length",custom_item:"leng"});
	data[3] = Ti.UI.createPickerRow({title:"Area",custom_item:"area"});
	
	typePicker.selectionIndicator = true;
	typePicker.add(data);
	self.add(typePicker);
	typePicker.setSelectedRow(0,0,true);
	
	var rows_volumes_1 = [];
	for (var i=0;i<volumes.length;i++) {
		rows_volumes_1.push(Ti.UI.createPickerRow({id:i,title: volumes[i]}));
	}
	var rows_volumes_2 = rows_volumes_1;
	
	var rows_flows_1 = [];
	for (var i=0;i<flows.length;i++) {
		rows_flows_1.push(Ti.UI.createPickerRow({id:i,title: flows[i]}));
	}
	var rows_flows_2 = rows_flows_1;
	
	var rows_length_1 = [];
	for (var i=0;i<lengths.length;i++) {
		rows_length_1.push(Ti.UI.createPickerRow({id:i,title: lengths[i]}));
	}
	var rows_length_2 = rows_length_1;
	
	var rows_area_1 = [];
	for (var i=0;i<area.length;i++) {
		rows_area_1.push(Ti.UI.createPickerRow({id:i,title: area[i]}));
	}
	var rows_area_2 = rows_area_1;
	
	var column_volume_1 = Ti.UI.createPickerColumn({
		rows: rows_volumes_1, font: {fontSize: "12"}
	});
	var column_volume_2 = Ti.UI.createPickerColumn({
		rows: rows_volumes_2, font: {fontSize: "12"}
	});
	
	var column_flows_1 = Ti.UI.createPickerColumn({
		rows: rows_flows_1, font: {fontSize: "12"}
	});
	var column_flows_2 = Ti.UI.createPickerColumn({
		rows: rows_flows_2, font: {fontSize: "12"}
	});
	
	var column_length_1 = Ti.UI.createPickerColumn({
		rows: rows_length_1, font: {fontSize: "12"}
	});
	var column_length_2 = Ti.UI.createPickerColumn({
		rows: rows_length_2, font: {fontSize: "12"}
	});
	
	var column_area_1 = Ti.UI.createPickerColumn({
		rows: rows_area_1, font: {fontSize: "12"}
	});
	var column_area_2 = Ti.UI.createPickerColumn({
		rows: rows_area_2, font: {fontSize: "12"}
	});
	
	var picker_volume = Ti.UI.createPicker({
		useSpinner: true,
		type: Ti.UI.PICKER_TYPE_PLAIN,
		top: 150, height: 200,
		columns: [ column_volume_1, column_volume_2 ],
		visible: true
	});
	var picker_flow = Ti.UI.createPicker({
		useSpinner: true,
		type: Ti.UI.PICKER_TYPE_PLAIN,
		top: 150, height: 200,
		columns: [ column_flows_1, column_flows_2 ],
		visible: false
	});
	var picker_length = Ti.UI.createPicker({
		useSpinner: true,
		type: Ti.UI.PICKER_TYPE_PLAIN,
		top: 150, height: 200,
		columns: [ column_length_1, column_length_2 ],
		visible: false
	});
	var picker_area = Ti.UI.createPicker({
		useSpinner: true,
		type: Ti.UI.PICKER_TYPE_PLAIN,
		top: 150, height: 200,
		columns: [ column_area_1, column_area_2 ],
		visible: false
	});
	
	self.add(picker_volume);
	self.add(picker_flow);
	self.add(picker_length);
	self.add(picker_area);
	
	function make_picker_visible(visible) {
		switch (visible) {
			case "volu":
				picker_volume.visible = true;
				picker_flow.visible = false;
				picker_length.visible = false;
				picker_area.visible = false;
				break;
			case "flow":
				picker_volume.visible = false;
				picker_flow.visible = true;
				picker_length.visible = false;
				picker_area.visible = false;
				break;
			case "leng":
				picker_volume.visible = false;
				picker_flow.visible = false;
				picker_length.visible = true;
				picker_area.visible = false;
				break;
			case "area":
				picker_volume.visible = false;
				picker_flow.visible = false;
				picker_length.visible = false;
				picker_area.visible = true;
				break;
			default:
				picker_volume.visible = true;
				picker_flow.visible = false;
				picker_length.visible = false;
				picker_area.visible = false;
				break;
		}
	}
	
	typePicker.addEventListener('change',function(e){
		var picked = e.row.custom_item;
		make_picker_visible(picked);
	});
	
	var converter_input_1 = Ti.UI.createTextField({
		visible:true,
		width:225, top: 350, left:10,
		keyboardType:Ti.UI.KEYBOARD_DECIMAL_PAD,
		clearOnEdit:true,
		enabled:true
	});
	var converter_input_2 = Ti.UI.createTextField({
		visible:true,
		width:225, top: 350, right:10,
		keyboardType:Ti.UI.KEYBOARD_DECIMAL_PAD,
		clearOnEdit:true,
		enabled:true, editable:false
	});
	self.add(converter_input_1);
	self.add(converter_input_2);
	
	var goButton = Ti.UI.createButton({
		title: "Convert",
		top:420, height: 60
	});
	
	goButton.addEventListener('click',function() {
		doConversion();
	});
	
	self.add(goButton);
	function doConversion() {
		var cFlength = [
			[1,1.60934,5280,320], //miles
			[0.621371,1,3280.84,198.838782], //km
			[(1/5280),0.0003048,1,0.06060606], //ft
			[0.0003125,0.0050292,16.5,1] //rods
		];
		var cFarea = [
			[1,43560,0.404686], //acres
			[2.29e-5,1,9.29e-6], //sq feet
			[2.47105,107639,1] //hectares
		];
		var cFvolume = [
			[1,0.504164398,325900,43560,1233.48184,271368,0.3259,1233670], //acre-ft
			[1.98348,1,646317,86400.3888,0.028,538171,0.646317,2446580], //cfs-day
			[325828.8,0.00000154723,1,0.1337,0.003785,0.832674,0.000001,3.78541], //gallon
			[43560,0.00000485,7.48,1,0.0283,6.22883,0.00000748,28.3168], //cubic feet
			[1233,0.00017121,264.2,35.314,1,219.969,0.0002642,1000], //cubic meters
			[391304.09736,0.000001858145868,1.20095,0.16054372,0.00454609,1,0.00000120095,4.54609], //imperial gallons
			[325828800000,1.54723,1000000,133700,3785,832674,1,3785410], //million gallons
			[86074.8457536,0.000000408734844,0.264172,0.0353147,0.001,0.832674,0.000000264172,1] //liters
		];
		var cFflow = [
			[1,724.447336,646316.883,28.3168466,448.831168462748,0.646316883], // cfs
			[0.00138036259,1,892.151654,0.0390875156,0.61954975932571,0.000892151654], // acre-ft/year
			[0.00000154,0.00112088568,1,1382.59212,0.000694444444,0.000001], // gallons/day
			[0.0353146667,25.5836162,22824.4653,1,15.8503231,0.0228244653], // liters/sec
			[0.0022176,1.6140753792,1440,0.0630901964,1,0.00144], // gal/min
			[1.54,1120.886,1000000,1382592120,694.444,1] //1 mil gal/day
		];
		var current_picker = typePicker.getSelectedRow(0).custom_item;
		var input = parseFloat(converter_input_1.value);
		var result, conversionFactor;
		switch (current_picker) {
			case "leng":
				var unit1 = picker_length.getSelectedRow(0).id;
				var unit2 = picker_length.getSelectedRow(1).id;
				conversionFactor = cFlength[unit1][unit2];
				break;
			case "area":
				var unit1 = picker_area.getSelectedRow(0).id;
				var unit2 = picker_area.getSelectedRow(1).id;
				conversionFactor = cFarea[unit1][unit2];
				break;
			case "volu":
				var unit1 = picker_volume.getSelectedRow(0).id;
				var unit2 = picker_volume.getSelectedRow(1).id;
				conversionFactor = cFvolume[unit1][unit2];
				break;
			case "flow":
				var unit1 = picker_flow.getSelectedRow(0).id;
				var unit2 = picker_flow.getSelectedRow(1).id;
				conversionFactor = cFflow[unit1][unit2];
				break;
			default:
				conversionFactor = 0;
				break;
		}
		result = input*conversionFactor;
		converter_input_2.value = result;
	}
	return self;
}

module.exports = ConvWindow;