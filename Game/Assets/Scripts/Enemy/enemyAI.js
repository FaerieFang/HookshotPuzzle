#pragma strict

var rand : int;
var speed : float;
var vertical : System.Boolean;

function Start () {


}
/*
	if (rand == 1){
		GetComponent.<Rigidbody2D>().velocity.y = speed;
		GetComponent.<Rigidbody2D>().velocity.x = 0;
	}
	else if (rand == 2){
		GetComponent.<Rigidbody2D>().velocity.y = 0;
		GetComponent.<Rigidbody2D>().velocity.x = speed;
	}
	else if (rand == 3){
		GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
		GetComponent.<Rigidbody2D>().velocity.x = 0;
	}
	else if (rand == 4){
		GetComponent.<Rigidbody2D>().velocity.y = 0;
		GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
	}
*/


function Update () {
	rand = Random.Range(1,3);
	if (!vertical){
		if (GetComponent.<Rigidbody2D>().velocity.x == 0){
			if (rand == 1){
				GetComponent.<Rigidbody2D>().velocity.x = speed;
			}
			else if (rand == 2){
				GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
			}
		}
	}
	else {
		if (GetComponent.<Rigidbody2D>().velocity.y == 0){
			if (rand == 1){
				GetComponent.<Rigidbody2D>().velocity.y = speed;
			}
			else if (rand == 2){
				GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
			}
		}
	}

}

function OnCollisonEnter2D (coll : Collider2D) {
	if (!vertical){
		GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
	}
	else {
		GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
	}
}
