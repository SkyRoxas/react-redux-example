# Redux

## Redux store

```{.javascript}
createStore('rootReducer','initialState','enhancer')
// {'最主要的 reducer','初始化狀態',‘enhancer’}
```

--------------------------------------------------------------------------------

# middleware:

[middleware](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)

像是個 過濾網 的功能，簡單來說就是 瀏覽器在收到請求是，會執行的 函數， 我們將他稱呼為 middleware

有些 middleware 還能處理 Redux 產出的 log

```
applyMiddlewares(); 為 redux 原生的方法，作用是把所有的 middleware 組合成一個 陣列 並且 照順序執行
```

--------------------------------------------------------------------------------

## redux-thunk

用來幫助 React 進行 `非同步` middleware 的套件 主要的功用是可以讓 redxu dispatch() 接受函数作为参数

因為 `store.dispatch` 方法正常情况下，参数只能是对象

--------------------------------------------------------------------------------

# Mudule

--------------------------------------------------------------------------------

## react-router

> 在研究 react-router 之前，必須要先有些 router 的概念 一般 router 都是交由 後端 處理，來作為請求 API 時的事件依據 （瀏覽器會重新整理） 而交由 前端 來實作 router 時，其實是在製作假的 router ， 其實所有的事情都只發生在一個頁面而已

另外建議在使用 react-router 之前，可以先了解一下，原先使用 Express 製作 Router 的概念，在看 react-router，比較能理解為什麼要使用 react-router ，來完成 router 的需求

[Express router](https://blog.gtwang.org/programming/learn-to-use-the-new-router-in-expressjs-4/)

### react-router

> 此模組建立了 react router 的核心 code

但一般並不會直接在套件上直接使用

如果是要使用 browser 話，應該要直接使用 react-router-dom 來渲染 Dom 的元素 如果是使用 redux 則直接安裝 react-router-redux 來做使用

--------------------------------------------------------------------------------

### react-router-dom [教學](https://reacttraining.com/react-router/)

基本使用：

```{.jsx}
<Router></Router>  
// React Router 外層一定要使用的標籤 ， 可以在這裡載入 history 的 libarary
```

```{.jsx}
<Link to ="/" >文字</Link>
// 有點像一般 <a> 標籤的使用方式，不過只是觸發在 router 指定的路徑而已
```

```{.jsx}
<Route exact path ="/"  component ="<App/>"/>
```

- path : 指定要渲染 component 的路徑
- component : 要渲染 component 的指定名稱
- exact (true/false) : 用於嚴格規定是不是只有完全符合 `path` 才會進行渲染 component

--------------------------------------------------------------------------------

路由種類：

- [Dynamic Routing](https://reacttraining.com/react-router/web/guides/philosophy)
- [Nested Routes](https://reacttraining.com/react-router/web/example/basic)
- [Responsive Routes](https://reacttraining.com/react-router/web/example/basic)

另外可以搭配著

<switch> 的 tag ， 甚至可以達到隨著 media query 在 responsive 的狀態下，切換 html 架構的效果</switch>

--------------------------------------------------------------------------------

補充：

react-router ， 會將一個 物件 傳入要 渲染的 component 的參數中，物件內容如下：

```
{path: "/topics/:topicId/:test", url: "/topics/view1/test1", isExact: true, params: {…}}
```

可以在裡面取得 local , path 與 url 的資訊

```
<li><Link to ={`${match.url}/view1/test1`}>view1</Link></li>
<Route path={`${match.url}/:topicId/:test`} component={Topic}/>
```

另外可以在 proms 中，取得在 lnik 中，後面的路徑名稱

--------------------------------------------------------------------------------

### react-router-redux:

> [react-router-redux](https://medium.com/@slashtu/react-router-redux-62872860e8a) 的目的就是要把 react-router 的 history 跟 store 互相同步

也就是說 store 裡面會有 router 的狀態, 整個流程會像這樣:

history + store → react-router-redux → enhanced history → react-router

在理解 react-router-redux 之前，必須先對 [history](https://juejin.im/entry/59b9552b6fb9a00a5b1a87af) 有個認識

- 點擊 React router生成的

  <link>

  ：對應 history 的 push 的方法

- <redurect> : 對應 history 的 replace 的方法</redurect>

--------------------------------------------------------------------------------

### react-redux

[sample](https://gist.github.com/markerikson/121c77a01c453466361a9c6434a08620)
實作案例為 `src_03`

將 react 與 redux 做整合的工具

提供 component 與 container 的觀念

將 UI 與 state 邏輯分離

### connect()

使用方式如下：

```{.javascript}
connect(mapStateToProps(),mapDispatchToProps())(Component)
```

mapStateToProps(state):

存放 對應 component 的 屬性 的物件

***

mapDispatchToProps(dispatch):

以物件的方式，存放所有 dispatch 的事件



### <Provider> 组件
