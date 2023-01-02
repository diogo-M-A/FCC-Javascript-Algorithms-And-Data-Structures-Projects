function checkCashRegister(price, cash, cid) {
  let tchange = cash - price
  let tcid = 0;
  for(let i=0; i<cid.length; i++){
    tcid += cid[i][1]
  }
  //tcid = tcid.toFixed(2);

  if(tchange > tcid){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  let change = {status:"OPEN", change:[["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]};

  let tchange2 = cash - price
  let tcid2 = tcid
  if(tchange2 == tcid2){
    change.status = 'CLOSED'
  }
  
  while(tchange>=100 & cid[8][1]>0){
    cid[8][1] = cid[8][1] - 100
    tcid -= 100
    if(cid[8][1]<0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    change.change[8][1] += 100
    tchange -= 100
  }
  while(tchange>=20 & cid[7][1]>0){
    cid[7][1] = cid[7][1] - 20
    tcid -= 20
    if(cid[7][1]<0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    change.change[7][1] += 20
    tchange -= 20
  }
  while(tchange>=10 & cid[6][1]>0){
    cid[6][1] = cid[6][1] - 10
    tcid -= 10
    if(cid[6][1]<0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    change.change[6][1] += 10
    tchange -= 10
  }
  while(tchange>=5 & cid[5][1]>0){
    cid[5][1] = cid[5][1] - 5
    tcid -= 5
    if(cid[5][1]<0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    change.change[5][1] += 5
    tchange -= 5
  }
  while(tchange>=1 & cid[4][1]>0){
    cid[4][1] -= 1
    tcid -= 1
    if(cid[4][1]<0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    change.change[4][1] += 1
    tchange -= 1
  }
  while(tchange>=0.25 & cid[3][1]>0){
    cid[3][1] -= 0.25
    tcid -= 0.25
    if(cid[3][1]<0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    change.change[3][1] += 0.25
    tchange -= 0.25
  }
  while(tchange>=0.1 & cid[2][1]>0){
    cid[2][1] -= 0.1
    tcid -= 0.1
    if(cid[2][1]<0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    change.change[2][1] += 0.1
    tchange -= 0.1
  }
  while(tchange>=0.05 & cid[1][1]>0){
    cid[1][1] -= 0.05
    tcid -= 0.05
    if(cid[1][1]<0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    change.change[1][1] += 0.05
    tchange -= 0.05
  }
  while(tchange>0.00 & cid[0][1]>0){
    cid[0][1] -= 0.01
    tcid -= 0.01
    change.change[0][1] += 0.01
    tchange -= 0.01
    if(cid[0][1] <= 0.0){
      if(change.status == 'CLOSED'){
        break
      }
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    
  }
  //TESTE ISSO EM ALGUM LUGAR
  if(change.status == 'CLOSED'){
    change.change[0][1] = Math.round(change.change[0][1]*100)/100
    return change
  }
  
  change.change[0][1] = Math.round(change.change[0][1]*100)/100 
  let result = change.change.filter(item => item[1] != 0);
  change.change = result
  change.change = change.change.reverse()
  return change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));