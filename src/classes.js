'use strict'

class Foo {

};

var bar = new Foo;

class Dog {
  constructor(says) {
    this.says = `life is ruff`;
  }
}

class Cat {
  constructor(size) {
    this.size = size;
  }
  growl() {
    return `meow`;
  }
}

var garfield = new Cat;


class FacelessMan {
  constructor(name) {
    this.name = name;
  }
}

var aMan = new FacelessMan(`Jaqen H'ghar`);

// console.log(aMan.name);

class Lion extends Cat {
  constructor(size) {
    super('BIG');
  }
}

// console.log(Lion.size);


class KeepSecret {
  constructor(secret) {
    this.squeal = function() {
      return secret;
    }
  }
}

class Key {
  constructor() {

  }
}

class Safe {
  constructor (secret, key) {
    this.unlock = function (x) {
      if (x === key) {
        return secret;
      }
    }
    }
  }
