$( "#postbtn" ).click(function() {
    removeClasses();
    
    $( "#postbtn" ).addClass("btn btn-info");
    $( "#questionbtn" ).addClass("btn btn-secondary");
    $( "#reviewbtn" ).addClass("btn btn-secondary");    
    
    $( "#postoptions" ).empty();
});

$( "#questionbtn" ).click(function() {
    removeClasses();
    
    $( "#postbtn" ).addClass("btn btn-secondary");
    $( "#questionbtn" ).addClass("btn btn-success");
    $( "#reviewbtn" ).addClass("btn btn-secondary");  
    
    $( "#postoptions" ).empty();
    
    $( "#postoptions" ).append(
      `
        <div class="checkbox">
          <label><input id="chkanonym" type="checkbox" value="">Ask anonymously</label>
        </div>
      `
    );
});

$( "#reviewbtn" ).click(function() {
    removeClasses();
    
    $( "#postbtn" ).addClass("btn btn-secondary");
    $( "#questionbtn" ).addClass("btn btn-secondary");
    $( "#reviewbtn" ).addClass("btn btn-warning");
    
    $( "#postoptions" ).empty();
    
    $( "#postoptions" ).append(
      `
        <div class="checkbox">
          <label><input id="chkformal" type="checkbox" value="" checked>Informal review</label>
        </div>
      `
    );
});

function removeClasses(){
    $( "#postbtn" ).removeClass();
    $( "#questionbtn" ).removeClass();
    $( "#reviewbtn" ).removeClass();
}