import Alpine from 'jslibs/alpinejs/v3/alpinejs/builds/module';

var debug = 0 ? console.log.bind(console, '[alpine-test]') : function() {};

(function() {
	//..
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
			data: {
				items: [ { id: 1, name: 'Item1' }, { id: 2, name: 'Item2', isActive: true }, { id: 3, name: 'Item3' } ]
			},
			init: function() {
				debug('Comp1:', this.c1);
				this.data.items = [
					{ id: 1, name: 'Item1' },
					{ id: 2, name: 'Item2', isActive: true },
					{ id: 3, name: 'Item3' }
				];

				this.$watch('$store.myglobal.c1', (value) => debug('wach global c1:', value));
			}
		};
	};

	model.CompPermanent = function() {
		return {
			show: false,
			open: false,
			data: {
				items: [ { id: 1, name: 'Item1' }, { id: 2, name: 'Item2', isActive: true }, { id: 3, name: 'Item3' } ]
			},
			init: function() {
				debug('Permanent:', this.data.items);
				this.data.items = [
					{ id: 1, name: 'Item1' },
					{ id: 2, name: 'Item2', isActive: true },
					{ id: 3, name: 'Item3' }
				];
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
				debug('Comp2:', this.c2);
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
				debug('Comp3:', this.c3);
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

	document.addEventListener('turbo:before-cache', () => {
		Alpine.stopObservingMutations();
		document.body.querySelectorAll('[data-turbo-permanent]').forEach((el) => {
			el._x_ignore = true;
		});
	});

	document.addEventListener('turbo:render', () => {
		if (document.documentElement.hasAttribute('data-turbo-preview')) {
			return;
		}
		Alpine.start();
	});

	Alpine.start();
})();

function beforeDomReady(callback) {
	if (document.readyState === 'loading') {
		document.addEventListener('readystatechange', () => {
			if (document.readyState === 'interactive') {
				callback();
			}
		});
	} else {
		callback();
	}
}
