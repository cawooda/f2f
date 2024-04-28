var Component = require('./Component');

class Header extends Component {
    constructor(children){
        super(children)
    }
    render () {
        return `<header id="${this.generateId()}" class="header">${this.renderInnerHtml()}</header>`;
    }
}

module.exports = Header;