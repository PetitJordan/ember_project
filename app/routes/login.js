import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin,{
    // session: Ember.inject.service('session'),

    // actions: {
    //     authWithGoogle(){
    //         this.get('session').authenticate('authenticator:torii','google-oauth2-bearer')
    //             .catch((reason) => {
    //                this.set('errorMessage', reason.error || reason);
    //             });
    //     },
    //     goHome(){
    //         this.tarfet.transitionTo('home');
    //     }
    // }

});
