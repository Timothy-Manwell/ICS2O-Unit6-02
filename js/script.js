// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-02/sw.js", {
    scope: "/ICS2O-Unit6-02/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  let localStorage,cookieTotal = 0

  localStorage,cookieTotal = localStorage,cookieTotal + 1

  document.getElementById("cookie").innerHTML = "You have: " + localStorage,cookieTotal + " cookies."
}
