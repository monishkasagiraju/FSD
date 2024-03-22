

$("#but").click(function(){
    var input = $("#in").val().toLowerCase();
    var arr=['hi','hello','hi there'];
    if(input=== 'hi' ){
        var rep="reply: ";
        var res=" "
        for(let i=0; i<3; i++){
            res=arr[Math.floor(Math.random()*3)];
        }
        //$("#ty").text(rep+res);
        $("#ty").append('<br>' + rep + res);
    }
    else{
        $("#ty").text("choose these ques: hi, how are you?");
    }
});
