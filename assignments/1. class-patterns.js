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

let standard = {
  name: 'name',
  id: 'id',
  password: 'password',
  noOfProjects: 'noOfProjects',
  getProjects: function () {
    return objName.noOfProjects;
  },
  changeUsername: function (newName) {
    let oldName = objName.name;
    objName.name = newName;
    return oldName;
  },
  incrementProject: function () {
    return ++noOfProjects;
  },
  decrementProject: function () {
    return --noOfProjects;
  },
};

let mahire = Object.create(standard);

// Create an object using pseudoclassical way
let Templated = function(name, id, password, noOfProjects) {
  this.name = name;
  this.id = id;
  this.password = password;
  this.noOfProjects = noOfProjects;

  this.getProjects = function () {
    return this.noOfProjects;
  };
  this.changeUsername = function (newName) {
    let oldName = this.name;
    this.name = newName;
    return oldName;
  };
  this.incrementProject = function () {
    return ++this.noOfProjects;
  };
  this.decrementProject = function () {
    return --this.noOfProjects;
  };
}

let kakkad = new Templated("Kakkad", 12, "theAdmin", 1);

// Create an object using the class keyword
class Person {
  constructor(name, id, password, noOfProjects) {
    this.name = name;
    this.id = id;
    this.password = password;
    this.noOfProjects = noOfProjects;
  };

  // The methods for this class
  getProjects() {
    return this.noOfProjects;
  };
  changeUsername(newName) {
    let oldName = this.name;
    this.name = newName;
    return oldName;
  };
  incrementProject() {
    return ++this.noOfProjects;
  };
  decrementProject() {
    return --this.noOfProjects;
  };
}

let nayaLadka = new Person("patti", 12, "gonrat", 131);









