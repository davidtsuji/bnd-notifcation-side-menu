var $ = require('jquery')
  , $body
  , $notificationSideMenu

/**
 * Show the menu
 */
function show() {

	$notificationSideMenu.addClass('show');
	$body.addClass('bnd-notification-side-menu-show');

}

/**
 * Hide the menu
 */
function hide() {

	$notificationSideMenu.removeClass('show');
	$body.removeClass('bnd-notification-side-menu-show');

}

$(function(){

	$notificationSideMenu = $('.bnd-notification-side-menu');
	$body = $('body');

	/**
	 * Show the menu if an element [data-bndNotificationSideMenuShow] is clicked
	 */
	$(document).on('click', '[bnd-notification-side-menu-show]', function(_event){

		if ($notificationSideMenu.hasClass('show')) return;
		
		_event.stopImmediatePropagation();
		show();

	});

	/**
	 * Hide the menu if anywhere except the menu is clicked
	 */
	$(document).on('click', function(_event){

		if ( ! $notificationSideMenu.hasClass('show')) return;

		if ($(_event.target).closest('.bnd-notification-side-menu').length == 0) {

			_event.preventDefault();
			hide();

		}
		
	});

});