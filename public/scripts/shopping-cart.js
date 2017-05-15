'use strict';

class ShoppingCart extends Component {
  constructor(options) {
    super(options.el);

    this._template = options.template;

    this._items = [];

    this.render();
  }

  render() {
    let templateFunction = _.template(this._template);
    let html = templateFunction({
      title: 'My shopping cart',
      items: this._items
    });

    this._el.innerHTML = html;
  }

  addItem(item) {
    this._items.push(item);

    this.render();
  }
}