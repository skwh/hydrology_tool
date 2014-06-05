function CalcWindow() {
	var self = Ti.UI.createWindow({
		title:"Calculator",
		backgroundColor:'white'
	});
	//switches
	var typeSwitch = Titanium.UI.createSwitch({
		style:Titanium.UI.Android.SWITCH_STYLE_TOGGLEBUTTON,
		titleOff:"Flumes",
		titleOn:"Weirs",
		value:false,
		visible:true,
		top:5
	});
	var typeTwoSwitch_flumes = Titanium.UI.createSwitch({
		style:Titanium.UI.Android.SWITCH_STYLE_TOGGLEBUTTON,
		titleOff:"Parshall Flume",
		titleOn:"Palmer-Bowlus Flume",
		value:false,
		visible:true,
		top:85,
	});
	var typeTwoSwitch_weirs = Titanium.UI.createSwitch({
		style:Titanium.UI.Android.SWITCH_STYLE_TOGGLEBUTTON,
		titleOff:"V-Notch Weir",
		titleOn:"Rectangular Weir",
		value:false,
		visible:false,
		top:85,
	});
	//views
	var flumeView = Titanium.UI.createView({
		width:"100%",
		height:525,
		backgroundColor:"#FFFFFF",
		visible:true,
		top:155,
		layout:"vertical"
	});
	var weirView = Titanium.UI.createView({
		width:"100%",
		height:525,
		backgroundColor:"#FFFFFF",
		visible:false,
		top:155,
		layout:"vertical"
	});
	//ui elements
	var flume_parshall_size = Ti.UI.createPicker({
		visible:true,
		selectionIndicator:true
	});
	var flume_parshall_head = Ti.UI.createTextField({
		visible:true,
		width:250,
		keyboardType:Ti.UI.KEYBOARD_DECIMAL_PAD,
		hintText:"0",
		clearOnEdit:true
	});
	var flume_palmer_size = Ti.UI.createPicker({
		visible:true,
		selectionIndicator:true,
		enabled:false
	});
	var flume_palmer_head = Ti.UI.createTextField({
		visible:true,
		width:250,
		keyboardType:Ti.UI.KEYBOARD_DECIMAL_PAD,
		hintText:"0",
		clearOnEdit:true,
		enabled:false
	});
	var flume_parshall_size_label = Ti.UI.createLabel({
		text:"Size (in)",
		visible:true,
		color:"#000000",
		font:{
			fontSize:"7pt"
		},
		enabled:true
	});
	var flume_parshall_head_label = Ti.UI.createLabel({
		text:"Head (ft)",
		visible:true,
		color:"#000000",
		font:{
			fontSize:"7pt"
		},
		enabled:true
	});
	var flume_palmer_size_label = Ti.UI.createLabel({
		text:"Size (in)",
		visible:true,
		color:"#000000",
		font:{
			fontSize:"7pt"
		},
		enabled:false
	});
	var flume_palmer_head_label = Ti.UI.createLabel({
		text:"Head (ft)",
		visible:true,
		color:"#000000",
		font:{
			fontSize:"7pt"
		},
		enabled:false
	});
	
	var weir_v_angle = Ti.UI.createTextField({
		visible:true,
		width:250,
		keyboardType:Ti.UI.KEYBOARD_DECIMAL_PAD,
		hintText:"0",
		clearOnEdit:true,
		enabled:true
	});
	var weir_v_head = Ti.UI.createTextField({
		visible:true,
		width:250,
		keyboardType:Ti.UI.KEYBOARD_DECIMAL_PAD,
		hintText:"0",
		clearOnEdit:true,
		enabled:true
	});
	var weir_rect_crest = Ti.UI.createTextField({
		visible:true,
		width:250,
		keyboardType:Ti.UI.KEYBOARD_DECIMAL_PAD,
		hintText:"0",
		clearOnEdit:true,
		enabled:false
	});
	var weir_rect_head = Ti.UI.createTextField({
		visible:true,
		width:250,
		keyboardType:Ti.UI.KEYBOARD_DECIMAL_PAD,
		hintText:"0",
		clearOnEdit:true,
		enabled:false
	});
	var weir_v_angle_label = Ti.UI.createLabel({
		text:"Angle",
		visible:true,
		color:"#000000",
		font:{
			fontSize:"7pt"
		},
		enabled:true
	});
	var weir_v_head_label = Ti.UI.createLabel({
		text:"Head (ft)",
		visible:true,
		color:"#000000",
		font:{
			fontSize:"7pt"
		},
		enabled:true
	});
	var weir_rect_crest_label = Ti.UI.createLabel({
		text:"Crest (ft)",
		visible:true,
		color:"#000000",
		font:{
			fontSize:"7pt"
		},
		enabled:false
	});
	var weir_rect_head_label = Ti.UI.createLabel({
		text:"Head (ft)",
		visible:true,
		color:"#000000",
		font:{
			fontSize:"7pt"
		},
		enabled:false
	});
	
	var resultField_flume = Ti.UI.createTextField({
		visible:true,
		width:250,
		keyboardType:Ti.UI.KEYBOARD_DECIMAL_PAD,
		hintText:"0",
		editable:false
	});
	var resultField_flume_label = Ti.UI.createLabel({
		text:"cfs",
		visible:true,
		color:"#000000",
		font:{
			fontSize:"7pt"
		}
	});
	var resultField_weir = Ti.UI.createTextField({
		visible:true,
		width:250,
		keyboardType:Ti.UI.KEYBOARD_DECIMAL_PAD,
		hintText:"0",
		editable:false
	});
	var resultField_weir_label = Ti.UI.createLabel({
		text:"cfs",
		visible:true,
		color:"#000000",
		font:{
			fontSize:"7pt"
		}
	});
	//picker data
	var flume_parshall_pickerData = [];
	var parshall_width = [1,2,3,6,9,12,24,36,48,60,72,84,96,120,144,180,240,300,480,600]
	for (var i=0;i<20;i++) {
		var titleData = parshall_width[i] + " in";
		if (parshall_width[i] > 12) titleData += " (" +(parshall_width[i]/12)+ " ft)";
		flume_parshall_pickerData[i] = Ti.UI.createPickerRow({title:titleData,custom_item:parshall_width[i]});
	}
	flume_parshall_size.add(flume_parshall_pickerData);
	
	var flume_palmer_pickerData = [];
	for (var i=0;i<6;i++) {
		var customData = (i*2)+4;
		if (customData == 14) customData++;
		var titleData = customData + " in";
		flume_palmer_pickerData[i] = Ti.UI.createPickerRow({title:titleData,custom_item:customData});
	}
	flume_palmer_size.add(flume_palmer_pickerData);
	
	//add methods
	flumeView.add(flume_parshall_size_label);
	flumeView.add(flume_parshall_size);
	flumeView.add(flume_parshall_head_label);
	flumeView.add(flume_parshall_head);
	flumeView.add(flume_palmer_size_label);
	flumeView.add(flume_palmer_size);
	flumeView.add(flume_palmer_head_label);
	flumeView.add(flume_palmer_head);
	
	weirView.add(weir_v_angle_label);
	weirView.add(weir_v_angle);
	weirView.add(weir_v_head_label);
	weirView.add(weir_v_head);
	weirView.add(weir_rect_crest_label);
	weirView.add(weir_rect_crest);
	weirView.add(weir_rect_head_label);
	weirView.add(weir_rect_head);
	
	flumeView.add(resultField_flume);
	flumeView.add(resultField_flume_label);
	weirView.add(resultField_weir);
	weirView.add(resultField_weir_label);
	
	self.add(typeSwitch);
	self.add(typeTwoSwitch_flumes);
	self.add(typeTwoSwitch_weirs);
	self.add(flumeView);
	self.add(weirView);
	//methods
	typeSwitch.addEventListener('change',function(e) {
		if (typeSwitch.value) {
			typeTwoSwitch_flumes.visible = false;
			typeTwoSwitch_weirs.visible = true;
			flumeView.visible = false;
			weirView.visible = true;
		}
		if (!typeSwitch.value) {
			typeTwoSwitch_weirs.visible = false;
			typeTwoSwitch_flumes.visible = true;
			flumeView.visible = true;
			weirView.visible = false;
		}
	});
	
	typeTwoSwitch_flumes.addEventListener('change',function(e) {
		var newVal = typeTwoSwitch_flumes.value;
		if (newVal) { //palmer
			flume_palmer_size_label.enabled = true;
			flume_palmer_size.enabled = true;
			flume_palmer_head_label.enabled = true;
			flume_palmer_head.enabled = true;
			flume_parshall_size_label.enabled = false;
			flume_parshall_size.enabled = false;
			flume_parshall_head_label.enabled = false;
			flume_parshall_head.enabled = false;
		}
		if (!newVal) { //parshall
			flume_palmer_size_label.enabled = false;
			flume_palmer_size.enabled = false;
			flume_palmer_head_label.enabled = false;
			flume_palmer_head.enabled = false;
			flume_parshall_size_label.enabled = true;
			flume_parshall_size.enabled = true;
			flume_parshall_head_label.enabled = true;
			flume_parshall_head.enabled = true;
		}
	});
	
	typeTwoSwitch_weirs.addEventListener('change',function(e) {
		var newVal = typeTwoSwitch_weirs.value;
		if (newVal) {//rectangle
			weir_rect_crest_label.enabled = true;
			weir_rect_crest.enabled = true;
			weir_rect_head_label.enabled = true;
			weir_rect_head.enabled = true;
			
			weir_v_angle_label.enabled = false;
			weir_v_angle.enabled = false;
			weir_v_head_label.enabled = false;
			weir_v_head.enabled = false;
		}
		if (!newVal) {//v notch
			weir_rect_crest_label.enabled = false;
			weir_rect_crest.enabled = false;
			weir_rect_head_label.enabled = false;
			weir_rect_head.enabled = false;
			
			weir_v_angle_label.enabled = true;
			weir_v_angle.enabled = true;
			weir_v_head_label.enabled = true;
			weir_v_head.enabled = true;
		}
	});
	return self;
}

module.exports = CalcWindow;

function calculateFlume(type, width, head) {
	if (type == "parshall") {
		
	}
	if (type == "palmer") {
		
	}
}

function calculateWeir(type, width, head, angle) {
	var g = 9.81;
	var cd;
	if (type == "rect") {
		return 3.33*(width-0.2*head)*(Math.pow(head,3/2))
	}
	if (type == "v") {
		return (8/15)*cd*(Math.pow(2*g,0.5))*Math.tan(angle/2)*(Math.pow(head,5/2));
	}
}

