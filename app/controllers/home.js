import Ember from 'ember';

export default Ember.Controller.extend({
    session : Ember.inject.service('session'),
    actions:{
        gotoMovies(){
            this.target.transitionTo('home.movies');
        },
        gotoCharacters(){
            this.target.transitionTo('home.characters');
        },
        gotoVideo(){
            this.target.transitionTo('home.video');
        },
        logout(){
            this.get('session').invalidate();
        }
    }
});
