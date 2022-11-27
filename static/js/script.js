$(document).ready(function(){
    $("#sidebar a.family").click(function(){
       $(this).parents("li:first").find("ul.wavelets").slideToggle('fast');
       return false;
    });
    $('.show-coeffs, .hide-coeffs').click(function(){
        $('.coeffs, .show-coeffs, .hide-coeffs').toggle();
        return false;
    });
    $("#filter-bank a.copy").click(function(){
        var $a = $(this).blur();
        var $area = $a.parents("dl:first").find("textarea");
        //var data = new Array();
        //$(this).parents("dl:first").find("ol span").each(function(){
        //    data[data.length] = $(this).text().replace('/\s+/', '');
        //});
        //data = data.join("\r");
        //$area.text(data);
        $area.slideToggle('fast', function(){
            if($area.is(':visible')){
                $area.focus().select();
                if( window.clipboardData && clipboardData.setData )
                    clipboardData.setData("Text", $area.text());
            }
        });
        $('span.up, span.down', $a).toggleClass('hidden');
        return false;
    });
    $('a[rel=facebox]').click(function(){
        $.facebox('<img style="width: 560px; height: 400px;" alt="" src="' + $(this).attr('href') + '" />');
        return false;
    });
    $('#contact-box :input:first').focus();
});
