const check =((object) => {
  if(object.health > 50){
    return 'healthy'
  }
  else if(object.health >= 15 && object.health <= 50){
    return 'wounded'
  }
  else{
    return 'critical'
  }
});
export default check;

