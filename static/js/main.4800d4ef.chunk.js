(this["webpackJsonpbookself-app"]=this["webpackJsonpbookself-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(16),r=a.n(s),l=(a(23),a(2)),i=a(3),c=a(5),u=a(4),m=a(6),h=a(17),d=a.n(h),p="https://www.googleapis.com/books/v1/volumes?q=",b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={textInput:"",imBusy:!1},a.Loading=function(e){return a.setState({imBusy:!1}),o.a.createElement("div",{className:"container"},o.a.createElement("h6",null,"Loading ..."))},a.getBooks=function(){a.props.onSearchResult("new"),a.setState({imBusy:!0}),d.a.get(p+a.state.textInput+"&maxResults=40").then((function(e){0===e.data.totalItems?(a.props.onSearchResult("error"),a.setState({imBusy:!1})):(a.props.onSearchResult(e.data.items),a.setState({imBusy:!1}))})).catch((function(e){console.error(e)}))},a.handleEvent=function(e){a.setState({textInput:e.target.value}),"Enter"===e.key&&a.getBooks()},a.keyPressed=function(e){"Enter"===e.key&&"Enter"===e.key&&a.getBooks()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"container bcg p-2 rounded-lg"},o.a.createElement("h2",null,"Google Books Search"),o.a.createElement("div",{className:"container d-inline-flex"},o.a.createElement("input",{type:"text",name:"search",className:"form-control mr-3 mb-5",placeholder:"Search for Books ...",autoComplete:"off",onChange:function(t){return e.handleEvent(t)},onKeyPress:function(t){return e.keyPressed(t)}}),o.a.createElement("button",{type:"submit",className:"btn btn-secondary mb-5",onClick:this.getBooks},"Search"))),this.state.imBusy&&o.a.createElement("h4",null,"Loading ..."))}}]),t}(n.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"checkClick",value:function(e){"shadowBcg"===e.target.className&&this.props.onClose(console.log(e.target.className))}},{key:"render",value:function(){var e=this;if(!this.props.show)return null;this.props.selectedBook;return o.a.createElement("div",{className:"shadowBcg",onClick:function(t){return e.checkClick(t)}},o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"m-2 w-100 border border-secondary rounded-lg p-3 overflow-hidden"},o.a.createElement("div",{className:"font-weight-bold"},this.props.children.title),o.a.createElement("div",null,this.props.children.authors),o.a.createElement("div",null,"Published: ",this.props.children.publishedDate),o.a.createElement("div",{className:"h-50 m-2 overflow-hidden"},void 0!==this.props.children.imageLinks&&o.a.createElement("img",{src:this.props.children.imageLinks.thumbnail,alt:""})),o.a.createElement("a",{href:this.props.children.previewLink,target:"_blank",size:"sm",style:{paddingLeft:40,paddingRight:40,marginBottom:10,float:"right",marginLeft:10},className:"btn btn-secondary"},"Preview"),o.a.createElement("span",null,"Description: ",this.props.children.description)),o.a.createElement("div",{className:"footer"},o.a.createElement("button",{onClick:this.props.onClose,type:"button",className:"close","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")))))}}]),t}(o.a.Component),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isOpen:!1,selectedBook:""},a.toggleModal=function(e){a.setState({isOpen:!a.state.isOpen});var t=e;a.setState({selectedBook:t})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.bookList),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},"error"===this.props.bookList?o.a.createElement("h4",{className:"text-center"},"No Results to Display"):"new"===this.props.bookList?o.a.createElement("h4",null):this.props.bookList.map((function(t){return o.a.createElement("div",{key:t.id,className:"col-md-3 border border-secondary rounded-lg"},o.a.createElement("div",{className:"box m-2 overflow-hidden",onClick:function(a){return e.toggleModal(t.volumeInfo)}},o.a.createElement("div",null,void 0!==t.volumeInfo.imageLinks&&o.a.createElement("img",{src:t.volumeInfo.imageLinks.smallThumbnail,alt:""}),o.a.createElement("div",null,o.a.createElement("div",null,"Title: ",t.volumeInfo.title),o.a.createElement("div",null,"Authors: ",t.volumeInfo.authors||"N/A")))))})),o.a.createElement(f,{show:this.state.isOpen,onClose:this.toggleModal},this.state.selectedBook)))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={bookList:[]},a.handleBookList=function(e){a.setState({bookList:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(b,{onSearchResult:this.handleBookList}),o.a.createElement(v,{bookList:this.state.bookList}))}}]),t}(n.Component);r.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4800d4ef.chunk.js.map