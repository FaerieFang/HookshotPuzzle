#pragma strict
//This Script Stores Veriales for the Transfer beetween rooms

var waitTime : float;
var whichPlayerType : System.Boolean;

var playerScript = player.GetComponent(lifeScript);


//Create All the GameObjects


var player : GameObject;
	if (player != null){
		var playerScript = player.GetComponent(lifeScript);
	}



//var we need the inventory

/***** init actuall veriables *****/
public var maxLife : int;
public var lifeCount : int;
//still need inventory stuff

function Start () {
	waitTime = 0;
}
function OnLevelWasLoaded (/*level : int*/) {
	waitTime = 0;
}
function Update () {
	if (player != null){
		playerScript = player.GetComponent(lifeScript);
	}

	
	if (GameObject.Find("Player") != null){
		player = GameObject.Find("Player");
		playerScript = player.GetComponent(lifeScript);
		whichPlayerType = true;
	}

}
function Awake () {
	DontDestroyOnLoad (this.gameObject);
}

function Unload (L1 : int, Lmax : int) {
	maxLife = Lmax;
	lifeCount = L1;
	Application.LoadLevel("lvl1");

}
