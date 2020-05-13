class Vec3
{
    // Constructor
    constructor( x, y, z ){
	this.x = x;
	this.y = y;
	this.z = z;
    }
    // Add method
    add( v ){
	this.x += v.x;
	this.y += v.y;
	this.z += v.z;
	return this;
    }
    // Sum method
    sum(){
	return this.x + this.y + this.z;
    }
    //Returns a min. value of the elements
    min(){
	var A = this.x;
	if(this.x > this.y){
	    A = this.y;
	}
	if(this.z < A){
	    A = this.z;
	}
	return A;
    }
    //Returns a mid. value of the elements
    mid(){
	var min = this.min();
	var max = this.max();
	var sum = this.sum();
	var A = this.sum() - this.min() - this.max();
	return A;
    }
    //Returns a max. value of the elements
    max(){
	var A = this.x;
	if(this.x < this.y){
	    A = this.y;
	}
	if(this.z > A){
	    A = this.z;
	}
	return A;
    }
}
function ZettaiChi(v){
    return v.x*v.x + v.y*v.y + v.z*v.z;
}
function Naiseki( v01, v02 ){
    return v01.x*v02.x + v01.y*v02.y + v01.z*v02.z;
}
function AreaOfTriangle( v01, v02 ){
    var A = ZettaiChi(v01)*ZettaiChi(v02) - Naiseki(v01,v02)*Naiseki(v01,v02);
    return Math.sqrt(A)/2;
}

    
