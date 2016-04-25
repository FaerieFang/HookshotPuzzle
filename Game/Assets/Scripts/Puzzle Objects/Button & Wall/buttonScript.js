#pragma strict

var oneTimeButton : System.Boolean;
public var active : System.Boolean;
var posTag : String;
var targetWall : GameObject;

var CollNumber : int;

function Start () {

}

function Update () {

}

function OnTriggerExit2D (Coll: Collider2D){
	if (Coll.gameObject.tag == posTag || Coll.gameObject.tag == "Player"){
		CollNumber -= 1;
		
		if (CollNumber == 0 && !oneTimeButton){
			active = false;
			BroadcastClose();
		}	
	}
}

function OnTriggerEnter2D (Coll : Collider2D){
	if (Coll.gameObject.tag == posTag || Coll.gameObject.tag == "Player"){
		active = true;
		CollNumber += 1;
		BroadcastOpen();
	}
}

function BroadcastOpen(){
	targetWall.SendMessage ("Open");	
}
function BroadcastClose(){
	targetWall.SendMessage ("Close");
}	

