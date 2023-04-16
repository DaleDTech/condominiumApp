function checkCashRegister(price, cash, cid) {
  var changeDue = Math.round(100 * (cash - price)) / 100;
  var changeArr = [];
  var totalCID = 0;
  var loopCID = (cid) => {
    for (var index in cid) {
      //console.log(cid[index][1])
      totalCID += cid[index][1];
    }
    //console.log("The toal CID " + totalCID)
  };
  //Add up all cash in drawer
  loopCID(cid);
  // round total cash in drawer
  var roundedCID = Math.round(100 * totalCID) / 100;
  console.log("The roundedCID is " + roundedCID);

  // An if statement to stop problem if change due is more than CID
  if (changeDue > roundedCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  console.log("The changeDue is " + changeDue);

  var denomTable = {
    HUNDRED: 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };

  var keysArr = Object.keys(denomTable);

  // finds key of the dollar slot we will need
  var findDenomination = (cdue) => {
    //console.log(cdue);
    for (var index in keysArr) {
      if (cdue >= denomTable[keysArr[index]]) {
        //console.log(keysArr[index]);
        return keysArr[index];
      }
    }
  };

  var howManyInSlot = (slot) => {
    // get amount in slot
    var valToDiv = slot[1];
    // divide it by denomination
    return valToDiv / denomTable[slot[0]];
  };

  // look at the amount and the cash in slot, and returns an arr to push to return array object
  var howMuchFromSlotINeed = (cdew, slott) => {
    //find how many bills can be taken out
    var howManyPossible = howManyInSlot(slott);
    //actual individual cash bills
    var denomToMinus = denomTable[slott[0]];
    //console.log(denomToMinus + " is the denom to minus")
    //console.log(howManyPossible + " is how many bills to start in drawer")
    var trackedAmount = cdew;
    var slotName = slott[0];
    var totalBillsGottenFromSlot = 0;
    //console.log(cdew + " is the change due")
    while (howManyPossible > 0 && slotName === slotName) {
      //console.log(denomToMinus + " is what we're minusing")
      cdew -= denomToMinus;
      if (cdew < 0) {
        break;
      }
      cdew = Math.round(100 * cdew) / 100;
      trackedAmount = cdew;
      //console.log("after subtraction " + cdew)
      //console.log(Math.round(100*cdew)/100)
      // push each denomToMinus to totalBillsGottenFromSlot

      totalBillsGottenFromSlot += denomToMinus;

      howManyPossible--;
    }

    var returnObject = [
      trackedAmount,
      [slott[0], Math.round(100 * totalBillsGottenFromSlot) / 100],
    ];
    //  console.log(returnObject)
    return returnObject;
  };

  //console.log("=============================")
  var object;
  for (var index in cid.reverse()) {
    object = howMuchFromSlotINeed(changeDue, cid[index]);
    changeDue = object[0];
    //console.log(changeDue)
    changeArr.push(object[1]);
    //console.log(changeArr)
    //console.log("**********************************")
  }
  //console.log("=============================")

  var totalChangeArr = 0;

  //console.log("Total Change Arr is " + totalChangeArr)

  var masterChangeArr = [];
  for (var index in changeArr) {
    if (changeArr[index][1] > 0) {
      masterChangeArr.push(changeArr[index]);
    }
  }

  console.log(masterChangeArr);

  var loopChangeArr = () => {
    for (var index in masterChangeArr) {
      totalChangeArr += masterChangeArr[index][1];
    }
  };

  loopChangeArr();
  var roundedChangeArr = Math.round(100 * totalChangeArr) / 100;
  console.log("Rounded Change Arr is " + roundedChangeArr);
  if (roundedChangeArr === roundedCID) {
    console.log("rounded Change and roundedCID Are the same");
    return { status: "CLOSED", change: changeArr.reverse() };
  }

  var originalChange = cash - price;
  console.log("Change Due is " + originalChange);
  if (originalChange === roundedChangeArr) {
    //console.log("Match Found")
    var returnObject = {
      status: "OPEN",
      change: masterChangeArr,
    };
    //console.log(masterChangeArr)
    return returnObject;
  }

  if (roundedChangeArr < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  console.log("---------------");
}

function popUp() {
  alert("Script executes when function is called");
}
