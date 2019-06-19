module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhcancement <= 19){
    const newItem = {
      enhcancement: item.enhcancement + 1
    };
    return newItem;
  }else{
    return { ...item, enhcancement: 20 }
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}