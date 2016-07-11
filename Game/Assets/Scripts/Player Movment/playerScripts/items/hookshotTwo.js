#pragma strict
public var first : System.Boolean;
var player : GameObject;
var destroyTime : float;
var goBack : System.Boolean = false;
var compleate : System.Boolean = false;
var canDestroy : System.Boolean = false;
var canColl : System.Boolean = true;


function OnCollisionEnter2D (coll: Collision2D) {
	if (coll.gameObject.tag == "Obs"){
		if (!first && canColl){
			compleate = true;
			canColl = false;
			yield WaitForSeconds (0.01);
			player.SendMessage("GoToHookshot");
			GetComponent(hookshot).enabled = false;
			//Physics2D.IgnoreCollision(player.GetComponent.<Collider2D>(), GetComponent.<Collider2D>(), false);
		}
	}
	if (coll.gameObject == player){
		//yield WaitForSeconds (0.0001);
		if (canDestroy){
			player.GetComponent(hookshotScript).contEnabled = true;
			GetComponent(SpriteRenderer).enabled = false;
			yield WaitForSeconds (0.1);
			player.GetComponent(hookshotScript).cloneDest = false;
			canDestroy = false;
			Destroy (this.gameObject);
		}
	}

}
function Start (){
	canDestroy = false;
	GetComponent(hookshot).enabled = true;

	if (!first){
		yield WaitForSeconds (destroyTime);
		if (!compleate){
			canColl = false;
			GoBack();
		}
	}
}

function GoBack () {
	goBack = true;
	player.GetComponent(hookshotScript).cloneDest = true;
	canDestroy = true;
	//Physics2D.IgnoreCollision(player.GetComponent.<Collider2D>(), GetComponent.<Collider2D>(), false);
	GetComponent(hookshot).enabled = false;
	//yield WaitForSeconds (0.1);
	for (var i = GetComponent(hookshot).yArray.length-1; i > 0; i--) {
		transform.position = GetComponent(hookshot).yArray[i];
		yield WaitForSeconds (0.00001);
	}
}
function OnTriggerEnter2D (coll: Collider2D){
	if (goBack && coll.gameObject.name == "HookTrail(Clone)"){
		Destroy (coll.gameObject);
	}
}
function OnTriggerStay2D (coll: Collider2D){
	if (goBack && coll.gameObject.name == "HookTrail(Clone)"){
		Destroy (coll.gameObject);
	}
}

function Update () {
/*
	if (GameObject.Find("HookTrail(Clone)") == null){
		canDestroy = true;
	}
	else {
		canDestroy = false;
	}
	*/
	if (canDestroy){
		Physics2D.IgnoreCollision(player.GetComponent.<Collider2D>(), GetComponent.<Collider2D>(), false);
	}
	
}