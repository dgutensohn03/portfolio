"use strict";

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true
		});
	} else {
		obj[key] = value;
	}
	return obj;
}

var matchedArray = [];
auth.onAuthStateChanged(function (user) {
	if (user) {
		var userId = firebase.auth().currentUser.uid;
		firebase.database().ref('/' + dbLocation + '/' + userId).once('value').then(function (snapshot) {
			var hasAdminRights = snapshot.val() && snapshot.val().admin || false;

			if (hasAdminRights == true) {
				var onStart = function onStart() { //gatherData();
					//newTable(1);
					//newTable(2);
					//newTable(3);
				};

				var newEntry = function newEntry(TeamList, matchedArray) {
					var newTable = document.createElement("table"); ////console.log(TeamList)

					for (var entry = 0; entry < TeamList.length; entry++) {
						var newTable = document.createElement("table");
						newTable.className = 'newUser_' + matchedArray[entry];

						if ((entry + 1) % 2 == 0) {
							////////console.log('even')
							newTable.classList.add("table");
							newTable.classList.add("table-borderless");
							newTable.classList.add("table_LG");
						} else {
							////////console.log('odd')
							newTable.classList.add("table");
							newTable.classList.add("table-borderless");
						} //"Date VCERT Class Completed"
						//['HD: ' + TeamList[entry].ClassCompletionHD,'LD: ' + TeamList[entry].ClassCompletionLD,'VPS: ' + TeamList[entry].ClassCompletionVPS]


						newHead1(newTable, "First Name", "Last Name", "Email", "Address", "City", "State", "Zip");
						newBody1(newTable, TeamList[entry].FirstName, TeamList[entry].LastName, TeamList[entry].Email, TeamList[entry].Address_1, TeamList[entry].City, TeamList[entry].State, TeamList[entry].PostalCode, 0);
						newHead2(newTable, "Region/Province", "Country", "VCERT Class", "Valvoline Role", "Sales Contact", "Sales Email");
						newBody2(newTable, TeamList[entry].RegionProvince, TeamList[entry].Country, [TeamList[entry].ClassHD, TeamList[entry].ClassLD, TeamList[entry].ClassVPS], TeamList[entry].Role, TeamList[entry].SalesContact, TeamList[entry].SalesEmail, 0, entry);
						document.getElementById("teamList_Body1").appendChild(newTable);
						adjustEditContentBtn(); //   if (TeamList[entry].ClassHD)
						//   updateDateHD(entry);
						//   if (TeamList[entry].ClassVPS)
						//   updateDateVPS(entry);
						//   if (TeamList[entry].ClassLD)
						//   updateDateLD(entry);
					}

					var oldSelectedUser;
					var currentSelectedUser;
					var oldUserData = [];
					$('.edit-btn').unbind().click(function () {
						adjustEditContentBtn();
						currentSelectedUser = $(this).parent().parent().parent().parent().parent().parent().attr('class').slice(8).split(" ")[0];
						var currFirstName = $('.newUser_' + currentSelectedUser + ' .FirstName div').text();
						var currLastName = $('.newUser_' + currentSelectedUser + ' .LastName div').text();
						var currEmail = $('.newUser_' + currentSelectedUser + ' .Email div').text();
						var currAddress = $('.newUser_' + currentSelectedUser + ' .Address_1 div').text();
						var currCity = $('.newUser_' + currentSelectedUser + ' .City div').text();
						var currState = $('.newUser_' + currentSelectedUser + ' .State div').text();
						var currPostalCode = $('.newUser_' + currentSelectedUser + ' .PostalCode div').text();
						var currRegionProvince = $('.newUser_' + currentSelectedUser + ' .RegionProvince div').text();
						var currCountry = $('.newUser_' + currentSelectedUser + ' .Country div').text();
						var currADClass = $('.newUser_' + currentSelectedUser + ' .classAD').prop('checked');
						var currADClassDate = $('.newUser_' + currentSelectedUser + ' .ADDropdown').val();
						var currHDClass = $('.newUser_' + currentSelectedUser + ' .classHD').prop('checked');
						var currHDClassDate = $('.newUser_' + currentSelectedUser + ' .HDDropdown').val();
						var currOHWClass = $('.newUser_' + currentSelectedUser + ' .classOHW').prop('checked');
						var currOHWClassDate = $('.newUser_' + currentSelectedUser + ' .OHWDropdown').val();
						var currVPSClass = $('.newUser_' + currentSelectedUser + ' .classVPS').prop('checked');
						var currVPSClassDate = $('.newUser_' + currentSelectedUser + ' .VPSDropdown').val();
						var currLDClass = $('.newUser_' + currentSelectedUser + ' .classLD').prop('checked');
						var currLDClassDate = $('.newUser_' + currentSelectedUser + ' .LDDropdown').val();
						var currRole = $('.newUser_' + currentSelectedUser + ' .Role div').text();
						var currSalesContact = $('.newUser_' + currentSelectedUser + ' .SalesContact div').text();
						var currSalesEmail = $('.newUser_' + currentSelectedUser + ' .SalesEmail div').text();
						$('.newUser_' + currentSelectedUser + ' .FirstName div').attr('contenteditable', 'true');
						$('.newUser_' + currentSelectedUser + ' .LastName div').attr('contenteditable', 'true');
						$('.newUser_' + currentSelectedUser + ' .Email div').attr('contenteditable', 'true');
						$('.newUser_' + currentSelectedUser + ' .Address_1 div').attr('contenteditable', 'true');
						$('.newUser_' + currentSelectedUser + ' .City div').attr('contenteditable', 'true');
						$('.newUser_' + currentSelectedUser + ' .State div').attr('contenteditable', 'true');
						$('.newUser_' + currentSelectedUser + ' .PostalCode div').attr('contenteditable', 'true');
						$('.newUser_' + currentSelectedUser + ' .RegionProvince div').attr('contenteditable', 'true');
						$('.newUser_' + currentSelectedUser + ' .Country div').attr('contenteditable', 'true');
						$('.newUser_' + currentSelectedUser + ' .classOHW').attr("disabled", false);
						$('.newUser_' + currentSelectedUser + ' .OHWDropdown').attr("disabled", false);
						$('.newUser_' + currentSelectedUser + ' .classHD').attr("disabled", false);
						$('.newUser_' + currentSelectedUser + ' .HDDropdown').attr("disabled", false);
						$('.newUser_' + currentSelectedUser + ' .classVPS').attr("disabled", false);
						$('.newUser_' + currentSelectedUser + ' .VPSDropdown').attr("disabled", false);
						$('.newUser_' + currentSelectedUser + ' .classLD').attr("disabled", false);
						$('.newUser_' + currentSelectedUser + ' .LDDropdown').attr("disabled", false);
						$('.newUser_' + currentSelectedUser + ' .classAD').attr("disabled", false);
						$('.newUser_' + currentSelectedUser + ' .ADDropdown').attr("disabled", false);
						$('.newUser_' + currentSelectedUser + ' .Role div').attr('contenteditable', 'true');
						$('.newUser_' + currentSelectedUser + ' .SalesContact div').attr('contenteditable', 'true');
						$('.newUser_' + currentSelectedUser + ' .SalesEmail div').attr('contenteditable', 'true'); // if(oldUserData.length == 0) {
						// oldSelectedUser = currentSelectedUser
						//   var oldFirstName = $('.newUser_' + oldSelectedUser + ' .FirstName div').text();
						//   var oldLastName = $('.newUser_' + oldSelectedUser + ' .LastName div').text();
						//   var oldEmail = $('.newUser_' + oldSelectedUser + ' .LastName div').text();
						//   var oldAddress = $('.newUser_' + oldSelectedUser + ' .Address_1 div').text();
						//   var oldCity = $('.newUser_' + oldSelectedUser + ' .City div').text();
						//   var oldState = $('.newUser_' + oldSelectedUser + ' .State div').text();
						//   var oldPostalCode = $('.newUser_' + oldSelectedUser + ' .PostalCode div').text();
						//   var oldRegionProvince = $('.newUser_' + oldSelectedUser + ' .RegionProvince div').text();
						//   var oldCountry = $('.newUser_' + oldSelectedUser + ' .Country div').text();
						//   var oldHDClass = $('.newUser_' + oldSelectedUser + ' .classHD').val();
						//   var oldHDClassDate = $('.newUser_' + oldSelectedUser + ' .HDDropdown').val();
						//   var oldVPSClass = $('.newUser_' + oldSelectedUser + ' .classVPS').val();
						//   var oldVPSClassDate = $('.newUser_' + oldSelectedUser + ' .VPSDropdown').val();
						//   var oldLDClass = $('.newUser_' + oldSelectedUser + ' .classLD').val();
						//   var oldLDClassDate = $('.newUser_' + oldSelectedUser + ' .LDDropdown').val();
						//   var oldRole = $('.newUser_' + oldSelectedUser + ' .Role div').text();
						//   var oldSalesContact = $('.newUser_' + oldSelectedUser + ' .SalesContact div').text();
						//   var oldSalesEmail = $('.newUser_' + oldSelectedUser + ' .SalesEmail div').text();
						//   oldUserData.push(oldFirstName)
						//   oldUserData.push(oldLastName)
						//   oldUserData.push(oldEmail)
						//   oldUserData.push(oldAddress)
						//   oldUserData.push(oldCity)
						//   oldUserData.push(oldState)
						//   oldUserData.push(oldPostalCode)
						//   oldUserData.push(oldRegionProvince)
						//   oldUserData.push(oldCountry)
						//   oldUserData.push(oldHDClass)
						//   oldUserData.push(oldHDClassDate)
						//   oldUserData.push(oldVPSClass)
						//   oldUserData.push(oldVPSClassDate)
						//   oldUserData.push(oldLDClass) 
						//   oldUserData.push(oldLDClassDate)
						//   oldUserData.push(oldRole)
						//   oldUserData.push(oldSalesContact)
						//   oldUserData.push(oldSalesEmail)
						//   console.log(oldUserData)
						// } else {
						//   console.log('oldFirstName:  ' + oldUserData[0])
						//   $('.newUser_' + oldSelectedUser + ' .FirstName div').text(oldUserData[0]);
						//   oldUserData.length = 0;
						//   //currentSelectedUser = $(this).parent().parent().parent().parent().parent().parent().attr('class').slice(8).split(" ")[0];
						//   //console.log(oldFirstName)
						//   //$('.newUser_' + oldSelectedUser + ' .FirstName div').text(oldFirstName);
						//   //$('.newUser_' + oldSelectedUser + ' .FirstName div')
						//   //.text(currFirstName);
						// 	//console.log('oldID: ' + oldSelectedUser)
						// 	//console.log('newID: ' + currentSelectedUser)
						// }
						// //console.log('currentSelectedUser: ' + currentSelectedUser)
						// //console.log('currFirstName: ' + currFirstName)
						// //console.log('currLastName: ' + currLastName)
						// //console.log('currEmail: ' + currEmail)
						// //console.log('currAddress: ' + currAddress)
						// //console.log('currCity: ' + currCity)
						// //console.log('currState: ' + currState)
						// //console.log('currPostalCode: ' + currPostalCode)
						// //console.log('currRegionProvince: ' + currRegionProvince)
						// //console.log('currCountry: ' + currCountry)
						// //console.log('currHDClass: ' + currHDClass)
						// //console.log('currHDClassDate: ' + currHDClassDate)
						// //console.log('currVPSClass: ' + currVPSClass)
						// //console.log('currVPSClassDate: ' + currVPSClassDate)
						// //console.log('currLDClass: ' + currLDClass)
						// //console.log('currLDClassDate: ' + currLDClassDate)
						// //console.log('currRole: ' + currRole)
						// //console.log('currSalesContact: ' + currSalesContact)
						// //console.log('currSalesEmail: ' + currSalesEmail)

						$('.edit-btn').each(function () {
							$('.edit-btn').css('color', 'lightgray').prop("disabled", true);
							$(this).parent().parent().find('.save-box').hide();
							$(this).parent().parent().find('.cancel-box').hide();
							$(this).parent().parent().find('.edit-box').css('display', 'flex');
						});
						$('table').css('border', "none");
						$(this).parent().parent().parent().parent().parent().parent().css('border', "2px solid red");
						$(this).parent().parent().find('.save-box').css('display', 'flex');
						$(this).parent().parent().find('.cancel-box').css('display', 'flex');
						$(this).parent().parent().find('.edit-box').hide();
						$('.save-btn').unbind().click(function (e) {
							$('table').css('border', "none"); //console.log($(this).parent().parent().find('.save-box'))

							$(this).parent().parent().find('.save-box').css('display', 'none');
							$(this).parent().parent().find('.cancel-box').css('display', 'none');
							$(this).parent().parent().find('.edit-box').css('display', 'flex');
							$('.edit-btn').css('color', '#E1261C').prop("disabled", false);
							adjustEditContentBtn();
							var newFirstName = $('.newUser_' + currentSelectedUser + ' .FirstName div').text();
							var newLastName = $('.newUser_' + currentSelectedUser + ' .LastName div').text();
							var newEmail = $('.newUser_' + currentSelectedUser + ' .Email div').text();
							var newAddress = $('.newUser_' + currentSelectedUser + ' .Address_1 div').text();
							var newCity = $('.newUser_' + currentSelectedUser + ' .City div').text();
							var newState = $('.newUser_' + currentSelectedUser + ' .State div').text();
							var newPostalCode = $('.newUser_' + currentSelectedUser + ' .PostalCode div').text();
							var newRegionProvince = $('.newUser_' + currentSelectedUser + ' .RegionProvince div').text();
							var newCountry = $('.newUser_' + currentSelectedUser + ' .Country div').text();
							var newOHWClass = $('.newUser_' + currentSelectedUser + ' .classOHW').prop('checked');
							var newOHWClassDate = $('.newUser_' + currentSelectedUser + ' .OHWDropdown').val();
							var newHDClass = $('.newUser_' + currentSelectedUser + ' .classHD').prop('checked');
							var newHDClassDate = $('.newUser_' + currentSelectedUser + ' .HDDropdown').val();
							var newVPSClass = $('.newUser_' + currentSelectedUser + ' .classVPS').prop('checked');
							var newVPSClassDate = $('.newUser_' + currentSelectedUser + ' .VPSDropdown').val();
							var newLDClass = $('.newUser_' + currentSelectedUser + ' .classLD').prop('checked');
							var newLDClassDate = $('.newUser_' + currentSelectedUser + ' .LDDropdown').val();
							var newADClass = $('.newUser_' + currentSelectedUser + ' .classAD').prop('checked');
							var newADClassDate = $('.newUser_' + currentSelectedUser + ' .ADDropdown').val();
							var newRole = $('.newUser_' + currentSelectedUser + ' .Role div').text();
							var newSalesContact = $('.newUser_' + currentSelectedUser + ' .SalesContact div').text();
							var newSalesEmail = $('.newUser_' + currentSelectedUser + ' .SalesEmail div').text();

							if (!newHDClass) {
								newHDClassDate = "";
							}
							if (!newOHWClass) {
								newOHWClassDate = "";
							}
							if (!newVPSClass) {
								newVPSClassDate = "";
							}

							if (!newLDClass) {
								newLDClassDate = "";
							}
							if (!newADClass) {
								newADClassDate = "";
							}
							firebase.database().ref(dbLocation).child(currentSelectedUser).update({
								FirstName: newFirstName,
								LastName: newLastName,
								Address_1: newAddress,
								City: newCity,
								State: newState,
								PostalCode: newPostalCode,
								RegionProvince: newRegionProvince,
								Country: newCountry,
								ClassAD: newADClass,
								ClassHD: newHDClass,
								ClassLD: newLDClass,
								ClassVPS: newVPSClass,
								ClassOHW: newOHWClass,
								ClassCompletionAD: newADClassDate,
								ClassCompletionHD: newHDClassDate,
								ClassCompletionLD: newLDClassDate,
								ClassCompletionOHW: newOHWClassDate,
								ClassCompletionVPS: newVPSClassDate,
								Role: newRole,
								SalesContact: newSalesContact,
								SalesEmail: newSalesEmail
							}).then(function () { //////console.log("UPDATED")
							});

							if (currEmail != newEmail) {
								var updateUserProfileEmail = functions.httpsCallable('updateUserProfileEmail');
								updateUserProfileEmail({
									uid: currentSelectedUser,
									email: newEmail
								}).then(function (result) { //////console.log(result)
								});
								firebase.database().ref(dbLocation).child(currentSelectedUser).update({
									Email: newEmail
								}).then(function () { //////console.log("UPDATED")
								});
							} // $(this).parent().parent().find('.save-box').css('display', 'flex');
							// $(this).parent().parent().find('.cancel-box').css('display', 'flex');
							// $(this).parent().parent().find('.edit-box').hide();

						});
						$('.cancel-btn').unbind().click(function (e) {
							//console.log('clicked')
							$('table').css('border', "none");
							$(this).parent().parent().find('.save-box').hide();
							$(this).parent().parent().find('.cancel-box').hide();
							$(this).parent().parent().find('.edit-box').css('display', 'flex');
							$('.edit-btn').css('color', '#E1261C').prop("disabled", false);
							adjustEditContentBtn();
							$('.newUser_' + currentSelectedUser + ' .FirstName div').text(currFirstName);
							$('.newUser_' + currentSelectedUser + ' .LastName div').text(currLastName);
							$('.newUser_' + currentSelectedUser + ' .Email div').text(currEmail);
							$('.newUser_' + currentSelectedUser + ' .Address_1 div').text(currAddress);
							$('.newUser_' + currentSelectedUser + ' .City div').text(currCity);
							$('.newUser_' + currentSelectedUser + ' .State div').text(currState);
							$('.newUser_' + currentSelectedUser + ' .PostalCode div').text(currPostalCode);
							$('.newUser_' + currentSelectedUser + ' .RegionProvince div').text(currRegionProvince);
							$('.newUser_' + currentSelectedUser + ' .Country div').text(currCountry);
							$('.newUser_' + currentSelectedUser + ' .classHD').prop('checked', currHDClass);
							console.log(currHDClass);

							if (currHDClass) {
								$('.newUser_' + currentSelectedUser + ' .HDDropdown').css('display', 'flex').val(currHDClassDate);
							} else {
								$('.newUser_' + currentSelectedUser + ' .HDDropdown').hide();
							}

							$('.newUser_' + currentSelectedUser + ' .classVPS').prop('checked', currVPSClass);

							if (currVPSClass) {
								$('.newUser_' + currentSelectedUser + ' .VPSDropdown').css('display', 'flex').val(currVPSClassDate);
							} else {
								$('.newUser_' + currentSelectedUser + ' .VPSDropdown').hide();
							} //$('.newUser_' + currentSelectedUser + ' .VPSDropdown').val(currVPSClassDate);

							if (currOHWClass) {
								$('.newUser_' + currentSelectedUser + ' .OHWDropdown').css('display', 'flex').val(currOHWClassDate);
							} else {
								$('.newUser_' + currentSelectedUser + ' .OHWDropdown').hide();
							}
							$('.newUser_' + currentSelectedUser + ' .classLD').prop('checked', currLDClass);

							if (currLDClass) {
								$('.newUser_' + currentSelectedUser + ' .LDDropdown').css('display', 'flex').val(currLDClassDate);
							} else {
								$('.newUser_' + currentSelectedUser + ' .LDDropdown').hide();
							} //$('.newUser_' + currentSelectedUser + ' .LDDropdown').val(currLDClassDate);


							$('.newUser_' + currentSelectedUser + ' .classAD').prop('checked', currADClass);
							console.log(currADClass);

							if (currADClass) {
								$('.newUser_' + currentSelectedUser + ' .ADDropdown').css('display', 'flex').val(currADClassDate);
							} else {
								$('.newUser_' + currentSelectedUser + ' .ADDropdown').hide();
							}

							$('.newUser_' + currentSelectedUser + ' .Role div').text(currRole);
							$('.newUser_' + currentSelectedUser + ' .SalesContact div').text(currSalesContact);
							$('.newUser_' + currentSelectedUser + ' .SalesEmail div').text(currSalesEmail);
							$('.newUser_' + currentSelectedUser + ' .FirstName div').attr('contenteditable', 'false');
							$('.newUser_' + currentSelectedUser + ' .LastName div').attr('contenteditable', 'false');
							$('.newUser_' + currentSelectedUser + ' .Email div').attr('contenteditable', 'false');
							$('.newUser_' + currentSelectedUser + ' .Address_1 div').attr('contenteditable', 'false');
							$('.newUser_' + currentSelectedUser + ' .City div').attr('contenteditable', 'false');
							$('.newUser_' + currentSelectedUser + ' .State div').attr('contenteditable', 'false');
							$('.newUser_' + currentSelectedUser + ' .PostalCode div').attr('contenteditable', 'false');
							$('.newUser_' + currentSelectedUser + ' .RegionProvince div').attr('contenteditable', 'false');
							$('.newUser_' + currentSelectedUser + ' .Country div').attr('contenteditable', 'false');
							$('.newUser_' + currentSelectedUser + ' .classHD').attr("disabled", true);
							$('.newUser_' + currentSelectedUser + ' .HDDropdown').attr("disabled", true);
							$('.newUser_' + currentSelectedUser + ' .classOHW').attr("disabled", true);
							$('.newUser_' + currentSelectedUser + ' .OHWDropdown').attr("disabled", true);
							$('.newUser_' + currentSelectedUser + ' .classVPS').attr("disabled", true);
							$('.newUser_' + currentSelectedUser + ' .VPSDropdown').attr("disabled", true);
							$('.newUser_' + currentSelectedUser + ' .classLD').attr("disabled", true);
							$('.newUser_' + currentSelectedUser + ' .LDDropdown').attr("disabled", true);
							$('.newUser_' + currentSelectedUser + ' .classAD').attr("disabled", true);
							$('.newUser_' + currentSelectedUser + ' .ADDropdown').attr("disabled", true);
							$('.newUser_' + currentSelectedUser + ' .Role div').attr('contenteditable', 'false');
							$('.newUser_' + currentSelectedUser + ' .SalesContact div').attr('contenteditable', 'false');
							$('.newUser_' + currentSelectedUser + ' .SalesEmail div').attr('contenteditable', 'false');
						});
					});
				};

				var newVal = function newVal(thisDate) {
					console.log(thisDate);
					var holder = thisDate.split("-");
					var newVal = holder[2] + "-" + holder[0] + "-" + holder[1];
					console.log(newVal);
					return newVal;
				};

				var newHead1 = function newHead1(giveTo, para1, para2, para3, para4, para5, para6, para7) {
					var newEmpty = document.createElement("tr");
					var newEmptee = document.createElement("td");
					var emptyEnd = document.createElement("th");
					var newHead = document.createElement("thead");
					var newTR = document.createElement("tr");
					var newTH1 = document.createElement("th");
					newTH1.scope = "col";
					newTH1.innerHTML = para1;
					newTR.appendChild(newTH1);
					var newTH2 = document.createElement("th");
					newTH2.scope = "col";
					newTH2.innerHTML = para2;
					newTR.appendChild(newTH2);
					var newTH3 = document.createElement("th");
					newTH3.scope = "col";
					newTH3.innerHTML = para3;
					newTR.appendChild(newTH3);
					var newTH4 = document.createElement("th");
					newTH4.scope = "col";
					newTH4.innerHTML = para4;
					newTR.appendChild(newTH4);
					var newTH5 = document.createElement("th");
					newTH5.scope = "col";
					newTH5.innerHTML = para5;
					newTR.appendChild(newTH5);
					var newTH6 = document.createElement("th");
					newTH6.scope = "col";
					newTH6.innerHTML = para6;
					newTR.appendChild(newTH6);
					var newTH7 = document.createElement("th");
					newTH7.scope = "col";
					newTH7.innerHTML = para7;
					newTR.appendChild(newTH7);
					var editCol = document.createElement("th");
					editCol.classList.add('editCol');
					editCol.innerHTML = '<div class="control-box"><div class="edit-box"><button class="edit-btn">EDIT</button></div>' + '<div class="save-box " style="display: none"><button class="save-btn" >SAVE</button></div>' + '<div class="cancel-box" style="display: none"><button class="cancel-btn" >CANCEL</button></div></div>';
					newTR.appendChild(editCol);
					newHead.appendChild(newTR);
					giveTo.appendChild(newHead);
				};

				var newHead2 = function newHead1(giveTo, para1, para2, para3, para4, para5, para6) {
					var newEmpty = document.createElement("tr");
					var newEmptee = document.createElement("td");
					var emptyEnd = document.createElement("th");
					var newHead = document.createElement("thead");
					var newTR = document.createElement("tr");
					var newTH1 = document.createElement("th");
					newTH1.scope = "col";
					newTH1.innerHTML = para1;
					newTR.appendChild(newTH1);
					var newTH2 = document.createElement("th");
					newTH2.scope = "col";
					newTH2.innerHTML = para2;
					newTR.appendChild(newTH2);
					var newTH3 = document.createElement("th");
					newTH3.scope = "col";
					newTH3.innerHTML = para3;
					newTH3.colSpan = 2;
					newTR.appendChild(newTH3);
					var newTH4 = document.createElement("th");
					newTH4.scope = "col";
					newTH4.innerHTML = para4;
					newTR.appendChild(newTH4);
					var newTH5 = document.createElement("th");
					newTH5.scope = "col";
					newTH5.innerHTML = para5;
					newTR.appendChild(newTH5);
					var newTH6 = document.createElement("th");
					newTH6.scope = "col";
					newTH6.innerHTML = para6;
					newTR.appendChild(newTH6);
					var emptyEnd = document.createElement("th");
					newTR.appendChild(emptyEnd);
					newHead.appendChild(newTR);
					giveTo.appendChild(newHead);
				};

				var newBody1 = function newBody1(giveTo, para1, para2, para3, para4, para5, para6, para7, FLAG) {
					var newBody = document.createElement("tbody");
					var newTR = document.createElement("tr");
					var newTH1 = document.createElement("td");
					var newTH1div = document.createElement("div");
					newTH1div.innerHTML = para1;
					newTH1div.contentEditable = "false";
					newTH1.classList.add('FirstName');
					newTH1.appendChild(newTH1div);
					newTR.appendChild(newTH1);
					var newTH2 = document.createElement("td");
					var newTH2div = document.createElement("div");
					newTH2div.innerHTML = para2;
					newTH2div.contentEditable = "false";
					newTH2.classList.add('LastName');
					newTH2.appendChild(newTH2div);
					newTR.appendChild(newTH2);
					var newTH3 = document.createElement("td");
					var newTH3div = document.createElement("div");
					newTH3div.innerHTML = para3;
					newTH3div.contentEditable = "false";
					newTH3.classList.add('Email');
					newTH3.appendChild(newTH3div);
					newTR.appendChild(newTH3);
					var newTH4 = document.createElement("td");
					var newTH4div = document.createElement("div");
					newTH4div.innerHTML = para4;
					newTH4div.contentEditable = "false";
					newTH4.classList.add('Address_1');
					newTH4.appendChild(newTH4div);
					newTR.appendChild(newTH4);
					var newTH5 = document.createElement("td");
					var newTH1div = document.createElement("div");
					newTH1div.innerHTML = para5;
					newTH1div.contentEditable = "false";
					newTH5.classList.add('City');
					newTH5.appendChild(newTH1div);
					newTR.appendChild(newTH5);
					var newTH6 = document.createElement("td");
					var newTH6div = document.createElement("div");
					newTH6div.innerHTML = para6;
					newTH6div.contentEditable = "false";
					newTH6.classList.add('State');
					newTH6.appendChild(newTH6div);
					newTR.appendChild(newTH6);
					var newTH7 = document.createElement("td");
					var newTH7div = document.createElement("div");
					newTH7div.innerHTML = para7;
					newTH7div.contentEditable = "false";
					newTH7.classList.add('PostalCode');
					newTH7.appendChild(newTH7div);
					newTR.appendChild(newTH7);
					var emptyEnd = document.createElement("td");
					newTR.appendChild(emptyEnd);
					newBody.appendChild(newTR);
					giveTo.appendChild(newBody);

					if (FLAG == 1) {
						//EMPTY SECTION-----------------------------------------
						var newEmpty = document.createElement("tr");
						var newEmptee = document.createElement("td");
						newEmpty.appendChild(newEmptee);
						giveTo.appendChild(newEmpty);
					}
				};

				var newBody2 = function newBody1(giveTo, para1, para2, para3, para4, para5, para6, FLAG, entry) {
					var newBody = document.createElement("tbody");
					var newTR = document.createElement("tr");
					var newTH8 = document.createElement("td");
					var editCol = document.createElement("td");
					var newTH8div = document.createElement("div");
					newTH8div.innerHTML = para1;
					newTH8div.contentEditable = "false";
					newTH8.classList.add('RegionProvince');
					newTH8.appendChild(newTH8div);
					newTR.appendChild(newTH8);
					var newTH9 = document.createElement("td");
					var newTH9div = document.createElement("div");
					newTH9div.innerHTML = para2;
					newTH9div.contentEditable = "false";
					newTH9.classList.add('Country');
					newTH9.appendChild(newTH9div);
					newTR.appendChild(newTH9);
					var newTH1 = document.createElement("td");
					var newTH1div = document.createElement("div"); ////console.log(para3)

					if (para3[0]) {
						newTH1div.innerHTML = '<input class="checkbox classHD" type="checkbox" id="classHD" name="classHD" value="HD" onclick="displayHDClasses(this)" checked disabled>Heavy Duty Products &amp; Services<br /><select class="form-control HDDropdown" id="HDClassInfo" name="vclass" onchange="" disabled></select>';
					} else {
						newTH1div.innerHTML = '<input class="checkbox classHD" type="checkbox" id="classHD" name="classHD" value="HD" onclick="displayHDClasses(this)" disabled>Heavy Duty Products &amp; Services<br /><select class="form-control HDDropdown" id="HDClassInfo" name="vclass" onchange="" disabled></select>';
					}

					if (para3[1]) {
						newTH1div.innerHTML += '<input class="checkbox classVPS" type="checkbox" id="classVPS" name="classVPS" value="VPS" onclick="displayVPSClasses(this)" checked disabled>VPS Products &amp; Services<br /><select class="form-control VPSDropdown" id="VPSClassInfo" name="vclass" onchange="" disabled></select>';
					} else {
						newTH1div.innerHTML += '<input class="checkbox classVPS" type="checkbox" id="classVPS" name="classVPS" value="VPS" onclick="displayVPSClasses(this)" disabled>VPS Products &amp; Services<br /><select class="form-control VPSDropdown" id="VPSClassInfo" name="vclass" onchange="" disabled></select>';
					}

					if (para3[2]) {
						newTH1div.innerHTML += '<input class="checkbox classLD" type="checkbox" id="classLD" name="classLD" value="LD" onclick="displayLDClasses(this)" checked disabled>Light Duty Products &amp; Services<br /><select class="form-control LDDropdown" id="LDClassInfo" name="vclass" onchange="" disabled></select>';
					} else {
						newTH1div.innerHTML += '<input class="checkbox classLD" type="checkbox" id="classLD" name="classLD" value="LD" onclick="displayLDClasses(this)" disabled>Light Duty Products &amp; Services<br /><select class="form-control LDDropdown" id="LDClassInfo" name="vclass" onchange="" disabled></select>';
					}
					if (para3[3]) {
						newTH1div.innerHTML += '<input class="checkbox classAD" type="checkbox" id="classAD" name="classAD" value="AD" onclick="displayADClasses(this)" checked disabled>Valvoline Auto Dealer<br /><select class="form-control ADDropdown" id="ADClassInfo" name="vclass" onchange="" disabled></select>';
					} else {
						newTH1div.innerHTML += '<input class="checkbox classAD" type="checkbox" id="classAD" name="classAD" value="AD" onclick="displayADClasses(this)" disabled>Valvoline Auto Dealer<br /><select class="form-control ADDropdown" id="ADClassInfo" name="vclass" onchange="" disabled></select>';
					}
					if (para3[4]) {
						newTH1div.innerHTML += '<input class="checkbox classOHW" type="checkbox" id="classOHW" name="classOHW" value="OHW" onclick="displayOHWClasses(this)" checked disabled>OHW Products &amp; Services<br /><select class="form-control OHWDropdown" id="OHWClassInfo" name="vclass" onchange="" disabled></select>';
					} else {
						newTH1div.innerHTML += '<input class="checkbox classOHW" type="checkbox" id="classOHW" name="classOHW" value="OHW" onclick="displayOHWClasses(this)" disabled>OHW Products &amp; Services<br /><select class="form-control OHWDropdown" id="OHWClassInfo" name="vclass" onchange="" disabled></select>';
					}
					newTH1.classList.add('ClassList');
					newTH1.colSpan = 2;
					newTH1.appendChild(newTH1div);
					newTR.appendChild(newTH1);
					var newTH2 = document.createElement("td");
					var newTH2div = document.createElement("div");
					newTH2div.innerHTML = para4;
					newTH2div.contentEditable = "false";
					newTH2.classList.add('Role');
					newTH2.appendChild(newTH2div);
					newTR.appendChild(newTH2);
					var newTH3 = document.createElement("td");
					var newTH3div = document.createElement("div");
					newTH3div.innerHTML = para5;
					newTH3div.contentEditable = "false";
					newTH3.classList.add('SalesContact');
					newTH3.appendChild(newTH3div);
					newTR.appendChild(newTH3);
					var newTH4 = document.createElement("td");
					var newTH4div = document.createElement("div");
					newTH4div.innerHTML = para6;
					newTH4div.contentEditable = "false";
					newTH4.classList.add('SalesEmail');
					newTH4.appendChild(newTH4div);
					newTR.appendChild(newTH4); //editCol.rowSpan = '3';

					var emptyEnd = document.createElement("td");
					newTR.appendChild(emptyEnd);
					newBody.appendChild(newTR);
					$(giveTo).append(newBody).ready(function () {
						////console.log(para3)
						if (para3[0]) startHDClasses(entry);
						if (para3[1]) startVPSClasses(entry);
						if (para3[2]) startLDClasses(entry);
						if (para3[3]) startADClasses(entry);
					});

					if (FLAG == 1) {
						//EMPTY SECTION-----------------------------------------
						var newEmpty = document.createElement("tr");
						var newEmptee = document.createElement("td");
						newEmpty.appendChild(newEmptee);
						giveTo.appendChild(newEmpty);
					}
				};

				$('.searchButton').unbind().click(function () {
					$('#teamList_Body1 table').remove();
					var TeamList = [];
					var query = firebase.database().ref(dbLocation).orderByKey();
					query.once("value").then(function (snapshot) {
						var i = 0;
						snapshot.forEach(function (childSnapshot) {
							var key = childSnapshot.key;
							var childData = childSnapshot.val();
							var searchString = String(childData.LastName).toLowerCase(); ////console.log(i)

							i++;

							if (searchString == String($('#searchVal').val()).toLowerCase()) {
								//////console.log(searchString)
								//////console.log(key)
								matchedArray.push(key);
								TeamList.push(childData);
							}
						});
						newEntry(TeamList, matchedArray);
						$('td').unbind('click');
						$('td').bind('click', makeEditable); ////console.log(matchedArray)
					});
				});

				var makeEditable = function makeEditable() {
					//         var down = {};
					//         $(this).keydown(function (e) {
					//           down[e.keyCode] = true;
					//         }).keyup(function (e) {
					//           if (down[13]) {
					//             //////console.log("ENTERKEY");
					//             var thisCellVal = $(this).text();
					//             var userIDofSelectedCell = $(this).parent().parent().parent().attr('class').slice(8).split(" ")[0];
					//             var userFieldSelectedCell = $(this).attr('class');
					//             //////console.log(userIDofSelectedCell);
					//             //////console.log(userFieldSelectedCell);
					//             //////console.log(thisCellVal);
					// return false; 
					//           }
					//           down[e.keyCode] = false;
					//         });
					var userIDofSelectedCell = $(this).parent().parent().parent().attr('class').slice(8).split(" ")[0]; //console.log(userIDofSelectedCell);

					$(this).keydown(function (e) {
						// trap the return key being pressed
						if (e.keyCode === 13) {
							//////console.log("ENTERKEY");
							var thisCellVal = $(this).text(); //var userIDofSelectedCell = $(this).parent().parent().parent().attr('class').slice(8).split(" ")[0];
							//var userFieldSelectedCell = $(this).children("div").attr('class');

							var userFieldSelectedCell = $(this).attr('class'); ////console.log(userIDofSelectedCell);
							//console.log(userFieldSelectedCell);
							////console.log(thisCellVal);
							//////console.log( $(this).children("div").attr('class'));
							// ////console.log( this);

							$(this).blur();
							$(this).parent().parent().parent().parent().css('border', "none");

							if (userFieldSelectedCell == "Email") {
								// $.get("https://us-central1-vcert-9568e.cloudfunctions.net/updateUserProfileEmail", {
								//     uid: userIDofSelectedCell, email: thisCellVal
								//   });
								var updateUserProfileEmail = functions.httpsCallable('updateUserProfileEmail');
								updateUserProfileEmail({
									uid: userIDofSelectedCell,
									email: thisCellVal
								}).then(function (result) { //////console.log(result)
								});
								firebase.database().ref(dbLocation).child(userIDofSelectedCell).update(_defineProperty({}, userFieldSelectedCell, thisCellVal)).then(function () { //////console.log("UPDATED")
								}); //   var user = firebase.auth().currentUser;
								//   //////console.log(user)
								//   // var user = firebase.auth().currentUser;
								//   user.updateEmail(String(thisCellVal)).then(function() {
								//     // Update successful.
								//     //////console.log(user)
								//   }).catch(function(error) {
								//     // An error happened.
								//   });
							} // //WORKS!!!!


							firebase.database().ref(dbLocation).child(userIDofSelectedCell).update(_defineProperty({}, userFieldSelectedCell, thisCellVal)).then(function () { //////console.log("UPDATED")
							});
							return false;
						}
					});
				};

				$(document).ready(function () {
					//gatherData(TeamList, function () {
					////////console.log('callback')
					////////console.log(TeamList)
					//});
					$('.inner-content').eq(0).css('min-height', 'calc(100% - 188px) !important');
				});
			} else {
				auth.signOut().then(function () { //////console.log('user has been logged out');
				});
				$('#auth-error').html('You do not have Admin rights. Please try again or log in through the "User Login" link located at the top of the page.');
			}
		});
	}

	//Change Dates
	$('#datePopup').unbind().click(function () {
		$("#HDDates").empty();
		$("#LDDates").empty();
		$("#VPSDates").empty();
		$("#ADDates").empty();
		$("#OHWDates").empty();
		var hdIndex = 0;
		var LDIndex = 0;
		var VPSIndex = 0;
		var ADIndex = 0;
		var OHWIndex = 0;
		var date = new Date();
		var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		var end = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		//console.log(today)




		var HDDates = db.ref('/HDClass').orderByChild("Value");
		//   HDDates.on('child_removed', function(data) {
		// 	console.log(data.key);
		//   });



		HDDates.once('value', function (snapshot) {
			snapshot.forEach(function (data) {
				//var childKey = data.key;
				//var childData = data.val();
				//console.log("childKey:" + childKey);
				//console.log("childData: " + childData);
				hdIndex++;
				var dbDateitem = data.val();

				function formatDate(inputDate) {
					var dateString = inputDate.split("-");
					//console.log(inputDate)
					var year = dateString[0];
					var month = dateString[1];
					var day = dateString[2];
					//console.log('year: ' + year)
					//console.log('month: ' + month)
					//console.log('day: ' + day)
					return month + '-' + day + '-' + year;
				}

				var thisDate = formatDate(dbDateitem);
				var dateChanged;
				var row = $('<div class="panel-body' + " HDClass" + hdIndex + '"></div>');
				var calendar = $('<div class="input-group date">')
				var item = $('<input type="text" value="" class="date-item " readonly disabled>').attr('value', thisDate).html(thisDate);
				var calpopup = $('<span class="add-on"><i class="icon-th"></i></span>')
				$(calendar).append(calpopup, item);
				$(row).append(calendar)
				$(row).append('<div class="edit-date">EDIT</div><div class="delete-btn" ></div><div class="save-date-box" style="display: none"><button class="save-date-btn" >SAVE</button></div><div class="cancel-date-box" style="display: none"><button class="cancel-date-btn" >CANCEL</button></div>')
				$("#HDDates").append(row);
				$('.input-group input').datepicker({
					format: "mm-dd-yyyy",
					autoclose: true,
					showOnFocus: true
				});
				$(".HDClass" + hdIndex + ' .input-group input').on('changeDate', function () {
					$(this).datepicker('update');
					var itemIndex = $(this).parent().parent().attr("class").split(' ').pop().slice(7);
					var itemValue = $(this).val();
					dateChanged = $(this).val();
					$(this).attr('value', itemValue)
					$(this).text(itemValue)
					console.log('itemValue: ' + itemValue);
				});

			});
		}).then(function (snapshot) {
			//CHANGE TO SPECIFIC CLASS HD, LD, VSP
			var newItemIndex = $('#HDDates .panel-body').length + 1;
			var row = $('<div class="panel-body add-new"></div>');
			var addNew = $('<div class="add-new-row"><div class="add-new-btn-hd"></div><div>Add new Date</div></div>');
			$(row).append(addNew)
			$("#HDDates").append(row);
			$("#editClassDates").modal()
			$("#editClassDates").on('shown.bs.modal', function () {
				attachDateControls();
	
			})

			$('.add-new-btn-hd').unbind().click(function () {
				console.log("ADD NEW");
				var newItemIndex = $(this).parent().parent().parent().find('.panel-body').length + 1;
				console.log(newItemIndex);
				var addNewIndex = hdIndex + 1;
				var row = $('<div class="panel-body' + " HDClass" + newItemIndex + '"></div>');
				var calendar = $('<div class="input-group date">')
				var item = $('<input type="text" value="" class="date-item " readonly disabled>');
				var calpopup = $('<span class="add-on"><i class="icon-th"></i></span>')
				$(calendar).append(calpopup, item);
				$(row).append(calendar)
				$(row).append('<div class="edit-date">EDIT</div><div class="delete-btn" ></div><div class="save-date-box" style="display: none"><button class="save-date-btn" >SAVE</button></div><div class="cancel-date-box" style="display: none"><button class="cancel-date-btn" >CANCEL</button></div>')
				$(this).parent().parent().before(row);
				$('.input-group input').datepicker({
					format: "mm-dd-yyyy",
					autoclose: true,
					showOnFocus: true
				});
				$(".HDClass" + newItemIndex + ' .input-group input').on('changeDate', function () {
					$(this).datepicker('update');
					var itemIndex = $(this).parent().parent().attr("class").split(' ').pop().slice(7);
					var itemValue = $(this).val();
					//dateChanged = $(this).val();
					$(this).attr('value', itemValue)
					$(this).text(itemValue)
					console.log('itemValue: ' + itemValue);
				});
				attachDateControls();
			})


		});

		var LDDates = db.ref('/LDClass').orderByChild("Value");
		// LDDates.on("child_added", function (data) {
		// 	var item = $('<div class="panel-body"></div>').val(data.val()).html(data.key);
		// 	$("#LDDates").append($('<div class="panel-body"></div>').val(data.val()).html(data.key));
		// 	$(item).append('<div class="edit-date">EDIT</div>');
		// 	$("#LDDates").append(item);

		// });
		LDDates.once('value', function (snapshot) {
			snapshot.forEach(function (data) {
				//var childKey = data.key;
				//var childData = data.val();
				//console.log("childKey:" + childKey);
				//console.log("childData: " + childData);
				LDIndex++;
				var dbDateitem = data.val();
		
				function formatDate(inputDate) {
					var dateString = inputDate.split("-");
					//console.log(inputDate)
					var year = dateString[0];
					var month = dateString[1];
					var day = dateString[2];
					//console.log('year: ' + year)
					//console.log('month: ' + month)
					//console.log('day: ' + day)
					return month + '-' + day + '-' + year;
				}
		
				var thisDate = formatDate(dbDateitem);
				var dateChanged;
				var row = $('<div class="panel-body' + " LDClass" + LDIndex + '"></div>');
				var calendar = $('<div class="input-group date">')
				var item = $('<input type="text" value="" class="date-item " readonly disabled>').attr('value', thisDate).html(thisDate);
				var calpopup = $('<span class="add-on"><i class="icon-th"></i></span>')
				$(calendar).append(calpopup, item);
				$(row).append(calendar)
				$(row).append('<div class="edit-date">EDIT</div><div class="delete-btn" ></div><div class="save-date-box" style="display: none"><button class="save-date-btn" >SAVE</button></div><div class="cancel-date-box" style="display: none"><button class="cancel-date-btn" >CANCEL</button></div>')
				$("#LDDates").append(row);
				$('.input-group input').datepicker({
					format: "mm-dd-yyyy",
					autoclose: true,
					showOnFocus: true
				});
				$(".LDClass" + LDIndex + ' .input-group input').on('changeDate', function () {
					$(this).datepicker('update');
					var itemIndex = $(this).parent().parent().attr("class").split(' ').pop().slice(7);
					var itemValue = $(this).val();
					dateChanged = $(this).val();
					$(this).attr('value', itemValue)
					$(this).text(itemValue)
					console.log('itemValue: ' + itemValue);
				});
		
			});
		}).then(function (snapshot) {
			//CHANGE TO SPECIFIC CLASS LD, LD, VSP
			var newItemIndex = $('#LDDates .panel-body').length + 1;
			var row = $('<div class="panel-body add-new"></div>');
			var addNew = $('<div class="add-new-row"><div class="add-new-btn-ld"></div><div>Add new Date</div></div>');
			$(row).append(addNew)
			$("#LDDates").append(row);
			$("#editClassDates").modal()
			$("#editClassDates").on('shown.bs.modal', function () {
				attachDateControls();
		
			})
		
			$('.add-new-btn-ld').unbind().click(function () {
				console.log("ADD NEW");
				var newItemIndex = $(this).parent().parent().parent().find('.panel-body').length + 1;
				console.log(newItemIndex);
				var addNewIndex = LDIndex + 1;
				var row = $('<div class="panel-body' + " LDClass" + newItemIndex + '"></div>');
				var calendar = $('<div class="input-group date">')
				var item = $('<input type="text" value="" class="date-item " readonly disabled>');
				var calpopup = $('<span class="add-on"><i class="icon-th"></i></span>')
				$(calendar).append(calpopup, item);
				$(row).append(calendar)
				$(row).append('<div class="edit-date">EDIT</div><div class="delete-btn" ></div><div class="save-date-box" style="display: none"><button class="save-date-btn" >SAVE</button></div><div class="cancel-date-box" style="display: none"><button class="cancel-date-btn" >CANCEL</button></div>')
				$(this).parent().parent().before(row);
				$('.input-group input').datepicker({
					format: "mm-dd-yyyy",
					autoclose: true,
					showOnFocus: true
				});
				$(".LDClass" + newItemIndex + ' .input-group input').on('changeDate', function () {
					$(this).datepicker('update');
					var itemIndex = $(this).parent().parent().attr("class").split(' ').pop().slice(7);
					var itemValue = $(this).val();
					//dateChanged = $(this).val();
					$(this).attr('value', itemValue)
					$(this).text(itemValue)
					console.log('itemValue: ' + itemValue);
				});
				attachDateControls();
			})
		
		
		});

		var OHWDates = db.ref('/OHWClass').orderByChild("Value");
		// VSPDates.on("child_added", function (data) {
		// 	var item = $('<div class="panel-body"></div>').val(data.val()).html(data.key);
		// 	$("#VSPDates").append($('<div class="panel-body"></div>').val(data.val()).html(data.key));
		// 	$(item).append('<div class="edit-date">EDIT</div>');
		// 	$("#VSPDates").append(item);

		// });

		OHWDates.once('value', function (snapshot) {
			snapshot.forEach(function (data) {
				//var childKey = data.key;
				//var childData = data.val();
				//console.log("childKey:" + childKey);
				//console.log("childData: " + childData);
				OHWIndex++;
				var dbDateitem = data.val();
		
				function formatDate(inputDate) {
					var dateString = inputDate.split("-");
					//console.log(inputDate)
					var year = dateString[0];
					var month = dateString[1];
					var day = dateString[2];
					//console.log('year: ' + year)
					//console.log('month: ' + month)
					//console.log('day: ' + day)
					return month + '-' + day + '-' + year;
				}
		
				var thisDate = formatDate(dbDateitem);
				var dateChanged;
				var row = $('<div class="panel-body' + " OHWClass" + OHWIndex + '"></div>');
				var calendar = $('<div class="input-group date">')
				var item = $('<input type="text" value="" class="date-item " readonly disabled>').attr('value', thisDate).html(thisDate);
				var calpopup = $('<span class="add-on"><i class="icon-th"></i></span>')
				$(calendar).append(calpopup, item);
				$(row).append(calendar)
				$(row).append('<div class="edit-date">EDIT</div><div class="delete-btn" ></div><div class="save-date-box" style="display: none"><button class="save-date-btn" >SAVE</button></div><div class="cancel-date-box" style="display: none"><button class="cancel-date-btn" >CANCEL</button></div>')
				$("#OHWDates").append(row);
				$('.input-group input').datepicker({
					format: "mm-dd-yyyy",
					autoclose: true,
					showOnFocus: true
				});
				$(".OHWClass" + OHWIndex + ' .input-group input').on('changeDate', function () {
					$(this).datepicker('update');
					var itemIndex = $(this).parent().parent().attr("class").split(' ').pop().slice(7);
					var itemValue = $(this).val();
					dateChanged = $(this).val();
					$(this).attr('value', itemValue)
					$(this).text(itemValue)
					console.log('itemValue: ' + itemValue);
				});
		
			});
		}).then(function (snapshot) {
			//CHANGE TO SPECIFIC CLASS HD, LD, VSP
			var newItemIndex = $('#OHWDates .panel-body').length + 1;
			var row = $('<div class="panel-body add-new"></div>');
			var addNew = $('<div class="add-new-row"><div class="add-new-btn-vps"></div><div>Add new Date</div></div>');
			$(row).append(addNew)
			$("#OHWDates").append(row);
			$("#editClassDates").modal()
			$("#editClassDates").on('shown.bs.modal', function () {
				attachDateControls();
		
			})
		
			$('.add-new-btn-vps').unbind().click(function () {
				console.log("ADD NEW");
				var newItemIndex = $(this).parent().parent().parent().find('.panel-body').length + 1;
				console.log(newItemIndex);
				var addNewIndex = OHWIndex + 1;
				var row = $('<div class="panel-body' + " OHWClass" + newItemIndex + '"></div>');
				var calendar = $('<div class="input-group date">')
				var item = $('<input type="text" value="" class="date-item " readonly disabled>');
				var calpopup = $('<span class="add-on"><i class="icon-th"></i></span>')
				$(calendar).append(calpopup, item);
				$(row).append(calendar)
				$(row).append('<div class="edit-date">EDIT</div><div class="delete-btn" ></div><div class="save-date-box" style="display: none"><button class="save-date-btn" >SAVE</button></div><div class="cancel-date-box" style="display: none"><button class="cancel-date-btn" >CANCEL</button></div>')
				$(this).parent().parent().before(row);
				$('.input-group input').datepicker({
					format: "mm-dd-yyyy",
					autoclose: true,
					showOnFocus: true
				});
				$(".OHWClass" + newItemIndex + ' .input-group input').on('changeDate', function () {
					$(this).datepicker('update');
					var itemIndex = $(this).parent().parent().attr("class").split(' ').pop().slice(7);
					var itemValue = $(this).val();
					//dateChanged = $(this).val();
					$(this).attr('value', itemValue)
					$(this).text(itemValue)
					console.log('itemValue: ' + itemValue);
				});
				attachDateControls();
			})
		
		
		});

		var VPSDates = db.ref('/VPSClass').orderByChild("Value");
		// VSPDates.on("child_added", function (data) {
		// 	var item = $('<div class="panel-body"></div>').val(data.val()).html(data.key);
		// 	$("#VSPDates").append($('<div class="panel-body"></div>').val(data.val()).html(data.key));
		// 	$(item).append('<div class="edit-date">EDIT</div>');
		// 	$("#VSPDates").append(item);

		// });

		VPSDates.once('value', function (snapshot) {
			snapshot.forEach(function (data) {
				//var childKey = data.key;
				//var childData = data.val();
				//console.log("childKey:" + childKey);
				//console.log("childData: " + childData);
				VPSIndex++;
				var dbDateitem = data.val();
		
				function formatDate(inputDate) {
					var dateString = inputDate.split("-");
					//console.log(inputDate)
					var year = dateString[0];
					var month = dateString[1];
					var day = dateString[2];
					//console.log('year: ' + year)
					//console.log('month: ' + month)
					//console.log('day: ' + day)
					return month + '-' + day + '-' + year;
				}
		
				var thisDate = formatDate(dbDateitem);
				var dateChanged;
				var row = $('<div class="panel-body' + " VPSClass" + VPSIndex + '"></div>');
				var calendar = $('<div class="input-group date">')
				var item = $('<input type="text" value="" class="date-item " readonly disabled>').attr('value', thisDate).html(thisDate);
				var calpopup = $('<span class="add-on"><i class="icon-th"></i></span>')
				$(calendar).append(calpopup, item);
				$(row).append(calendar)
				$(row).append('<div class="edit-date">EDIT</div><div class="delete-btn" ></div><div class="save-date-box" style="display: none"><button class="save-date-btn" >SAVE</button></div><div class="cancel-date-box" style="display: none"><button class="cancel-date-btn" >CANCEL</button></div>')
				$("#VPSDates").append(row);
				$('.input-group input').datepicker({
					format: "mm-dd-yyyy",
					autoclose: true,
					showOnFocus: true
				});
				$(".VPSClass" + VPSIndex + ' .input-group input').on('changeDate', function () {
					$(this).datepicker('update');
					var itemIndex = $(this).parent().parent().attr("class").split(' ').pop().slice(7);
					var itemValue = $(this).val();
					dateChanged = $(this).val();
					$(this).attr('value', itemValue)
					$(this).text(itemValue)
					console.log('itemValue: ' + itemValue);
				});
		
			});
		}).then(function (snapshot) {
			//CHANGE TO SPECIFIC CLASS HD, LD, VSP
			var newItemIndex = $('#VPSDates .panel-body').length + 1;
			var row = $('<div class="panel-body add-new"></div>');
			var addNew = $('<div class="add-new-row"><div class="add-new-btn-vps"></div><div>Add new Date</div></div>');
			$(row).append(addNew)
			$("#VPSDates").append(row);
			$("#editClassDates").modal()
			$("#editClassDates").on('shown.bs.modal', function () {
				attachDateControls();
		
			})
		
			$('.add-new-btn-vps').unbind().click(function () {
				console.log("ADD NEW");
				var newItemIndex = $(this).parent().parent().parent().find('.panel-body').length + 1;
				console.log(newItemIndex);
				var addNewIndex = VPSIndex + 1;
				var row = $('<div class="panel-body' + " VPSClass" + newItemIndex + '"></div>');
				var calendar = $('<div class="input-group date">')
				var item = $('<input type="text" value="" class="date-item " readonly disabled>');
				var calpopup = $('<span class="add-on"><i class="icon-th"></i></span>')
				$(calendar).append(calpopup, item);
				$(row).append(calendar)
				$(row).append('<div class="edit-date">EDIT</div><div class="delete-btn" ></div><div class="save-date-box" style="display: none"><button class="save-date-btn" >SAVE</button></div><div class="cancel-date-box" style="display: none"><button class="cancel-date-btn" >CANCEL</button></div>')
				$(this).parent().parent().before(row);
				$('.input-group input').datepicker({
					format: "mm-dd-yyyy",
					autoclose: true,
					showOnFocus: true
				});
				$(".VPSClass" + newItemIndex + ' .input-group input').on('changeDate', function () {
					$(this).datepicker('update');
					var itemIndex = $(this).parent().parent().attr("class").split(' ').pop().slice(7);
					var itemValue = $(this).val();
					//dateChanged = $(this).val();
					$(this).attr('value', itemValue)
					$(this).text(itemValue)
					console.log('itemValue: ' + itemValue);
				});
				attachDateControls();
			})
		
		
		});

		var ADDates = db.ref('/ADClass').orderByChild("Value");

		ADDates.once('value', function (snapshot) {
			snapshot.forEach(function (data) {
				//var childKey = data.key;
				//var childData = data.val();
				//console.log("childKey:" + childKey);
				//console.log("childData: " + childData);
				ADIndex++;
				var dbDateitem = data.val();
		
				function formatDate(inputDate) {
					var dateString = inputDate.split("-");
					//console.log(inputDate)
					var year = dateString[0];
					var month = dateString[1];
					var day = dateString[2];
					//console.log('year: ' + year)
					//console.log('month: ' + month)
					//console.log('day: ' + day)
					return month + '-' + day + '-' + year;
				}
		
				var thisDate = formatDate(dbDateitem);
				var dateChanged;
				var row = $('<div class="panel-body' + " ADClass" + ADIndex + '"></div>');
				var calendar = $('<div class="input-group date">')
				var item = $('<input type="text" value="" class="date-item " readonly disabled>').attr('value', thisDate).html(thisDate);
				var calpopup = $('<span class="add-on"><i class="icon-th"></i></span>')
				$(calendar).append(calpopup, item);
				$(row).append(calendar)
				$(row).append('<div class="edit-date">EDIT</div><div class="delete-btn" ></div><div class="save-date-box" style="display: none"><button class="save-date-btn" >SAVE</button></div><div class="cancel-date-box" style="display: none"><button class="cancel-date-btn" >CANCEL</button></div>')
				$("#ADDates").append(row);
				$('.input-group input').datepicker({
					format: "mm-dd-yyyy",
					autoclose: true,
					showOnFocus: true
				});
				$(".ADClass" + ADIndex + ' .input-group input').on('changeDate', function () {
					$(this).datepicker('update');
					var itemIndex = $(this).parent().parent().attr("class").split(' ').pop().slice(7);
					var itemValue = $(this).val();
					dateChanged = $(this).val();
					$(this).attr('value', itemValue)
					$(this).text(itemValue)
					console.log('itemValue: ' + itemValue);
				});
		
			});
		}).then(function (snapshot) {
			//CHANGE TO SPECIFIC CLASS HD, LD, VSP, AD
			var newItemIndex = $('#ADDates .panel-body').length + 1;
			var row = $('<div class="panel-body add-new"></div>');
			var addNew = $('<div class="add-new-row"><div class="add-new-btn-AD"></div><div>Add new Date</div></div>');
			$(row).append(addNew)
			$("#ADDates").append(row);
			$("#editClassDates").modal()
			$("#editClassDates").on('shown.bs.modal', function () {
				attachDateControls();
		
			})
		
			$('.add-new-btn-AD').unbind().click(function () {
				console.log("ADD NEW");
				var newItemIndex = $(this).parent().parent().parent().find('.panel-body').length + 1;
				console.log(newItemIndex);
				var addNewIndex = ADIndex + 1;
				var row = $('<div class="panel-body' + " ADClass" + newItemIndex + '"></div>');
				var calendar = $('<div class="input-group date">')
				var item = $('<input type="text" value="" class="date-item " readonly disabled>');
				var calpopup = $('<span class="add-on"><i class="icon-th"></i></span>')
				$(calendar).append(calpopup, item);
				$(row).append(calendar)
				$(row).append('<div class="edit-date">EDIT</div><div class="delete-btn" ></div><div class="save-date-box" style="display: none"><button class="save-date-btn" >SAVE</button></div><div class="cancel-date-box" style="display: none"><button class="cancel-date-btn" >CANCEL</button></div>')
				$(this).parent().parent().before(row);
				$('.input-group input').datepicker({
					format: "mm-dd-yyyy",
					autoclose: true,
					showOnFocus: true
				});
				$(".ADClass" + newItemIndex + ' .input-group input').on('changeDate', function () {
					$(this).datepicker('update');
					var itemIndex = $(this).parent().parent().attr("class").split(' ').pop().slice(7);
					var itemValue = $(this).val();
					//dateChanged = $(this).val();
					$(this).attr('value', itemValue)
					$(this).text(itemValue)
					console.log('itemValue: ' + itemValue);
				});
				attachDateControls();
			})
		
		
		});


function attachDateControls() {
	var oldDate;
	var newDate;
	$('.edit-date').unbind().click(function () {
		console.log('edit clicked')
		$(this).parent().find('.edit-date').hide();
		$('.edit-date').css('color', 'lightgray');
		$('.edit-date').css('pointer-events', 'none');
		$(this).parent().find('.save-date-box').show();
		$(this).parent().find('.cancel-date-box').show();
		//$(this).parent().find('.date-item').attr('contenteditable', 'true');
		$(this).parent().find('.date-item').removeAttr('disabled');
		$(this).parent().find('.delete-btn').hide();
		$('.delete-btn').addClass('disabled-btn');
		$(this).parent().find('.date-item').focus();
		oldDate = $(this).parent().find('.date-item').text();
		console.log("oldDate")
		console.log(oldDate)
	})

	$('.save-date-btn').unbind().click(function () {
		$(this).parent().parent().find('.edit-date').show();
		$('.edit-date').css('color', '#E1261C');
		$('.edit-date').css('pointer-events', 'auto');
		$(this).parent().parent().find('.save-date-box').hide();
		$(this).parent().parent().find('.cancel-date-box').hide();
		$(this).parent().find('.date-item').prop('disabled');
		$(this).parent().find('.date-item').blur();
		$('.delete-btn').removeClass('disabled-btn');
		$(this).parent().parent().find('.delete-btn').show();
		newDate = $(this).parent().parent().find('.date-item').text();
		console.log($(this).parent().parent().attr("class"))
		var ref = $(this).parent().parent().attr("class");
		console.log(ref)
		var thisClass = function() {
			if (ref.includes("HD")) {
                return "HD";
            } else if (ref.includes("LD")) {
                return "LD";
            } else if (ref.includes("VPS")) {
                return "VPS";
		} else if (ref.includes("AD")) {
			return "AD";
		}
			}
		var classRef = thisClass();
		console.log()
		if (oldDate != newDate) {
			function reformatDate(inputDate) {
				var dateString = inputDate.split("-");
				console.log(inputDate)
				var year = dateString[2];
				var month = dateString[0];
				var day = dateString[1];
				//console.log('year: ' + year)
				//console.log('month: ' + month)
				//console.log('day: ' + day)
				return year + '-' + month + '-' + day;
			}

			var updatedDate = reformatDate(newDate);
			//console.log(updatedDate)
			console.log('NEW ENTRY: ' + newDate + ": " + updatedDate)



			db.ref('/'+ classRef + 'Class').update({
				[newDate]: updatedDate
			}).then(function (success) {

			}); // end update database

			var ref2 = db.ref('/'+ classRef + 'Class');
			console.log("oldDate")
			console.log(oldDate)
			ref2.once("value")
			  .then(function(snapshot) {

				if(oldDate){
				var childKey = snapshot.child(oldDate).key; // "last"
				console.log("+++++++++++++++++++++snapshot")
				console.log(childKey);
				console.log($(this))
				if (childKey) {
					let oldRef = firebase.database().ref('/'+ classRef + 'Class').child(oldDate);
					oldRef.remove();
					}

				}
				oldDate = false;
				newDate = false;
			  });


			// let oldRef = firebase.database().ref('/'+ classRef + 'Class').child(oldDate);
			// if (oldRef) {
			// 	oldRef.remove();
			// }
			console.log('value updated')

		}; // end if statement
	}); // end save btn

	$('.cancel-date-btn').unbind().click(function () {
		$(this).parent().parent().find('.edit-date').show();
		$('.edit-date').css('color', '#E1261C');
		$('.edit-date').css('pointer-events', 'auto');
		$(this).parent().parent().find('.save-date-box').hide();
		$(this).parent().parent().find('.cancel-date-box').hide();
		$(this).parent().parent().find('.date input').prop("disabled", "disabled")
		$(this).parent().parent().find('.delete-btn').removeAttr('disabled');
		$(this).parent().parent().find('.delete-btn').show();
		$(this).parent().find('.date-item').blur();
		$(this).parent().find('.date-item').text()
		$('.delete-btn').removeClass('disabled-btn');
		$(this).parent().parent().find('.date input').attr('value', oldDate)
		$(this).parent().parent().find('.date input').text(oldDate)


		$(this).parent().parent().find('.date-item').datepicker('update', oldDate);


	})


$('.delete-btn').unbind().click(function () {

	var ref = $(this).parent().parent().attr("class");

	console.log("ref")
console.log(ref)
	var thisClass = function() {
		if (ref.includes("hd")) {
			return "HD";
		} else if (ref.includes("ld")) {
			return "LD";
		} else if (ref.includes("vps")) {
			return "VPS";
		} else if (ref.includes("ad")) {
			return "AD";
		}
		}
		var classRef = thisClass();
	var result = confirm('Do you want to delete this class date?');

	if (result) {


		var oldDate = $(this).parent().find('.date-item').attr('value');
		var oldDBDate = firebase.database().ref('/'+ thisClass() + 'Class').child(oldDate);
		oldDBDate.remove();
		$(this).parent().remove();
	}; // end if statement

})


}


	})




});

