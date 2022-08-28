//User Input
var nameBtn = document.getElementById("nameSetButton").onclick = nameSetApplication;

function nameSetApplication()
{
    let nameSet = document.getElementById("Name Set");
    var startHeading;
    var endHeading;

    startHeading = nameSet;
    endHeading = nameSet;

    document.getElementById("Start Heading").innerHTML = nameSet;
    document.getElementById("End Heading").innerHTML = nameSet;
    console.log(startHeading);
    console.log(endHeading);
}

//Display Classes
//Will display when user has clicked a class they like
var Hero = "A stalwart Hero, at home with a battleaxe, descended from a badlands chieftain.";
var Bandit = "A dangerous bandit who strikes for weak points. Excels at ranged combat with bows.";
var Astrologer = "A scholar who reads fate in the stars. Heir to the school of glintstone sorcery.";
var Warrior = "A twinblade wielding warrior from a nomadic tribe. An origin of exceptional technique.";
var Prisoner = "A prisoner bound in an iron mask. Studied in glintstone sorcery, having lived among the elite prior to sentencing.";
var Confessor = "A church spy adet at convert operations. Equally adept with a sword as they are with incantations.";
var Wretch = "As poor, purposeless and naked as the day they were born. A nice club is all they have.";
var Vagabond = "A knight exiled from their homeland to wander. A solid, armor-clad origin.";
var Prophet = "A seer ostracized for inauspicious prophecies. Well versed in healing incantations.";
var Samurai = "A capable fighter from the distant land of reeds. Handy with Katana and Longbows.";

var classBtn = document.getElementById("heroClassButton").onclick = displayClass1;
var classBtn = document.getElementById("banditClassButton").onclick = displayClass2;
var classBtn = document.getElementById("astrologerClassButton").onclick = displayClass3;
var classBtn = document.getElementById("warriorClassButton").onclick = displayClass4;
var classBtn = document.getElementById("prisonerClassButton").onclick = displayClass5;
var classBtn = document.getElementById("confessorClassButton").onclick = displayClass6;
var classBtn = document.getElementById("wretchClassButton").onclick = displayClass7;
var classBtn = document.getElementById("vagabondClassButton").onclick = displayClass8;
var classBtn = document.getElementById("prophetClassButton").onclick = displayClass9;
var classBtn = document.getElementById("samuraiClassButton").onclick = displayClass10;

function displayClass1()
{
    document.getElementById("classDescription").innerHTML = Hero;
	console.log(Hero);
}

function displayClass2()
{
    document.getElementById("classDescription").innerHTML = Bandit;
	console.log(Bandit);
}

function displayClass3()
{
    document.getElementById("classDescription").innerHTML = Astrologer;
	console.log(Astrologer);
}

function displayClass4()
{
    document.getElementById("classDescription").innerHTML = Warrior;
	console.log(Warrior);
}

function displayClass5()
{
    document.getElementById("classDescription").innerHTML = Prisoner;
	console.log(Prisoner);
}

function displayClass6()
{
    document.getElementById("classDescription").innerHTML = Confessor;
	console.log(Confessor);
}

function displayClass7()
{
    document.getElementById("classDescription").innerHTML = Wretch;
	console.log(Wretch);
}

function displayClass8()
{
    document.getElementById("classDescription").innerHTML = Vagabond;
	console.log(Vagabond);
}

function displayClass9()
{
    document.getElementById("classDescription").innerHTML = Prophet;
	console.log(Prophet);
}

function displayClass10()
{
    document.getElementById("classDescription").innerHTML = Samurai;
	console.log(Samurai);
}

var endHeading = document.getElementById("End Heading");
endHeading.style.color = "tan"