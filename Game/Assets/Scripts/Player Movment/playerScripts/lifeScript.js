#pragma strict

//life script
var controler : GameObject;
var lifeSprite : Texture;
public var maxLife : int;
public var canDamage : System.Boolean = true;
public var lifeCount : int;

var saveX : float;
var saveY : float;
var deathParti : GameObject;
var isDead : System.Boolean = false;

function Start () {
	controler = GameObject.Find("Controler");
	saveX = gameObject.transform.position.x;
	saveY = gameObject.transform.position.y;
	yield WaitForSeconds (0.01);
}

function Update () {
	/***** LIFE COUNTER ******/
	if (lifeCount == 0){
		if (!isDead){
			Death();
			isDead = true;
			GetComponent(PlayerControl).enabled = false;
			GetComponent(SpriteRenderer).enabled = false;
			GetComponent.<Collider2D>().enabled = false;
			GetComponent.<Rigidbody2D>().velocity.y = 0;
			GetComponent.<Rigidbody2D>().velocity.x = 0;
			//GetComponent.(Collider2D).enabled = false;
			Reset();
		}
	}
	if (lifeCount > maxLife){
		lifeCount = maxLife;
	}
}

function Reset(){
	yield WaitForSeconds (3);
	lifeCount = maxLife;
	canDamage = true;
	GetComponent.<Collider2D>().enabled = true;
	transform.position.x = saveX;
	transform.position.y = saveY;
	GetComponent(PlayerControl).enabled = true;
	GetComponent(SpriteRenderer).enabled = true;
	isDead = false;

}

function OnCollisionEnter2D (coll: Collision2D) {
	//enemys
	if (coll.gameObject.tag == "enemy" && canDamage){
		lifeCount -= 1;
		canDamage = false;
		Damaged();
	}
	//+life
	if (coll.gameObject.tag == "heart"){
		lifeCount += 1;
		Destroy (coll.gameObject);
	}
	//save
	if (coll.gameObject.name == "PuzzleBarrier"){
		saveX = gameObject.transform.position.x;
		saveY = gameObject.transform.position.y;
	}

}
function OnGUI (){
	GUI.DrawTexture(Rect(Screen.width - 90,5,20,20), lifeSprite);
	GUI.Label(Rect(Screen.width - 84,5,20,20), lifeCount.ToString());
}

function Death (){
	deathParti.transform.position = transform.position;
	deathParti.GetComponent.<ParticleSystem>().Clear();
	deathParti.GetComponent.<ParticleSystem>().Play();
	yield WaitForSeconds (3);
	
}

function Damaged (){
	if (lifeCount > 0){
		GetComponent(SpriteRenderer).enabled = false;
		yield WaitForSeconds (0.2);
		GetComponent(SpriteRenderer).enabled = true;
		yield WaitForSeconds (0.2);
		GetComponent(SpriteRenderer).enabled = false;
		yield WaitForSeconds (0.2);
		GetComponent(SpriteRenderer).enabled = true;
		yield WaitForSeconds (0.2);
		GetComponent(SpriteRenderer).enabled = false;
		yield WaitForSeconds (0.2);
		GetComponent(SpriteRenderer).enabled = true;
		yield WaitForSeconds (0.2);
		GetComponent(SpriteRenderer).enabled = false;
		yield WaitForSeconds (0.2);
		GetComponent(SpriteRenderer).enabled = true;
		canDamage = true;
	}
}