function updateClassDate(objVal) {
	//console.log($(objVal).val())
	var currClass = $(objVal).attr('class').split(" ").pop();
	var userIDofSelectedCell = $(objVal).parent().parent().parent().parent().parent().attr('class').slice(8).split(" ")[0]; //////console.log('currentUserID: ' + userIDofSelectedCell)

	if (currClass == "HDDropdown") {
		firebase.database().ref(dbLocation + '/' + userIDofSelectedCell).update({
			ClassCompletionHD: $(objVal).val()
		}).then(function () { //////console.log("UPDATED")
		});
	}

	if (currClass == "LDDropdown") {
		$("#LDClassInfo").val();
		firebase.database().ref(dbLocation + '/' + userIDofSelectedCell).update({
			ClassCompletionLD: $(objVal).val()
		}).then(function () { //////console.log("UPDATED")
		});
	}

	if (currClass == "VPSDropdown") {
		$("#VPSClassInfo").val();
		firebase.database().ref(dbLocation + '/' + userIDofSelectedCell).update({
			ClassCompletionVPS: $(objVal).val()
		}).then(function () { //////console.log("UPDATED")
		});
	}

	if (currClass == "ADDropdown") {
		firebase.database().ref(dbLocation + '/' + userIDofSelectedCell).update({
			ClassCompletionAD: $(objVal).val()
		}).then(function () { //////console.log("UPDATED")
		});
	}
}

