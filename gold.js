jQuery(document).ready(function($){
    function truncateDec(num, dec) {
        var caldec = Math.pow(10, dec);
        return Math.trunc(num * caldec) / caldec;
    }
    $(window).on('load', function(){
      var ptgr = $('#udc').contents().find('#LR7a957SEA');
      $('#ptgrn').text( truncateDec(ptgr[0].innerHTML, 2) );

      var dtgr = $('#udc').contents().find('#GR6a639704RZ');
      $('#dtgrn').text(dtgr[0].innerHTML);


    });

    var pptgr;
    var pdtgr;

    //PAPER TO GOLD RATIO
    setInterval(function(){
        var ptgr = $('#udc').contents().find('#LR7a957SEA');
        $('#ptgrn').text( truncateDec(ptgr[0].innerHTML, 2) );
        console.log('PTGR = ' +ptgr[0].innerHTML);
        pptgr = truncateDec(ptgr[0].innerHTML, 2);
    }, 20000);

    //DOLLAR TO GOLD RATIO
    setInterval(function(){
        var dtgr = $('#udc').contents().find('#GR6a639704RZ');
        $('#dtgrn').text(dtgr[0].innerHTML);
        console.log('DTGR = ' +dtgr[0].innerHTML);
        pdtgr = dtgr[0].innerHTML;
    }, 20000);

    //COINERU VALUATION
    setInterval(function(){
        var cnrv = pdtgr.replace(/[^\d.-]/g, '') * pptgr / 100;
        //console.log(pdtgr.replace(/[^\d.-]/g, ''));
        console.log('Coineru Valuation = ' +pdtgr.replace(/[^\d.-]/g, '') * pptgr / 100);
        $('#coinerugv').text(truncateDec(cnrv, 2));
    }, 23000);

    //COINERU PRICE
    setInterval(function(){
        $.getJSON('//data-asg.goldprice.org/dbXRates/USD', function(data){
            $('#coineruprc').text(truncateDec( pdtgr.replace(/[^\d.-]/g, '') / 100, 4 ));
            console.log('Coineru Price = ' +truncateDec( pdtgr.replace(/[^\d.-]/g, '') / 100, 4 ));
            console.log('GOLD PRICE = ' +data.items[0].xauPrice);
            console.log('');
        });
    }, 23000);
});
