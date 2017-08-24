export const statBox = Vue.component('stat-box', {
    props: ['statType', 'stat', 'statModifiers', "index"],
	data: function() {
        var statObj = { value: this.stat };
        statObj.innerkey = this.statType + '-value';
        return statObj;
	},
	computed: {
		finalStatistic: function(){
			return this.value + this.statModifiers[this.statType];
		},
		activeModifier: function(){
			let total = this.value + this.statModifiers[this.statType];
			switch (total) {
				case ( 8 <= total <= 10 ):

					break;
				default:

			}
		}
	},
	render: function render(h) {
        return (
            <div id={ this.statType }>
                <div id={ this.innerkey }>
                    { this.finalStatistic }
                </div>
            </div>
        );
    }
});
