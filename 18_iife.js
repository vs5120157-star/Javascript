// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
}) ();

(function aurcode(){
    console.log(`DB CONNECTED TWO`);
    
})();

(  (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
    
})('Vikas Kumar')