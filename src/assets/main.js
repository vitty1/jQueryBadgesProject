$(function() {

  // your code will go here
    $.ajax({
        url: 'https://www.codeschool.com/users/2776290.json',
        dataType: 'jsonp',
        success: function(response) {
            // handle response
            $.each(response.courses.completed, function( key, value ) {
                $('#badges').append('<div class="course"><h3>'+value.title+'</h3><img src="'+value.badge+'" /><a class="btn btn-primary" href="'+value.url+'" target="_blank">See Course</a></div>');
            });
        }
    });
});
