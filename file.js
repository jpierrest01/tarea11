function enviardatos(){    
    var url = $('#url').val();    
    var array = [];

    array.push({
        'url':url
    })
   
    $("#images").html();
    var num = 0;
    for (let value of array) {        
        num=num+1;
        var tr = `<div class="carousel-item active">
            <img src="`+value.url+`" class="d-block w-50" alt="...">
        </div>`;
        $("#images").append(tr)
    } 
}

