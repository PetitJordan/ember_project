import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),

    actions: {
        authWithGoogle(){
            this.get('session').authenticate('authenticator:torii','google-oauth2-bearer')
                .catch((reason) => {
                   this.set('errorMessage', reason.error || reason);
                });
        },
        goHome(){
            this.tarfet.transitionTo('home');
        }
    }
});
