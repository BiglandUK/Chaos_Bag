var databank= {};
databank["The Gathering-Easy"]=[2,3,3,2,0,0,0,0,0,0,2,1,1,0,1,1];
databank["The Gathering-Standard"] = [1,2,3,2,1,1,0,0,0,0,2,1,1,0,1,1];
databank["The Gathering-Hard"] = [0,3,2,2,2,1,1,0,0,0,2,1,1,0,1,1];
databank["The Gathering-Expert"] = [0,1,2,2,2,2,1,1,0,1,2,1,1,0,1,1];
databank["The Midnight Masks-Easy"]=[2,3,3,2,0,0,0,0,0,0,2,1,1,0,1,1];
databank["The Midnight Masks-Standard"] = [1,2,3,2,1,1,0,0,0,0,2,1,1,0,1,1];
databank["The Midnight Masks-Hard"] = [0,3,2,2,2,1,1,0,0,0,2,1,1,0,1,1];
databank["The Midnight Masks-Expert"] = [0,1,2,2,2,2,1,1,0,1,2,1,1,0,1,1];
databank["The Devourer Below-Easy"]=[2,3,3,2,0,0,0,0,0,0,2,1,1,1,1,1];
databank["The Devourer Below-Standard"] = [1,2,3,2,1,1,0,0,0,0,2,1,1,1,1,1];
databank["The Devourer Below-Hard"] = [0,3,2,2,2,1,1,0,0,0,2,1,1,0,1,1];
databank["The Devourer Below-Expert"] = [0,1,2,2,2,2,1,1,0,1,2,1,1,1,1,1];

var bagContents=[]; // what's in the bag


function SwitchScenario(){
	var scenarioName = document.getElementById("scenario").value;
	var scenarioLevel = document.getElementById("difficulty").value;
	ChangeTokens(databank[scenarioName+"-"+scenarioLevel]);
	ClearTokenDisplay();

	
}

function ChangeTokens(data){
	for(i=0;i<data.length;++i){
		document.getElementById("BagContents").getElementsByTagName("input")[i].value = data[i];
	}
}

function SetUpBag(){
	// Empty the bag
	Clear(bagContents);
	//Add the required tokens
	for(i=0;i<16;++i){
		var amount = document.getElementById("BagContents").getElementsByTagName("input")[i].value;
		while(amount > 0){
			var item = document.getElementById("BagContents").getElementsByTagName("input")[i].name;
			bagContents.push(item);
			--amount;
		}

	}
	//shuffle them
	shuffle(bagContents);
	
	ClearTokenDisplay();

	//display tokens
	for(i = 0; i < bagContents.length; ++i){
		document.getElementById("TokenDisplay").innerHTML+="<span><img src='Images/blank.png' class='token' alt='click to reveal' onclick='Reveal("+i+")' /></span>"
	}
}

function Reveal(token){
	var tokenImage = document.getElementsByClassName('token')[token];
	tokenImage.src="Images/"+bagContents[token]+".png";
	
}

function Clear(array){
	for (var i = array.length; i > 0; i--) {
		array.pop();
	}
}

function ClearTokenDisplay(){
	//clear previous token display
	document.getElementById("TokenDisplay").innerHTML="";
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
} 