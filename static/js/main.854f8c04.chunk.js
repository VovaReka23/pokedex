(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{20:function(e,t,a){e.exports={card:"Card_card__2GKdg",img:"Card_img__1m6Kb",details:"Card_details__2--E5",ul:"Card_ul__1wlKl",grass:"Card_grass__14PBM",position:"Card_position__1-nmw",bug:"Card_bug__3MPn2",water:"Card_water__30fxe",fire:"Card_fire__3w2nK",flying:"Card_flying__1i9N1",electric:"Card_electric__LhApU",fighting:"Card_fighting__2P7Sy",normal:"Card_normal__3S1MB",ground:"Card_ground__XTFC0",fairy:"Card_fairy__2weSF",ghost:"Card_ghost__ak4fj",selected:"Card_selected__2Tc7H"}},21:function(e,t,a){e.exports={pokemonDetails:"PokemonDetails_pokemonDetails__2i3L8",block:"PokemonDetails_block__2-xGa",img:"PokemonDetails_img__2yqP0",type:"PokemonDetails_type__1kqNu",fire:"PokemonDetails_fire__1vbK9"}},36:function(e,t,a){e.exports={footer:"Footer_footer__3KPQ6",span:"Footer_span__lfW4I"}},37:function(e,t,a){e.exports={header:"Header_header__1Xurb",logo:"Header_logo__39VMP"}},40:function(e,t,a){e.exports={container:"Home_container__1DMd3",cardCotainer:"Home_cardCotainer__1MSAF"}},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getPokemons",(function(){return S})),a.d(n,"getPokemon",(function(){return A})),a.d(n,"getLoadMore",(function(){return C})),a.d(n,"getStats",(function(){return y}));var o=a(0),s=a.n(o),r=a(18),c=a.n(r),i=a(19),l=a(49),d=a(50),m=a(4),j={loadingPokemons:!1,loadedPokemons:!1,loadingPokemon:!1,loadedPokemon:!1,pokemons:[],pokemonsAll:[],next:"",pokemonDetails:[],error:null,selected:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POKEMONS_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{loadingPokemons:!0});case"GET_POKEMONS_SUCCESS":var a=t.payload.next;return Object(m.a)(Object(m.a)({},e),{},{loadingPokemons:!1,loadedPokemons:!0,pokemonsAll:t.payload.results,next:a});case"GET_POKEMONS_ERROR":return Object(m.a)(Object(m.a)({},e),{},{loadingPokemons:!1,error:t.payload});case"GET_LOAD_MORE_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{loadingPokemons:!0});case"GET_LOAD_MORE_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{loadingPokemons:!1,loadedPokemons:!0,pokemonsAll:t.payload.results,next:t.payload.next});case"GET_LOAD_MORE_ERROR":return Object(m.a)(Object(m.a)({},e),{},{loadingPokemons:!1,error:t.payload});case"GET_POKEMON_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{loadingPokemons:!0});case"GET_POKEMON_SUCCESS":var n=t.payload,o={};return o.id=n.id,o.forms=n.forms[0],o.stats=n.stats,o.types=n.types,o.url=n.sprites.other.dream_world.front_default,Object(m.a)(Object(m.a)({},e),{},{loadingPokemons:!1,loadedPokemons:!0,pokemons:[].concat(Object(d.a)(e.pokemons),[o])});case"GET_POKEMON_ERROR":return Object(m.a)(Object(m.a)({},e),{},{loadingPokemons:!1,error:t.payload});case"GET_STATS":return Object(m.a)(Object(m.a)({},e),{},{pokemonDetails:t.payload,selected:t.id});default:return e}},O=Object(i.c)({pokemons:p}),u=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,E=Object(i.e)(O,u(Object(i.a)(l.a))),b=a(32),h=a(6),g=a(24),_=a.n(g),k=a(33),f=a(34),x=a.n(f),S=function(){return function(){var e=Object(k.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_POKEMONS_REQUEST"}),e.prev=1,e.next=4,x.a.get("https://pokeapi.co/api/v2/pokemon?limit=12");case 4:a=e.sent,t({type:"GET_POKEMONS_SUCCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_POKEMONS_ERROR",payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(k.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_POKEMON_REQUEST"}),t.prev=1,t.next=4,x.a.get("".concat(e));case 4:n=t.sent,a({type:"GET_POKEMON_SUCCESS",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_POKEMON_ERROR",payload:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(k.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_LOAD_MORE_REQUEST"}),t.prev=1,t.next=4,x.a.get("".concat(e));case 4:n=t.sent,a({type:"GET_LOAD_MORE_SUCCESS",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_LOAD_MORE_ERROR",payload:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},y=function(e,t){return function(a){a({type:"GET_STATS",payload:e,id:t})}},v=a(112),R=a(107),K=a(106),w=a(108),P=a(20),N=a.n(P),T=a(2);var M=function(e){var t=e.pokemon,a=e.onSelect,n=e.selected;return Object(T.jsxs)(v.a,{onClick:function(e){return a(e,t.stats,t.url,t.forms.name,t.id)},className:N.a.card,children:[Object(T.jsx)(K.a,{className:N.a.img,image:t.url,title:t.forms.name}),n===t.id&&Object(T.jsx)("img",{className:N.a.selected,src:"data:image/png;base64,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",alt:"selected"}),Object(T.jsx)("div",{className:N.a.details,children:Object(T.jsxs)(R.a,{className:N.a.content,children:[Object(T.jsx)(w.a,{component:"h4",variant:"h4",children:t.forms.name}),0!==t.types.length&&Object(T.jsx)("ul",{className:N.a.ul,children:t.types.map((function(e){return Object(T.jsx)("li",{className:N.a[e.type.name],children:Object(T.jsx)("span",{children:e.type.name})},e.slot)}))})]})})]})},G=a(36),J=a.n(G),D=function(){return Object(T.jsxs)("footer",{className:J.a.footer,children:[" ",Object(T.jsx)("span",{className:J.a.span,children:" 2021 "})," "]})},B=a(27),Q=a.p+"static/media/logo.ecbbdb8b.png",I=a(37),U=a.n(I),F=function(){return Object(T.jsx)("header",{className:U.a.header,children:Object(T.jsx)(B.b,{to:"/pokedex",children:Object(T.jsx)("img",{className:U.a.logo,src:Q,alt:"logo"})})})},H=a(109),L=a(110),Y=Object(H.a)((function(e){return{root:{width:"100%","& > *":{margin:0,width:"100%"}}}}));function V(e){var t=e.onClick,a=e.label,n=Y();return Object(T.jsx)("div",{className:n.root,children:Object(T.jsx)(L.a,{onClick:t,size:"large",variant:"contained",color:"primary",children:a})})}var Z=s.a.memo(V),W=a(21),X=a.n(W),q=function(e){var t=e.pokemonDetails;return Object(T.jsx)("div",{className:X.a.pokemonDetails,children:Object(T.jsxs)("div",{className:X.a.block,children:[Object(T.jsx)(K.a,{className:X.a.img,image:t.img,title:t.name}),Object(T.jsx)(w.a,{component:"h4",variant:"h4",children:t.name}),Object(T.jsxs)("table",{children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{className:X.a.type,children:"Type"}),Object(T.jsx)("th",{className:X.a.fire,children:"Fire"})]})}),Object(T.jsx)("tbody",{children:t.stats.map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{className:X.a.type,children:e.stat.name}),Object(T.jsx)("td",{className:X.a.fire,children:e.base_stat})]},t)}))})]})]})})},z=a(40),$=a.n(z),ee=function(e){s.a.useEffect((function(){e.getPokemons()}),[]),s.a.useEffect((function(){e.loadedPokemons&&e.pokemonsAll.map((function(t){e.getPokemon(t.url)}))}),[e.pokemonsAll]);var t=function(t,a,n,o,s){e.getStats({name:o,img:n,stats:a},s)};return Object(T.jsxs)("div",{className:$.a.container,children:[Object(T.jsxs)("div",{className:$.a.cardCotainer,children:[e.loadedPokemons&&e.pokemons.map((function(a){return Object(T.jsx)(M,{selected:e.selected,onSelect:t,pokemon:a},a.id)})),Object(T.jsx)(Z,{onClick:function(){""!==e.next&&e.getLoadMore(e.next)},label:"Load More"})]}),0!==e.pokemonDetails.length&&Object(T.jsx)(q,{pokemonDetails:e.pokemonDetails})]})},te=Object(b.b)((function(e){return{pokemons:e.pokemons.pokemons,pokemonsAll:e.pokemons.pokemonsAll,next:e.pokemons.next,loadedPokemons:e.pokemons.loadedPokemons,pokemonDetails:e.pokemons.pokemonDetails,selected:e.pokemons.selected}}),(function(e){return Object(i.b)(Object(m.a)({},n),e)}))(s.a.memo(ee)),ae=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(F,{}),Object(T.jsx)(h.c,{children:Object(T.jsx)(h.a,{exact:!0,path:"/pokedex",children:Object(T.jsx)(te,{})})}),Object(T.jsx)(D,{})]})};a(85);c.a.render(Object(T.jsx)(B.a,{children:Object(T.jsx)(b.a,{store:E,children:Object(T.jsx)(ae,{})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.854f8c04.chunk.js.map