function displayHDClasses(entry) {
	//////console.log(typeof($(entry).parent().parent().parent().parent().parent().index()))
	//////console.log(typeof(entry))
	if (typeof entry == 'number') { ////console.log('number')
	} else {
		////console.log('object')
		entry = $(entry).parent().parent().parent().parent().parent().index();
	} //console.log('entry: ' + entry)
	//////console.log($(this))


	if ($(".classHD").eq(entry).prop("checked")) {
		$(".HDDropdown").eq(entry).css('display', 'block');
		addDateHD(entry); // firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
		// 	ClassHD: true
		// }).then(function() {
		// 	//////console.log("UPDATED")
		// });
	} else {
		$(".HDDropdown").eq(entry).css('display', 'none'); // firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
		// 	ClassHD: false,
		// 	ClassCompletionHD: ""
		// }).then(function() {
		// 	//////console.log("UPDATED")
		// });
	}

	adjustEditContentBtn();
}

function displayLDClasses(entry) {
	if (typeof entry == 'number') { ////console.log('number')
	} else {
		////console.log('object')
		entry = $(entry).parent().parent().parent().parent().parent().index();
	}

	if ($(".classLD").eq(entry).prop("checked")) {
		$(".LDDropdown").eq(entry).css('display', 'block'); //$(".LDDropdown").eq(entry).val($(".LDDropdown option:eq(0)").eq(entry).prop("selected", true));

		addDateLD(entry); // firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
		// 	ClassLD: true
		// }).then(function() {
		// 	//////console.log("UPDATED")
		// });
	} else {
		$(".LDDropdown").eq(entry).css('display', 'none'); // firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
		// 	ClassLD: false,
		// 	ClassCompletionLD: ""
		// }).then(function() {
		// 	//////console.log("UPDATED")
		// });
	}

	adjustEditContentBtn();
}

