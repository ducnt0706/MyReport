/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function () {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function () {
    document.addEventListener("deviceready", this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function () {
    app.receivedEvent("deviceready");
  },
  // Update DOM on a Received Event
  receivedEvent: function (id) {
    $(document).ready(features.initEvents);
  },
};

let reviewArr = [
  {
    //img:"https://lh3.googleusercontent.com/3Aoz_N6Z1BE_EBDehRkVb2saJkyt-ZLzOjnwIMLxr-wb8fHGnZyWSlxiYxfFwC82-zN75uUELQ_1XKz0kkrsTrxWFV7fTDhJp6w=w960-rj-nu-e365",
    name: "BBQ",
    type: "grill",
    price: 10,
    dateTime: "10/10/2020",
    serviceRate: 3,
    cleanRate: 5,
    foodRate: 5,
    note: "Tasty Restaurant! I Like it.",
    reporter: "Mr. James",
  },
];

const features = {
  // TODO: Loading initialize events:
  initEvents: () => {
    //features.reviewRender();
    $("#myForm").on("submit", features.reviewAdding);
  },
  // TODO: Rendering reviews
  reviewRender: () => {
    if (reviewArr.length == 0 || !Array.isArray(reviewArr)) return;
    reviewArr.forEach((item) => {
      let reviewRow = `<li>
          <a href="#">
          <img src="./img/joo1.jpg" /> 
          <h3>${item.name}</h3> 
          <p>$ ${item.price}-${item.cleanRate}stars</p>  
          <p>${item.reporter}, October 04 2020</p>
          </a>
          <a href="#purchase" data-rel="popup" data-position-to="window" data-transition="pop" >Purchase album</a> 
        </li>`;
      $("#myList").prepend(reviewRow);
    });
  },
  // TODO: Adding new review:
  reviewAdding: (e) => {
    e.preventDefault();
    // Get input values
    let nameVal = $("#inputName").val();
    let typeVal = $("#inputType").val();
    let priceVal = $("#inputPrice").val();
    let dateTimeVal = $("#inputDateTime").val();
    let serviceRatingVal = $("#inputServiceRating").val();
    let cleanRatingVal = $("#inputCleanRating").val();
    let foodRatingVal = $("#inputFoodRating").val();
    let noteVal = $("#inputNote").val();
    let reporterVal = $("#inputReporter").val();
    // Save to database
    console.log(`${nameVal},${typeVal},,,`);
  },
  // TODO: Remove review
  reviewRemoving: (id) => {},
};
