var parsedJson = [];
var yesNoDict = {};
var requestInputCount = 2;
var requiredAttributeId = [];
var missingAttributesArray = [];

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
            console.log("Invalid JSON input");
        }
    }

    
    // call next functions
    // get required attribute array
    fetchRequiredAttribute();

    // render correct table header
    renderTableHead(validRequestCount);

    // clear old results before add new result
    clearTableResults();

    // compare starts
    compareJson();
    displayResult();
    //console.log(parsedJson);
}

/**
 * we iterate over request JSON
 * transform request JSON to allAttribute
 * from allAttribute, check the present/absent of attribute
 * also check if missing important attribute
 * update diciotnary yesNoDict
 * yesNoDict = {“key”: {parent, attribute, yesNoSequence= [y, n], valueSequence = [] }}
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
            //-- reset the array to put important attributes that are missing
            missingAttributesArray = [[]];

            for(let element of jason){ //iterate over allAttributes

                //-- missing attribute check, add to missingAttributesArray
                if(element["location"] == null && element["Required"] == 1){
                    missingAttributesArray[0].push(element["id"]);
                }

                //-- present attribute check, add to yesNoDict
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
            //add a new array to missingAttributesArray
            missingAttributesArray.push([]);

            for(let element of jason){
                let key = element["id"];
                let attributeValue = element["location"];

                //-- missing attribute check, add to missingAttributesArray
                if(element["location"] == null && element["Required"] == 1){
                    missingAttributesArray[i].push(element["id"]);
                }

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

    console.log(missingAttributesArray);
}

function displayResult(){
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

    // display missing attributes
    const missingAttributeTable = document.getElementById("missingAttribute-result"); 
    var row2HTML = `<tr><td>Completeness Score</td>`;
    var row3HTML = `<tr><td>List of Missing Attributes</td>`;

    for(let i = 0; i < missingAttributesArray.length; i++){
        let completenessScore = 1 - (missingAttributesArray[i].length/requiredAttributeId.length);

        row2HTML += `<td>${completenessScore * 100}%</td>`;
        row3HTML += `<td>${missingAttributesArray[i]}%</td>`;
    }

    row2HTML += `</tr>`;
    row3HTML += `</tr>`;
    missingAttributeTable.innerHTML += row2HTML;
    missingAttributeTable.innerHTML += row3HTML;
}

// add a textarea when users click "+" button 
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
    // prepare COMPARE table column
    const th_compareRequest = document.getElementById("table-head-compare-request"); 
    let thHTML_compareRequest = `<th scope="col">Object</th>
    <th scope="col">Attribute</th>`;

    // prepare missing attribute table column
    const th_missingAttribute = document.getElementById("table-head-missing-attribute"); 
    let thHTML_missingAttribute = `<th scope="col"> </th>`;

    //retrieve input name
    let requestName = document.querySelectorAll("#requestName");

    // 'present in' column
    for(let i = 0; i < validRequestCount; i++){
        thHTML_compareRequest += `<th scope="col">Present in ${requestName[i].value}? (Y/N)</th>`; 
        thHTML_missingAttribute += `<th scope="col">${requestName[i].value}</th>`;
    }

    // 'value in' column
    for(let i = 0; i < validRequestCount; i++){
        thHTML_compareRequest += `<th scope="col">Value in ${requestName[i].value}</th>`; 
    }

    th_compareRequest.innerHTML = thHTML_compareRequest;
    th_missingAttribute.innerHTML = thHTML_missingAttribute;
}

function clearTableResults(){
    const result = document.getElementById("result"); 
    result.innerHTML = "";

    const missingAttributeResult = document.getElementById("missingAttribute-result"); 
    missingAttributeResult.innerHTML = "";
}

/**
 * logic to retrieve missing Attributes 
 * 1. get an array of required attributes => func fetchRequiredAttribute()
 * 2. check if the attributes present in attributes array, requiredAttributeId
 * 3. if not present, add to an array, yesNoDict = {parent, attribute .. missingAttributes = []} }
 * render the results into table
 * score = Present array length / required array length
 * */
function fetchRequiredAttribute(){
    if (requiredAttributeId.length > 0){
        return requiredAttributeId;
    }

    let allAttributes = getJason({}, {});

    allAttributes.forEach(function(attribute) {
        if(attribute["Required"] == 1){
            requiredAttributeId.push(attribute["id"]);
        }
    });

    //console.log(requiredAttributeId);
    return requiredAttributeId;

}
