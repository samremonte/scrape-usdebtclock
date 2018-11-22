jQuery(document).ready(function($){
    function truncateDec(num, dec) {
        var caldec = Math.pow(10, dec);
        return Math.trunc(num * caldec) / caldec;
    }


    $(window).on('load', function(){
        var dtsr = $('#udc').contents().find('#G5R4a189MKIK');
        var ptsr = $('#udc').contents().find('#LR6a639704RZ');
        $('#dtsrn').text(dtsr[0].innerHTML);
        $('#ptsrn').text( truncateDec(ptsr[0].innerHTML, 2) );
    });

    var pptsr;
    var pdtsr;

    //PAPER TO SILVER RATIO
    setInterval(function(){
        var ptsr = $('#udc').contents().find('#LR6a639704RZ');
        $('#ptsrn').text( truncateDec(ptsr[0].innerHTML, 2) );
        console.log('PTSR = ' +ptsr[0].innerHTML);
        pptsr = truncateDec(ptsr[0].innerHTML, 2);
    }, 20000);

    //DOLLAR TO SILVER RATIO
    setInterval(function(){
        var dtsr = $('#udc').contents().find('#G5R4a189MKIK');
        $('#dtsrn').text(dtsr[0].innerHTML);
        console.log('DTSR = ' +dtsr[0].innerHTML);
        pdtsr = dtsr[0].innerHTML;
    }, 20000);

    //COINERU VALUATION
    setInterval(function(){
        var cnrv = pdtsr.replace(/[^\d.-]/g, '') * pptsr / 100;
        //console.log(pdtsr.replace(/[^\d.-]/g, ''));
        console.log('Coineru Silver Valuation = ' +pdtsr.replace(/[^\d.-]/g, '') * pptsr / 100);
        $('#coinerusv').text(truncateDec(cnrv, 2));
    }, 23000);

    //COINERU PRICE
    setInterval(function(){
        $.getJSON('//data-asg.goldprice.org/dbXRates/USD', function(data){
            $('#coinerusprc').text(truncateDec( pdtsr.replace(/[^\d.-]/g, '') / 100, 4 ));
            console.log('Coineru Silver Price = ' +truncateDec( pdtsr.replace(/[^\d.-]/g, '') / 100, 4 ));
            console.log('SILVER PRICE = ' +data.items[0].xagPrice);
            console.log('');
          });
    }, 23000);
});
