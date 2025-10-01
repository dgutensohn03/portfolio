"use strict";

auth.onAuthStateChanged(function (user) {
    if (user) {
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/' + dbLocation + '/' + userId).once('value').then(function (snapshot) {
            var hasAdminRights = (snapshot.val() && snapshot.val().admin) || false;
            if (hasAdminRights == true) {
                var TeamList = []

                function onStart() {
                    //gatherData();

                    //newTable(1);
                    //newTable(2);
                    //newTable(3);


                }





                function newEntry(TeamList) {
                    var newTable = document.createElement("table");

                    for (var entry = 0; entry < TeamList.length; entry++) {
                        var newTable = document.createElement("table");
                        newTable.className = 'newUser_' + entry;
                        var newUserItem 
                        if ((entry + 1) % 2 == 0) {
                            console.log('even')
                            newTable.classList.add("table", "table-borderless", "table_LG");
                        } else {
                            console.log('odd')
                            newTable.classList.add("table", "table-borderless");
                        }
                        
                        newHead1(newTable, "Name", "Email", "Address", "Date VCERT Class Completed");
                        newBody1(newTable, TeamList[entry].FirstName + " " + TeamList[entry].LastName, TeamList[entry].Email, TeamList[entry].Address_1, TeamList[entry].ClassCompletion, 1);
                        newHead1(newTable, "VCERT Class", "Valvoline Role", "Section", "RegionTerritory");
                        newBody1(newTable, TeamList[entry].ClassInfo, TeamList[entry].Role, "Section", TeamList[entry].Country, 0);

                        document.getElementById("teamList_Body1").appendChild(newTable);
                    }
                    console.log(TeamList.length);
                }

                function newHead1(giveTo, para1, para2, para3, para4) {
                    var newEmpty = document.createElement("tr");
                    var newEmptee = document.createElement("td");
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

                    newHead.appendChild(newTR);

                    giveTo.appendChild(newHead);
                    

                }

                function newBody1(giveTo, para1, para2, para3, para4, FLAG) {


                    var newBody = document.createElement("tbody");
                    var newTR = document.createElement("tr");

                    var newTH1 = document.createElement("td");
                    newTH1.innerHTML = para1;
                    newTR.appendChild(newTH1);

                    var newTH2 = document.createElement("td");
                    newTH2.innerHTML = para2;
                    newTR.appendChild(newTH2);

                    var newTH3 = document.createElement("td");
                    newTH3.innerHTML = para3;
                    newTR.appendChild(newTH3);

                    var newTH4 = document.createElement("td");
                    newTH4.innerHTML = para4;
                    newTR.appendChild(newTH4);

                    newBody.appendChild(newTR);

                    giveTo.appendChild(newBody);

                    if (FLAG == 1) {
                        //EMPTY SECTION-----------------------------------------
                        var newEmpty = document.createElement("tr");
                        var newEmptee = document.createElement("td");
                        newEmpty.appendChild(newEmptee);
                        giveTo.appendChild(newEmpty);
                    }
                }

                $(document).ready(function () {
                    gatherData(TeamList, function () {
                        console.log('callback')
                        console.log(TeamList)
                    });
                });

                function gatherData(TeamList) {
                    var userDatabaseLocation = firebase.database().ref('/' + dbLocation);
                    userDatabaseLocation.orderByValue().on("value", function (snapshot) {
                        var userCount = 0;
                        var count = 0;

                        snapshot.forEach(function (data) {
                            userCount++;
                            //console.log(userCount + ': User' + ' - ' + data.key)
                            var userData = firebase.database().ref('/' + dbLocation + '/' + data.key);
                            userData.orderByValue().on("value", function (snapshot) {
                                //console.log(snapshot.key + ' - ' + snapshot.val());
                                var TeamUser = {};
                                snapshot.forEach(function (data) {
                                    if (count == userCount) {
                                        TeamUser[data.key] = data.val();
                                    } else {
                                        TeamList.push(TeamUser)
                                        count++;
                                        console.log('user pushed')
                                    }
                                });
                            });
                        });
                        console.log(TeamList)
                        newEntry(TeamList);
                    })
                }


            } else {
                auth.signOut().then(function () {
                    console.log('user has been logged out');
                });
                $('#auth-error').html('You do not have Admin rights. Please try again or log in through the "User Login" link located at the top of the page.');
            }
        });
    }


});