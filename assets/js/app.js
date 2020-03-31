var model = {};

(function(ctx) {
	ctx.New = function() {
		return {
			show: false,
			open: false,
			data: {},
			init: function() {
				this.data.items = [ { name: 'Item1' }, { name: 'Item2', isActive: true }, { name: 'Item2' } ];
			}
		};
	};
})(model);
