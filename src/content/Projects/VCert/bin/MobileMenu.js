"use strict";

$("#mobileDropdown").click(function () {
  $("#mobileHeaderLinks").toggle(0);
  $("#mobileLinks").toggle(0);
  $("#mobileDropdown").toggleClass("active");
});

function closeMobileMenu() {
  $("#mobileHeaderLinks").hide(0);
  $("#mobileLinks").hide(0);
  $("#mobileDropdown").removeClass("active");
}