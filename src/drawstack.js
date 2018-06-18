

var DrawStack = function () {

	var drawstack = {

		stack: [],

		drawstack.add: function () {

			var block = CreateBlock();
			drawstack.stack.push(block);
		},

		drawstack.remove: function () {
			var index = drawstack.stack.indexOf(5);
			if (index > -1) {
			  drawstack.stack.splice(index, 1);
			}
		},
	};

	return drawstack;
}

function CreateBlock () {

	var block = {

	    element: document.createElement("img"),

	    addStyle : function(style) {
	        Object.assign(this.element.style, style);
			return this;
	    },

	    addImage : function(src) {
	        this.element.src = src;
			return this;
	    }
	};

	document.body.appendChild(block.element);
	return block;
}