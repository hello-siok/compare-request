var parsedJson = [];
var yesNoDict = {};
var requestInputCount = 2;


function readInputAsJSON() {
    // reset global variables everytime clicking
    parsedJson = [];
    yesNoDict = {};

    // read input
    var jsonInput = document.querySelectorAll("#jsonInput");
    
    // counter to update the table column
    var validRequestCount = 0;

    // parse input to json
    for (let i = 0; i < jsonInput.length; i++) {
        try{
            parsedJson.push(JSON.parse(jsonInput[i].value));
            validRequestCount += 1;
        } catch (error) {
            console.log ("Invalid JSON input");
        }
    }

    
    // call next functions
    renderTableHead(validRequestCount);
    clearTableResults();
    compareJson();
    displayResult();
    //console.log(parsedJson);
}

/**
 * we iterate over request JSON
 * transform request JSON to allAttribute
 * from allAttribute, check the present/absent of attribute
 * update diciotnary yesNoDict
 * yesNoDict = {“key”: {parent, attribute, yesNoSequence= [y, n], valueSequence = [] } }
**/
function compareJson(){
    // iterate over dict of parsedJson
    for (let i = 0; i < parsedJson.length; i++){
        let data = parsedJson[i];

        //- retrieve allAttributes populated with attribute value
        //-- prepare input for getJason()
        if (data["request"] !== undefined){
            data = data["request"];
        }
    
        if((data["imp"] && data["imp"].length > 0) ){
            imp = data["imp"][0];
        }

        //-- retrieve allAttributes
        jason = getJason(data, imp);
        
        //- iterate over allAttribute -> update yesNoDict
        //-- if it is first request
        if (i == 0){

            for(let element of jason){ //iterate over allAttributes

                //-- if there is attribute present, add to yesNoDict
                if(element["location"] !== null){
                    let key = element["id"];
                    let value = {};
                    value["parent"] = element["parent"];
                    value["attribute"] = element["attribute"];
                    value["yesNoSequence"] = ["Y"];
                    value["valueSequence"] = [element["location"]];

                    //key-> attribute that is present
                    yesNoDict[key]= value;
                }
            }

        //-- second request onwards
        } else {

            for(let element of jason){
                let key = element["id"];
                let attributeValue = element["location"];

                //--- if attribute is present @request, key present @yesNoDict : add to existing key
                if (yesNoDict.hasOwnProperty(key) && attributeValue !== null ){
                    yesNoDict[key]["yesNoSequence"].push("Y");
                    yesNoDict[key]["valueSequence"].push(attributeValue);

                //---  if attribute is present @request, key absent @yesNoDict: create new key
                } else if (!yesNoDict.hasOwnProperty(key) && attributeValue !== null ){
                    let value = {};
                    value["parent"] = element["parent"];
                    value["attribute"] = element["attribute"];

                    value["yesNoSequence"] = new Array(i).fill("N");
                    value["yesNoSequence"].push("Y");

                    value["valueSequence"] = new Array(i).fill("");
                    value["valueSequence"].push(attributeValue);

                    //key-> attribute that is present
                    yesNoDict[key]= value;

                //--- if attribute is absent  @request, key present @yesNoDict: add 'N' to existing key
                } else if (yesNoDict.hasOwnProperty(key) && attributeValue === null ){
                    yesNoDict[key]["yesNoSequence"].push("N");
                    yesNoDict[key]["valueSequence"].push("");

                }
            }
            
        }
    }

    console.log(yesNoDict);
}

function displayResult(){
    //console.log("displayResult got triggered!");
    
    const table = document.getElementById("result"); 

    //iterate over yesNoDict
    for (let key in yesNoDict) {
        let parent = yesNoDict[key]["parent"];
        let attribute = yesNoDict[key]["attribute"];
        let yesNoSequence = yesNoDict[key]["yesNoSequence"];
        let valueSequence = yesNoDict[key]["valueSequence"];

        // populate 'parent' 'atrtibute' value
        let rowHTML = `<tr>
                <td>${parent}</td>
                <td>${attribute}</td>`;

        //populate 'yes no' value
        for(let i=0; i < yesNoSequence.length; i++){
            let yesNo = yesNoSequence[i];
            let color = (yesNo == "Y") ? "table-success" : "table-danger";

            rowHTML += `<td class=${color}>${yesNo}</td>`;
        }

        //populate request value
        for(let i=0; i < valueSequence.length; i++){
            let value = valueSequence[i];

            rowHTML += `<td>${typeof(value) === 'object' ? JSON.stringify(value): value}</td>`;
        }

        rowHTML += `</tr>`;
        table.innerHTML += rowHTML;
    }
}

function addRequest(){
    const userInput = document.getElementById("user-input"); 
    requestInputCount += 1;

    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div><input id="requestName" type="text" value="Request ${requestInputCount}"></div>
        <textarea id="jsonInput" rows="4" placeholder="{
                'id': '...',
                'imp': [...], 
                'app': {...}, 
                'device': {...}, 
                'user': {...}, 
                'source': {...}, 
                'tmax': ... 
                }"></textarea>`;

    userInput.appendChild(div);
}

function renderTableHead(validRequestCount){
    // update the table column
    const th = document.getElementById("table-head"); 

    let thHTML = `<th scope="col">Object</th>
    <th scope="col">Attribute</th>`;

    //retrieve input name
    let requestName = document.querySelectorAll("#requestName");

    for(let i = 0; i < validRequestCount; i++){
        thHTML += `<th scope="col">Present in ${requestName[i].value}? (Y/N)</th>`; 
    }

    for(let i = 0; i < validRequestCount; i++){
        thHTML += `<th scope="col">Value in ${requestName[i].value}</th>`; 
    }

    th.innerHTML = thHTML;
}

function clearTableResults(){
    const result = document.getElementById("result"); 
    result.innerHTML = "";
}