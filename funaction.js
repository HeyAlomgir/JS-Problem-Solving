// object property ber koro

function propertyOb (property){
    console.log(property)
    let ob = Object.keys(property);
    console.log(ob);
    let value = Object.values(property).length;
    console.log(value);
}
let person={
     name:"alomgir",
    roll:84848,
    time:45-45,
    dept:"cst"
}
propertyOb(person);