function displayVPSClasses(entry) {
	if (typeof entry == 'number') { ////console.log('number')
	} else {
		////console.log('object')
		entry = $(entry).parent().parent().parent().parent().parent().index();
	}

	if ($(".classVPS").eq(entry).prop("checked")) {
		$(".VPSDropdown").eq(entry).css('display', 'block'); //$(".VPSDropdown").eq(entry).val($(".VPSDropdown option:eq(0)").eq(entry).prop("selected", true));

		addDateVPS(entry); // firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
		// 	ClassVPS: true
		// }).then(function() {
		// 	//////console.log("UPDATED")
		// });
	} else {
		$(".VPSDropdown").eq(entry).css('display', 'none'); // firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
		// 	ClassVPS: false,
		// 	ClassCompletionVPS: ""
		// }).then(function() {
		// 	//////console.log("UPDATED")
		// });
	}

	adjustEditContentBtn();
} //start functions

function displayADClasses(entry) {
	//////console.log(typeof($(entry).parent().parent().parent().parent().parent().index()))
	//////console.log(typeof(entry))
	if (typeof entry == 'number') { ////console.log('number')
	} else {
		////console.log('object')
		entry = $(entry).parent().parent().parent().parent().parent().index();
	} //console.log('entry: ' + entry)
	//////console.log($(this))


	if ($(".classAD").eq(entry).prop("checked")) {
		$(".ADDropdown").eq(entry).css('display', 'block');
		addDateAD(entry); // firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
		// 	ClassAD: true
		// }).then(function() {
		// 	//////console.log("UPDATED")
		// });
	} else {
		$(".ADDropdown").eq(entry).css('display', 'none'); // firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
		// 	ClassAD: false,
		// 	ClassCompletionAD: ""
		// }).then(function() {
		// 	//////console.log("UPDATED")
		// });
	}

	adjustEditContentBtn();
}

