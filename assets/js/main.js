jQuery(document).ready(function($) {

    $('.expand-one').each(function (idx) {
        $(this).click(function(){
            pubIdx = $(this).attr('id').substr(-1);
            $('#bib' + pubIdx).toggle();
        });
    });

});