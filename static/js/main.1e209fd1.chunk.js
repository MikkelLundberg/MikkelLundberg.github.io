(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),i=n.n(c);n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(7),r=n(2),d=n(3),s=n(6),u=n(4),h=n(1),m=n(5),p=(n(17),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleDelete=function(e){n.props.deleteItem(n.props.text)},n.handleChange=function(e){(0,n.props.onValueChange)(n.props.id)},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleDelete=n.handleDelete.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("li",{className:"todoItem"},o.a.createElement("p",null,this.props.text),o.a.createElement("div",{className:"checkAndDelete"},o.a.createElement("input",{className:"checkBox",type:"checkbox",defaultChecked:this.props.isChecked,onChange:this.handleChange}),o.a.createElement("button",{className:"deleteButton",type:"button",onClick:this.handleDelete},"Delete")))}}]),t}(a.Component));n(18);var b=function(e){var t=e.todos.map(function(t){return o.a.createElement(p,{id:t.id,key:t.id,text:t.value,onValueChange:e.onToggle,isChecked:t.isChecked})});return o.a.createElement("div",{className:"TodoList"},o.a.createElement("ul",null,t))};n(19),n(20);var f=function(){return o.a.createElement("div",{className:"welcome"},o.a.createElement("h1",null,"Welcome to this TodoApp!"),o.a.createElement("h4",null,"This TodoApp is made by Mikkel Lundberg"))},k=n(21),g=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState({input:e.target.value})},n.createTodo=function(){(0,n.props.onClick)({id:k(),value:n.state.input,isChecked:!1})},n.state={input:[]},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"todoMakers"},o.a.createElement("h2",null,"Create a Todo here!"),o.a.createElement("button",{className:"createButton",type:"button",onClick:this.createTodo},"Create"),o.a.createElement("input",{className:"textFelt",type:"text",onChange:this.handleChange}))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={todos:[]},n.deleteItem=n.deleteItem.bind(Object(h.a)(n)),n.addTodo=n.addTodo.bind(Object(h.a)(n)),n.toggleTodo=n.toggleTodo.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"deleteItem",value:function(e){}},{key:"addTodo",value:function(e){var t=this.state.todos,n=[].concat(Object(l.a)(t),[e]);this.setState({todos:n})}},{key:"toggleTodo",value:function(e){var t=this.state.todos,n=t.filter(function(t){return t.id===e})[0];n.isChecked=!n.isChecked;var a=t.filter(function(t){return t.id!==e}),o=[].concat(Object(l.a)(a),[n]);this.setState({todos:o})}},{key:"render",value:function(){var e=this.state.todos,t=e.filter(function(e){return!e.isChecked}),n=e.filter(function(e){return e.isChecked});return o.a.createElement("div",{className:"app"},o.a.createElement(f,null),o.a.createElement(g,{onClick:this.addTodo}),o.a.createElement("div",{className:"todoContainer"},o.a.createElement(b,{key:"untickedTodos",todos:t,deleteItem:this.deleteItem(),onToggle:this.toggleTodo}),o.a.createElement(b,{key:"tickedTodos",todos:n,deleteItem:this.deleteItem(),onToggle:this.toggleTodo})))}}]),t}(a.Component);i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.1e209fd1.chunk.js.map