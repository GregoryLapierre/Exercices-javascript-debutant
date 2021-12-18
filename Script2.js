function premier(nbr) {
    if(nbr < 2)
    return false;
    for (var i = 2; i < nbr; i++) {
        if(nbr%i==0)
            return false;
    }
    return true;
}
for(var nbr = 0; nbr<= 100; nbr++){
    if(premier(nbr)){ 
    console.log(nbr);
    document.write(nbr+'<br>')}
}



  