function startHDClasses(entry) {
	//////console.log(typeof($(entry).parent().parent().parent().parent().parent().index()))
	//////console.log(typeof(entry))
	if (typeof entry == 'number') { ////console.log('number')
	} else {
		////console.log('object')
		entry = $(entry).parent().parent().parent().parent().parent().index();
	} //console.log('entry: ' + entry)
	//////console.log($(this))


	if ($(".classHD").eq(entry).prop("checked")) {
		$(".HDDropdown").eq(entry).css('display', 'block');
		updateDateHD(entry);
		firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
			ClassHD: true
		}).then(function () { //////console.log("UPDATED")
		});
	} else {
		$(".HDDropdown").eq(entry).css('display', 'none');
		firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
			ClassHD: false,
			ClassCompletionHD: ""
		}).then(function () { //////console.log("UPDATED")
		});
	}

	adjustEditContentBtn();
}

function startLDClasses(entry) {
	if (typeof entry == 'number') { ////console.log('number')
	} else {
		////console.log('object')
		entry = $(entry).parent().parent().parent().parent().parent().index();
	}

	if ($(".classLD").eq(entry).prop("checked")) {
		$(".LDDropdown").eq(entry).css('display', 'block');
		updateDateLD(entry);
		firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
			ClassLD: true
		}).then(function () { //////console.log("UPDATED")
		});
	} else {
		$(".LDDropdown").eq(entry).css('display', 'none');
		firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
			ClassLD: false,
			ClassCompletionLD: ""
		}).then(function () { //////console.log("UPDATED")
		});
	}

	adjustEditContentBtn();
}

