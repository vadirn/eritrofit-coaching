'use strict';

var Icon = React.createClass({
  propTypes: {
    name: React.PropTypes.string.required
  },
  render: function() {
    var iconClass = 'icon icon--'+this.props.name;
    var icon = "<use xlink:href='#"+ this.props.name + "'></use>";
    return (<span className={iconClass}>
      <svg dangerouslySetInnerHTML={{ __html: icon }} />
    </span>);
  }
});

module.exports = Icon;
