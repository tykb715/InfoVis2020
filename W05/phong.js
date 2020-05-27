
function vec3 PhongReflection( vec3 C, vec3 L, vec3 N )
{
    float ka = 0.3;
    float kd = 0.5;
    float ks = 0.8;
    float n = 50.0;
    
    vec3 R = reflect( -L, N );
    float dd = max( dot( N, L ), 0.0 );
    float ds = pow( max( dot( R, V ), 0.0 ), n );
    if(dd<=0.0){
	ds = 0.0;
    }
	  
    float Ia = ka;
    float Id = kd * dd;
    float Is = ks * ds;
    return C * ( Ia + Id + Is );
}
