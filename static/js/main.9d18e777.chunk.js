(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),l=n.n(c);n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(2),s=n(3),h=n(5),r=n(4),d=n(1),u=n(6),m=n(9),b=(n(17),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(r.a)(t).call(this,e))).state={isChecked:!1},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleDelete=n.handleDelete.bind(Object(d.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleDelete",value:function(e){this.props.deleteItem(this.props.text)}},{key:"handleChange",value:function(e){this.setState({isChecked:!this.state.isChecked})}},{key:"render",value:function(){return o.a.createElement("li",{className:"todoItem"},o.a.createElement("p",null,this.props.text),o.a.createElement("div",{className:"checkAndDelete"},o.a.createElement("input",{className:"checkBox",type:"checkbox",value:this.state.isChecked,onChange:this.handleChange}),o.a.createElement("button",{className:"deleteButton",type:"button",onClick:this.handleDelete},"Delete")))}}]),t}(a.Component)),k=(n(18),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(r.a)(t).call(this,e))).state={todos:[],text:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.addTodo=n.addTodo.bind(Object(d.a)(n)),n.deleteItem=n.deleteItem.bind(Object(d.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"addTodo",value:function(){var e=this.state,t=e.todos,n=e.text,a=[].concat(Object(m.a)(t),[n]);this.setState({todos:a})}},{key:"deleteItem",value:function(e){var t=this.state.todos.filter(function(t){return!(t===e)});this.setState({todos:t})}},{key:"render",value:function(){var e=this,t=this.state.todos.map(function(t){return o.a.createElement(b,{key:t,text:t,deleteItem:e.deleteItem})});return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome to this TodoApp!"),o.a.createElement("h4",null,"This TodoApp is made by Mikkel Lundberg"),o.a.createElement("div",{className:"todoMakers"},o.a.createElement("button",{type:"button",onClick:this.addTodo},"Create"),o.a.createElement("input",{className:"textFelt",type:"text",onChange:this.handleChange})),o.a.createElement("ul",null,t))}}]),t}(a.Component)),p=(n(19),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(r.a)(t).call(this,e))).state={isChecked:!1},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({isChecked:!this.state.isChecked})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(k,null))}}]),t}(a.Component));l.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.9d18e777.chunk.js.map