$( "#postbtn" ).click(function() {
    removeClasses();
        
    $("#posttxt").attr("placeholder", "write you post here...");
    
    $( "#postbtn" ).addClass("btn btn-info btn-sm");
    $( "#questionbtn" ).addClass("btn btn-secondary btn-sm");
    $( "#reviewbtn" ).addClass("btn btn-secondary btn-sm");    
    
    $( "#postoptions" ).empty();
    
    
    $("#targetusers").removeAttr("disabled"); 
    
});

$( "#questionbtn" ).click(function() {
    removeClasses();
    
    $("#posttxt").attr("placeholder", "ask your question here...");
    
    $("#targetusers").val("");
    
    $("#targetusers").attr("disabled", "disabled");
        
    
    $( "#postbtn" ).addClass("btn btn-secondary btn-sm");
    $( "#questionbtn" ).addClass("btn btn-success btn-sm");
    $( "#reviewbtn" ).addClass("btn btn-secondary btn-sm");  
    
    $( "#postoptions" ).empty();
    
    $( "#postoptions" ).append(
      `
        <div class="col-md-7">
          <input id="chkchecked"  type="checkbox" value=""> I checked similar questions/answers</input>
        </div>
        <div class="col-md-5">
          <input id="chkanonym"  type="checkbox" value=""> Ask anonymously</input>  
        </div>        
      `
    );
});

$( "#reviewbtn" ).click(function() {
    removeClasses();
    
    $("#targetusers").removeAttr("disabled"); 
    
    $("#posttxt").attr("placeholder", "request a review here...");
    
    $( "#postbtn" ).addClass("btn btn-secondary btn-sm");
    $( "#questionbtn" ).addClass("btn btn-secondary btn-sm");
    $( "#reviewbtn" ).addClass("btn btn-warning btn-sm");
    
    $( "#postoptions" ).empty();
    
    $( "#postoptions" ).append(
      `
        <div class="col-md-12">
          <input id="chkformal" type="checkbox" value="" checked> Informal review</input>
        </div>
      `
    );
});

function removeClasses(){
    $( "#postbtn" ).removeClass();
    $( "#questionbtn" ).removeClass();
    $( "#reviewbtn" ).removeClass();
}