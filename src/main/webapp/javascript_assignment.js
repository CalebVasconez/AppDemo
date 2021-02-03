
function myHelloFunction(event) {
    console.log("Hello.")
}

let formButton1 = $("#button1");
formButton1.on("click", myHelloFunction);

function myAdditionFunction(event) {
    let formField1 = $("#field1").val();
    let formField2 = $("#field2").val();
    let parseInt1 = parseInt(formField1);
    let parseInt2 = parseInt(formField2);
    let formField3 = parseInt1 + parseInt2;
    $("#field3").val(formField3);
}

let formButton2 = $("#button2");
formButton2.on("click", myAdditionFunction);

function myHideParagraphFunction(event){
    $("#paragraphToHide").toggle(500);
}

let formButton3 = $("#button3");
formButton3.on("click", myHideParagraphFunction);

function myValidateFunction(event){
    let formField = $("#phoneField").val();
    let regularExpression = /^[0-9]{1,3}[\-][0-9]{1,3}[\-][0-9]{1,4}$/;

    if(regularExpression.test(formField)){
        console.log("OK");
    }
    else {
        console.log("Bad")
    }
}

let formButton4 = $("#button4");
formButton4.on("click", myValidateFunction);

function myJSonFunction(event){
    let formJsonObject = {};
    let formFirstName = $("#firstName").val();
    let formLastName = $("#lastName").val();
    let formEmail = $("#email").val();
    formJsonObject.firstName = formFirstName;
    formJsonObject.lastName = formLastName;
    formJsonObject.email = formEmail;
    let jsonString = JSON.stringify(formJsonObject);
    console.log(jsonString);
    $("#jsonResult").text(jsonString);
}

let formButton5 = $("#button5");
formButton5.on("click", myJSonFunction);