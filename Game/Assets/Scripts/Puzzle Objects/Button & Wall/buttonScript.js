#pragma strict

var oneTimeButton : System.Boolean;
public var active : System.Boolean;
var posTag : String;
var targetWall : GameObject;

var closePos : System.Boolean;
var closeCheck1 : System.Boolean;
var closeCheck2 : System.Boolean;

var isColl : System.Boolean;
var exitVar : System.Boolean;

var boxEnter : System.Boolean;
var playerEnter : System.Boolean;

function Start () {

}

function Update () {

}

function OnTriggerStay2D(Coll : Collider2D){
	if (Coll.gameObject.tag == posTag || Coll.gameObject.tag == "Player"){
		Debug.Log (Coll.gameObject.tag);
		isColl = true;
	}
	else if (Coll == ""){
		isColl = false;
	}
}
function OnTriggerExit2D (Coll: Collider2D){
	if (Coll.gameObject.tag == posTag || Coll.gameObject.tag == "Player"){
		if (!isColl){
			active = false;
			BroadcastClose();
		}
		yield WaitForSeconds (0.1);
		exitVar = false;
	}
}

function OnTriggerEnter2D (Coll : Collider2D){
	if (Coll.gameObject.tag == posTag || Coll.gameObject.tag == "Player"){
		active = true;
		BroadcastOpen();
	}
}

function BroadcastOpen(){
	targetWall.SendMessage ("Open");	
}
function BroadcastClose(){
	targetWall.SendMessage ("Close");
}	
	
	
	
	
	
	
	
/*
function OnTriggerEnter2D (Coll : Collider2D){
	if (Coll.gameObject.tag == posTag){
		active = true;
		boxEnter = true;
		BroadcastOpen();
		closeCheck1 = false;
	
	}
	if (Coll.gameObject.tag == "Player"){
		active = true;
		playerEnter = true;
		BroadcastOpen();
		closeCheck2 = false;
	}
}
function OnTriggerExit2D (Coll : Collider2D){
	if (Coll.gameObject.tag == posTag && !oneTimeButton){
		boxEnter = false;
		closeCheck1 = true;
		if (closeCheck1 && closeCheck2){
			active = false;
			BroadcastClose();
		}
		//active = false;
		//BroadcastClose();
	}
	if (Coll.gameObject.tag == "Player" && !oneTimeButton){
		playerEnter = false;
		closeCheck2 = true;
		//active = false;
		//BroadcastClose();
		if (closeCheck1 && closeCheck2){
			active = false;
			BroadcastClose();
		}
	}
}
*/

