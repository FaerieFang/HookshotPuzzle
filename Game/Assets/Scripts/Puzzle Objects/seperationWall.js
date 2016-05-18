#pragma strict

var player : GameObject;

function Start () {
Physics2D.IgnoreCollision(player.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());

}

function Update () {

}