function startVPSClasses(entry) {
	if (typeof entry == 'number') { ////console.log('number')
	} else {
		////console.log('object')
		entry = $(entry).parent().parent().parent().parent().parent().index();
	}

	if ($(".classVPS").eq(entry).prop("checked")) {
		$(".VPSDropdown").eq(entry).css('display', 'block');
		updateDateVPS(entry);
		firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
			ClassVPS: true
		}).then(function () { //////console.log("UPDATED")
		});
	} else {
		$(".VPSDropdown").eq(entry).css('display', 'none');
		firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
			ClassVPS: false,
			ClassCompletionVPS: ""
		}).then(function () { //////console.log("UPDATED")
		});
	}

	adjustEditContentBtn();
} //Populate classes in Registration page.

function startADClasses(entry) {
	//////console.log(typeof($(entry).parent().parent().parent().parent().parent().index()))
	//////console.log(typeof(entry))
	if (typeof entry == 'number') { ////console.log('number')
	} else {
		////console.log('object')
		entry = $(entry).parent().parent().parent().parent().parent().index();
	} //console.log('entry: ' + entry)
	//////console.log($(this))


	if ($(".classAD").eq(entry).prop("checked")) {
		$(".ADDropdown").eq(entry).css('display', 'block');
		updateDateAD(entry);
		firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
			ClassAD: true
		}).then(function () { //////console.log("UPDATED")
		});
	} else {
		$(".ADDropdown").eq(entry).css('display', 'none');
		firebase.database().ref(dbLocation).child(matchedArray[entry]).update({
			ClassAD: false,
			ClassCompletionAD: ""
		}).then(function () { //////console.log("UPDATED")
		});
	}

	adjustEditContentBtn();
}

