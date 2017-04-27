$( document ).ready(function() {

      var today = moment().format('MM/D/YYYY');

      //var eventDate = moment('2017-04-27').format('MM/D/YYYY');

      var eventDate = moment($('.slot-container').first().data('endtime')).format('MM/D/YYYY');

      //alert(today);
      alert(eventDate);

      if (today == eventDate) {

              var timeCheck = null,
                  interval = 2000,
                  value = 0;

              var i = 0;

              //refresh every 10 seconds
              timeCheck = setInterval(function() {


                    $('.slot-container').each(function() {
                      //alert($(this).data('pagename'));

                      console.log('loop'+ i++);

                      var now = moment();

                      var date = moment($(this).data('endtime'));

                      //alert("now:" + now);

                      if (date < now) {
                        $(this).fadeOut();
                        $("button").show();
                      }

                      document.getElementById("time").innerHTML = now;

                      alert(date);

                    });

              }, interval);
      }else{
        alert("the event is not today, do nothin'");
      }


  $( "button" ).click(function() {
    $( ".slot-container" ).show( "slow" );
    clearInterval(timeCheck);
    timeCheck = null
    console.log("stopped the loop");
  });

});
