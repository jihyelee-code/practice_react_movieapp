(this.webpackJsonppractice_react_movieapp=this.webpackJsonppractice_react_movieapp||[]).push([[0],{20:function(e,a,t){e.exports=t(47)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),s=t.n(i),c=t(3),m=t.n(c),o=t(14),l=t(15),u=t(18),d=t(16),p=t(19),v=t(17),g=t.n(v),y=t(2),E=t.n(y);t(45);function f(e){var a=e.id,t=e.title,n=e.year,i=e.rating,s=e.summary,c=e.poster,m=e.genres;return r.a.createElement("div",{id:a,className:"movie"},r.a.createElement("img",{className:"img",src:c,alt:t}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"title"},t),r.a.createElement("div",{className:"movie_data_ele"},r.a.createElement("h5",{className:"year"},n),r.a.createElement("h5",{className:"rating"},i)),r.a.createElement("ul",{className:"genres"},m.map((function(e,a){return r.a.createElement("li",{key:a},e)}))),r.a.createElement("p",{className:"summary"},s.slice(0,130),"...")))}f.prototype={id:E.a.number.isRequired,title:E.a.string.isRequired,year:E.a.number.isRequired,rating:E.a.number.isRequired,summary:E.a.string.isRequired,poster:E.a.string.isRequired,genres:E.a.arrayOf(E.a.string).isRequired};var h=f,N=(t(46),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},t.getMovies=function(){var e,a;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,a=e.data.data.movies,t.setState({movies:a,isLoading:!1});case 5:case"end":return n.stop()}}))},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loading"},r.a.createElement("h3",null,"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,title:e.title,year:e.year,rating:e.rating,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));s.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.f9809beb.chunk.js.map