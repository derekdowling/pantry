/**
 * Gives the component router context to eliminate the need for controllers.
 *
 * Source: http://stackoverflow.com/a/30787510/2051788
 */
export function initialize(container, application) {
  application.inject('component', 'router', 'router:main');
}

export default {
  name: 'component-router-injector',
  initialize: initialize
};
