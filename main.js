const fs = require("fs");

// function that make a user object to append it to users array
const createUserObject = (keys, values) => {
  let userObj = {};
  for (let i = 0; i < keys.length; i++) {
    userObj[new String(keys[i]).trim()] = new String(values[i]).trim();
  }
  return userObj;
};

//opening a file and saving it
try {
  const data = fs.readFileSync("./users.csv");
  const rowsSplitter = new String(data).split("\r\n");
  let users = [];

  //getting the users attributes names from the csv [headers : first row]
  const keysList = rowsSplitter[0].split(",");

  for (let i = 1; i < rowsSplitter.length; i++) {
    const rowValues = rowsSplitter[i].split(",");
    users.push(createUserObject(keysList, rowValues));
  }

  //console.log(JSON.stringify(users));

  //writing the results to the JSON file like that 

  fs.writeFileSync('./users.json', JSON.stringify(users));
  console.log('finished')
} catch (e) {
  console.error(e.message);
}
//save users to new JSON file
