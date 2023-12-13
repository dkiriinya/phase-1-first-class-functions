
function run(){
    console.log ("run forest run")
}
function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction() {
    return function run(){

    }
    
}
function returnsAnAnonymousFunction(){
    return function (){

    }
}
receivesAFunction(run)


