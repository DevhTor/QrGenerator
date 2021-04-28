var vcard ={
    str_vcard:'BEGIN:VCARD%0d%0aVERSION:3.0%0d%0a',
    end_vcard: '%0d%0aEND:VCARD',
    goog_chart:'http://chart.apis.google.com/chart?cht=qr&chs=100x100&chl=',

    build_name: function(){
        alert(vcard.str_vcard);
        var first_name = $('input[name="fname"]').val();
        var last_name = $('input[name="lname"').val();

        vcard.str_vcard += 'N:' + last_name + ';' + first_name + '%0d%0a' +
        'FN:' + first_name + ' ' + last_name;

        
        alert(vcard.str_vcard);
    },

    build_email:function(){

        var email = $('input[name="email"]').val();

        vcard.str_vcard += '%0d%0aEMAIL:' + email;
    },

    buil_phone: function(){
        var phone = $('input[name="phone"]').val();
        vcard.str_vcard += '%0d%0aTEL;CELL:' + phone;
    },

    save: function(){
        vcard.build_name();
        vcard.build_email();
        vcard.buil_phone();

        vcard.str_vcard += vcard.end_vcard;
        $('#qr').attr('src', vcard.goog_chart + vcard.str_vcard);
     console.log(vcard.goog_chart + vcard.str_vcard);   
    }
}



$(function(){

    

    $('input[id="submit"]').click(vcard.save);
    

    
});