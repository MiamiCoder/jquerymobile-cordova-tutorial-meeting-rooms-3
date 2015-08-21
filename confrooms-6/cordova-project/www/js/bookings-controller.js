var BookIt = BookIt || {};

BookIt.BookingsController = function () {
    this.localStorageKey = "bookit.bookings";
    this.$bookingsPage = null;
    this.$btnRefresh = null;
};

BookIt.BookingsController.prototype.init = function () {
    this.$bookingsPage = $("#page-bookings");
    this.$btnRefresh = $("#btn-refresh", this.$bookingsPage);
};

BookIt.BookingsController.prototype.getBookingsFromLocalStorage = function () {
    return window.localStorage.getItem(this.localStorageKey) || [];
};

BookIt.BookingsController.prototype.showBookings = function () {

    var bookings = this.getBookingsFromLocalStorage();

    // TODO: Build bookings DOM.
};

BookIt.BookingsController.prototype.getBookingsFromServer = function (successCallback, errorCallback) {
    var session = BookIt.Session.getInstance().get();

    if (!session) {
        return errorCallback({ err: BookIt.ApiMessages.SESSION_NOT_FOUND });
    }

    $.ajax({
        type: 'GET',
        url: BookIt.Settings.bookingsUrl + "/sessionId=" + session.sessionId,
        success: successCallback,
        error: errorCallback
    });
};

BookIt.BookingsController.prototype.onRefreshCommand = function () {
    
    this.getBookingsFromServer(
        function (resp) {
            // TODO
        },
        function (error) {
            // TODO
        }
    );
};