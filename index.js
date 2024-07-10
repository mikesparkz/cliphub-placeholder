function showNotifications(){
	var notification_popup = document.getElementById('notification-popup');
	var disabler = document.getElementById('popup-disabler');
    notification_popup.style.display = 'flex'; // Show the element
    disabler.style.display = 'block'; // Show the element   
}

function hideNotifications(){
var notification_popup = document.getElementById('notification-popup');
var disabler = document.getElementById('popup-disabler');
    notification_popup.style.display = 'none'; // Show the element
    disabler.style.display = 'none'; // Hide the element
}