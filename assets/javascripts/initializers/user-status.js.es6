export default {
  name: 'userStatus',
  initialize() {
  	var userStatus = Discourse.User.current();
    if ( userStatus ) {
    	$('body').addClass('logged-in');
    } else {
    	$('body').addClass('logged-out');
    }
  }
};