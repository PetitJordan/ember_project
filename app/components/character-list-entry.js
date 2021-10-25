import Ember from 'ember';

export default Ember.Component.extend({
    init(){
        this._super(...arguments);
        this.set('showDetails',false);
        this.set('buttonTxt', "Deetz");
    },

    actions:{
        showCharacterDetails(){
            console.log('Component: Character details view for ID: ' + this.get('character').id);
            if (this.showDetails === false){
                this.set('showDetails',true);
                this.set('buttonTxt', "Less");
            }else{
                this.set('showDetails',false);
                this.set('buttonTxt', "Deetz");
            }
        }
    }
});
