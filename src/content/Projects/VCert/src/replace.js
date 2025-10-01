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
    var addNew = $('<div class="add-new-row"><div class="add-new-btn"></div><div>Add new Date</div></div>');
    $(row).append(addNew)
    $("#VPSDates").append(row);
    $("#editClassDates").modal()
    $("#editClassDates").on('shown.bs.modal', function () {
        attachDateControls();

    })

    $('.add-new-btn').on('click', function () {
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