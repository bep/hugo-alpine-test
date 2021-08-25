import Alpine from 'alpinejs';

(function() {
	var model = {};

	model.Comp1 = function() {
		return {
			show: false,
			open: false,
			c1: 42,
			c3: 0,
			click: function() {
				this.c1 += 32 + this.c3 + this.$store.myglobal.c1;
				this.$dispatch('set-c1', this.c1);
			},
			data: { items: [] },
			init: function() {
				console.log('Comp1:', this.c1);
				this.data.items = [
					{ id: 1, name: 'Item1' },
					{ id: 2, name: 'Item2', isActive: true },
					{ id: 3, name: 'Item2' }
				];

				this.$watch('$store.myglobal.c1', (value) => console.log('wach global c1:', value));
			}
		};
	};

	model.Comp2 = function() {
		return {
			c2: 12,
			click: function() {
				this.c2 += this.c1;
			},
			init: function() {
				console.log('Comp2:', this.c2);
			}
		};
	};

	model.Comp3 = function() {
		return {
			c3: 10,
			c1: 0,
			click: function() {
				this.c3 += this.c1;
				this.$dispatch('set-c3', this.c3);
			},
			init: function() {
				console.log('Comp3:', this.c3);
			}
		};
	};

	window.model = model;

	window.Alpine = Alpine;

	Alpine.store('myglobal', {
		c1: 32,
		clickme: function() {
			this.c1 = this.c1 + 210;
		}
	});

	Alpine.start();
})();
