module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const item = {name:'' , durability:'', enhancemet:''};

function succeed(item) {
  if (item !== 20) {
    item = {
      ... item,
      enhancemet: item + 1,
      durability: item
    }
    return { ...item };
  } else {
    item = {
      ... item,
      enhancemet: item,
      durability: item
    }
    if(item.enhancement > 16){
      item.enhancement --;
    }
  
    return { ...item };
  }
}
  


function fail(item) {
  item = {
    ...item,
    enhancemet: item,
    durability: item
  }
  if(item.enhancemet < 15) {
    item.durability -= 5;
  }else{
    item.durability-=10;
  }
  if{

  }
  return { ...item };
}

function repair(item) {
  item = {...item, durability: 100};

    return {...item};
}

function get(item) {
  return { ...item };
}
