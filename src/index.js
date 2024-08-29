const check =((object) => {
  if(object.health > 50){
    return 'healthy';
  }
  else if(object.health >= 15 && object.health <= 50){
    return 'wounded';
  }
  else{
    return 'critical';
  }
});

console.log(check({name: 'Mar', health: 10}))
export default check;

