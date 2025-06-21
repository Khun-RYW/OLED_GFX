Blockly.Blocks["oled_GFX.clear"] = {
	init: function() {
	this.appendDummyInput().appendField("Clear: ");
        this.appendDummyInput().appendField("I2C_addr")
		.appendField(new Blockly.FieldDropdown([
			["0x3C" , "60"],
			["0x3D" , "61"]
			]), "Address");
        this.appendDummyInput().appendField("Chip")
		.appendField(new Blockly.FieldDropdown([
			["SSD1306", "0"],
			["SH1106" , "1"]
			]), "ChipSet");
        this.appendDummyInput().appendField("Pins")
		.appendField(new Blockly.FieldDropdown([
			["up  " , "0"],
			["down" , "1"]
			]), "Rotation");
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(160);
	this.setTooltip("");
	this.setHelpUrl("");
}};

Blockly.Blocks["oled_GFX.print"] = {
	init: function() {
	this.appendDummyInput().appendField("Print: ");
        this.appendDummyInput().appendField("I2C addr")
		.appendField(new Blockly.FieldDropdown([
			["0x3C" , "60"],
			["0x3D" , "61"]
			]), "Address");
	this.appendValueInput("Row").setCheck("Number" ).appendField("Line");
	this.appendValueInput("Col").setCheck("Number" ).appendField("Column");
	this.appendValueInput("Str").setCheck("String" ).appendField("Message");
	this.appendDummyInput().appendField("Font")
		.appendField(new Blockly.FieldDropdown(
			[ [ "Small 6x8", "0" ], [ "Large 10x16", "1" ] ]), "Size");
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(160);
	this.setTooltip("");
	this.setHelpUrl("");
}};

Blockly.Blocks["oled_GFX.printGFX"] = {
	init: function() {
	this.appendDummyInput().appendField("PrintGFX: ");
        this.appendDummyInput().appendField("I2C addr")
		.appendField(new Blockly.FieldDropdown([
			["0x3C" , "60"],
			["0x3D" , "61"]
			]), "Address");
	this.appendValueInput("Row").setCheck("Number" ).appendField("Line");
	this.appendValueInput("Col").setCheck("Number" ).appendField("Column");
	this.appendValueInput("Str").setCheck("String" ).appendField("Message TH/EN");
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(160);
	this.setTooltip("");
	this.setHelpUrl("");
}};

Blockly.Blocks['oled_GFX.num2str'] = {
	init: function() {
		this.appendDummyInput().appendField("Num2Str");
		//read this in generator V       type check V                     V display this in block
		this.appendValueInput("Value" ).setCheck("Number").appendField("Number");
		this.appendValueInput("Width" ).setCheck("Number").appendField("Width");
		this.appendDummyInput().appendField("Decimals")
	 		.appendField(new Blockly.FieldDropdown([
	 			["0", "0"],
				["1", "1"],
	  			["2", "2"],
	  			["3", "3"],
	  			["4", "4"],
	  			["5", "5"],
	  			["6", "6"]
				]), "Decimals");
		this.appendDummyInput().appendField("Format")
			.appendField(new Blockly.FieldDropdown([
				["integer    ", "0"],
				["hexadecimal", "1"],
				["hex with 0s", "2"],
				["fixed_point", "3"],
				["exponential", "4"]
			   ]), "Format");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(160);
		this.setTooltip("");
		this.setHelpUrl("");
}};
