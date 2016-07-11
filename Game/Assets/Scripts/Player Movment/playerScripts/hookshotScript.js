#pragma strict


// HOOKSHOT VERIABLES
public var contEnabled : System.Boolean = true;
var hookshotPrefab : GameObject;
var fireHook : KeyCode;
var vArray = new Array();
var canDestroy : System.Boolean = false;
public var cloneDest : System.Boolean = false;

function Start () {

}

function Update () {
	//Hookshot Update
	if (Input.GetKeyDown(fireHook)){
		Hookshot();
		canDestroy = false;
		GetComponent.<Rigidbody2D>().velocity.x = 0;
		GetComponent.<Rigidbody2D>().velocity.y = 0;
	}
	//End Hookshot update

}

//Hookshot functions
function Hookshot (){
	if (contEnabled){
		contEnabled = false;
		cloneDest = false;
		canDestroy = false;
		var clone : GameObject;
		clone = Instantiate(hookshotPrefab, transform.position, transform.rotation);
		clone.GetComponent(hookshot).first = false;
		clone.GetComponent(hookshotTwo).first = false;
		Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>(), true);
	}
}

function GoToHookshot (){
	var realHook : GameObject = GameObject.Find("Hookshot(Clone)");
	cloneDest = true;
	realHook.GetComponent(hookshotTwo).canDestroy = true;
	yield WaitForSeconds (0.01);
	vArray = realHook.GetComponent(hookshot).yArray;
	for (var i = 0; i < vArray.length; i++) {
		transform.position = vArray[i];
		yield WaitForSeconds (0.00001);
	}
	canDestroy = true;
	contEnabled = true;
}

function OnTriggerStay2D (coll: Collider2D){
	if (coll.gameObject.name == "HookTrail(Clone)"){
		if (cloneDest == true){
			Destroy (coll.gameObject);
		}
	}
}
//End Hookshot functions