function updateDateHD(entry) {
	//console.log('entry')
	//console.log(entry)
	//////console.log('matchedArray' + matchedArray)
	$(".HDDropdown").eq(entry).find('option').remove().end();
	var HDClasses = db.ref('/HDClass').orderByChild("Value");
	HDClasses.on("child_added", function (data) {
		//////console.log(data.val())
		$(".HDDropdown").eq(entry).append($('<option></option>').val(data.val()).html(data.key));
	});
	firebase.database().ref('/' + dbLocation + '/' + matchedArray[entry] + '/ClassCompletionHD').once('value').then(function (snapshot) {
		$(".HDDropdown").eq(entry).val(snapshot.val()); //////console.log('reset date to: ' + snapshot.val())
	});
} //Populate classes in Registration page.


function updateDateLD(entry) {
	$(".LDDropdown").eq(entry).find('option').remove().end();
	var LDClasses = db.ref('/LDClass').orderByChild("Value");
	LDClasses.on("child_added", function (data) {
		//////console.log(data.val())
		$(".LDDropdown").eq(entry).append($('<option></option>').val(data.val()).html(data.key));
	});
	firebase.database().ref('/' + dbLocation + '/' + matchedArray[entry] + '/ClassCompletionLD').once('value').then(function (snapshot) {
		$(".LDDropdown").eq(entry).val(snapshot.val()); //////console.log('reset date to: ' + snapshot.val())
	});
} //Populate classes in Registration page.


