// 只能输入正整数
Vue.directive('numberPlus', {
	bind: function(el) {
		el.handler = function() {
		el.value = Number(el.value.replace(/[^\d]/g,'')) || null;
	}
		el.addEventListener('input', el.handler)
	},
})

Vue.directive('numberPlusZero', {
	bind: function(el) {
		el.handler = function() {
			if(Number(el.value) === 0) {
				return 0
			}else{
				el.value = Number(el.value.replace(/[^\d]/g,'')) || null;
			}
	}
		el.addEventListener('input', el.handler)
	},
})