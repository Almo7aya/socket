var Wedget = {
    init: function (width, height) {
      this.width = width;
      this.height = height;
      this.elem = null;
    },
    insert: function (where) {
      if (this.elem) {
        where.appendChild(this.elem);
      }
    }
}

var Button = Object.create(Wedget);
Button.setup = function (width, height, label, className) {
  // fake call super
  this.init(width, height);
  this.label = document.createTextNode( label || 'Button' );
  this.className = className;
  this.elem = document.createElement('button');
  this.elem.appendChild(this.label);
  this.elem.className = className;
};
Button.render = function (where) {
  this.insert(where);
  this.elem.click = this.onClick.bind(this);
  this.elem.style.width = this.width;
  this.elem.style.height = this.height;
};
Button.onClick = function (fn) {
  if (typeof fn === 'function') {
    fn();
  }
  this.elem.click();
}

var InputTest = Object.create(Wedget);

InputTest.setup = function (width, height, value, id, type, place) {
  // fake call super
  this.init(width, height);
  this.value = value || '';
  this.id = id || '';
  this.type = type || '';
  this.place = place || ''; 

  this.elem = document.createElement('input');
  this.elem.value = this.value;
  this.elem.id = this.id;
  this.elem.type = this.type;
  this.elem.place = this.place;

};

InputTest.render = function(where) {

  this.elem.style.width = this.width;
  this.elem.style.height = this.height;

  this.insert(where);
};

/* test OLOO */

var body = document.body;

var loginDiv = document.getElementById('centerLogin');

//add the two inputs

var inputName = Object.create(InputTest);
inputName.setup('90%', '40px', null, 'inputName', 'text', 'Enter your name !');
inputName.render(loginDiv);

var inputGroup = Object.create(InputTest);
inputGroup.setup('90%', '40px', null, 'inputGroup', 'text', 'Enter the group name !');
inputGroup.render(loginDiv);


var signinBtn = Object.create(Button);
signinBtn.setup('50%', '40px', 'Sigein', 'btn_login');
signinBtn.render(loginDiv);