function updateDateVPS(entry) {
	$(".VPSDropdown").eq(entry).find('option').remove().end();
	var VPSClasses = db.ref('/VPSClass').orderByChild("Value");
	VPSClasses.on("child_added", function (data) {
		//////console.log(data.val())
		$(".VPSDropdown").eq(entry).append($('<option></option>').val(data.val()).html(data.key));
	});
	firebase.database().ref('/' + dbLocation + '/' + matchedArray[entry] + '/ClassCompletionVPS').once('value').then(function (snapshot) {
		$(".VPSDropdown").eq(entry).val(snapshot.val()); //////console.log('reset date to: ' + snapshot.val())
	});
} //Populate classes in Registration page.

function updateDateAD(entry) {
	$(".ADDropdown").eq(entry).find('option').remove().end();
	var ADClasses = db.ref('/ADClass').orderByChild("Value");
	ADClasses.on("child_added", function (data) {
		//////console.log(data.val())
		$(".ADDropdown").eq(entry).append($('<option></option>').val(data.val()).html(data.key));
	});
	firebase.database().ref('/' + dbLocation + '/' + matchedArray[entry] + '/ClassCompletionAD').once('value').then(function (snapshot) {
		$(".ADDropdown").eq(entry).val(snapshot.val()); //////console.log('reset date to: ' + snapshot.val())
	});
} //Populate classes in Registration page.


function addDateHD(entry) {
	//console.log('entry')
	//console.log(entry)
	//////console.log('matchedArray' + matchedArray)
	$(".HDDropdown").eq(entry).find('option').remove().end();
	var HDClasses = db.ref('/HDClass').orderByChild("Value");
	HDClasses.on("child_added", function (data) {
		//////console.log(data.val())
		$(".HDDropdown").eq(entry).append($('<option></option>').val(data.val()).html(data.key));
	}); // firebase.database().ref('/' + dbLocation + '/' + matchedArray[entry] + '/ClassCompletionHD').once('value').then(function(snapshot) {
	// 	$(".HDDropdown").eq(entry).val(snapshot.val())
	// 	//////console.log('reset date to: ' + snapshot.val())
	// });
} //Populate classes in Registration page.


function addDateLD(entry) {
	$(".LDDropdown").eq(entry).find('option').remove().end();
	var LDClasses = db.ref('/LDClass').orderByChild("Value");
	LDClasses.on("child_added", function (data) {
		//////console.log(data.val())
		$(".LDDropdown").eq(entry).append($('<option></option>').val(data.val()).html(data.key));
	}); // firebase.database().ref('/' + dbLocation + '/' + matchedArray[entry] + '/ClassCompletionLD').once('value').then(function(snapshot) {
	// 	$(".LDDropdown").eq(entry).val(snapshot.val())
	// 	//////console.log('reset date to: ' + snapshot.val())
	// });
} //Populate classes in Registration page.


function addDateVPS(entry) {
	$(".VPSDropdown").eq(entry).find('option').remove().end();
	var VPSClasses = db.ref('/VPSClass').orderByChild("Value");
	VPSClasses.on("child_added", function (data) {
		//////console.log(data.val())
		$(".VPSDropdown").eq(entry).append($('<option></option>').val(data.val()).html(data.key));
	}); // firebase.database().ref('/' + dbLocation + '/' + matchedArray[entry] + '/ClassCompletionVPS').once('value').then(function(snapshot) {
	// 	$(".VPSDropdown").eq(entry).val(snapshot.val())
	// 	//////console.log('reset date to: ' + snapshot.val())
	// });
}
function addDateAD(entry) {
	$(".ADDropdown").eq(entry).find('option').remove().end();
	var ADClasses = db.ref('/ADClass').orderByChild("Value");
	ADClasses.on("child_added", function (data) {
		//////console.log(data.val())
		$(".ADDropdown").eq(entry).append($('<option></option>').val(data.val()).html(data.key));
	}); // firebase.database().ref('/' + dbLocation + '/' + matchedArray[entry] + '/ClassCompletionAD').once('value').then(function(snapshot) {
	// 	$(".ADDropdown").eq(entry).val(snapshot.val())
	// 	//////console.log('reset date to: ' + snapshot.val())
	// });
}
function adjustEditContentBtn() {
	$('.control-box').each(function (e) {
		var newHeight = $(this).parent().parent().parent().parent().height(); //	console.log(newHeight)

		var currentHeight = $(this).height(); //console.log(currentHeight)

		$(this).css('top', newHeight / 2 - currentHeight).css('display', 'flex');
	});
}
