
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "../mail.php", //Change
        data: th.serialize()
    }).done(function() {
      window.location.href = 'thanks.html';

        setTimeout(function() {
            // Done Functions
            th.window.location.href = '../index.html';
        }, 9000);
    });
    return false;
});