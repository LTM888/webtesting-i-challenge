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
  if (item.enhcancement < 15){
    const newItem = {
      name: item.name,
      durability: item.durability -5,
      enhcancement: item.enhcancement
    };
    return newItem;
  } else if (item.enhancement > 16) {
    const newItem = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement -1
    };
    return newItem;
  } else if (item.enhancement > 14) {
    const newItem = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement 
    };
    return newItem;
  }
  return item;
}

  


function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}