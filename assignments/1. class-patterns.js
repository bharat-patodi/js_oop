// Create an object with a function

const createObject = (name, id, password, noOfProjects) => {
  let objName = {};
  objName.name = name;
  objName.id = id;
  objName.password = password;
  objName.noOfProjects = noOfProjects;
  objName.getProjects = function () {
    return objName.noOfProjects;
  };
  objName.changeUsername = function (newName) {
    let oldName = objName.name;
    objName.name = newName;
    return oldName;
  };
  objName.incrementProject = function () {
    return ++noOfProjects;
  };
  objName.decrementProject = function () {
    return --noOfProjects;
  };
  return objName;
};

let bharat = createObject('bharat', 45, 'yourAdmin', 12);

// Create an object with Object.create()

let hiten = Object.create(null);
