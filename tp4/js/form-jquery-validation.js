$( document ).ready(function() {

    
    console.log("DOM ready!");
    
    
    $('#gps').click(function () {

        $('#map').html(getLocation());
    });

   
    $('#name').keyup(function() {
 
        

        var nombreCaractere = $(this).val().length;
        
        var msg =   nombreCaractere + ' car.';
        $('#compt1').text(msg);
      
       })


    $('#firstname').keyup(function () {

        var nombreCaractere = $(this).val().length;

        var msg = nombreCaractere + ' car.';
        $('#compt').text(msg);

    });
    $('#Ajouter').click(function ()
    {
    store.add($('#name').val(),$('#firstname' ).val(),$('#birth').val(),$('adresse').val(),$('mail').val())

    var list = store.getList();
}

    for(var i in list){
        list[i].name
        $("table").append("<tr><td>"+list[i].name+"</td></tr>");
    }
});