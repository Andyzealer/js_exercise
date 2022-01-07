//create an app --root component
const app = Vue.createApp({});
const vm = app.mount("#app");

//插值—— mustache
// <span>Message: {{ msg }}</span>
// <span v-once>这个将不会改变: {{ msg }}</span>

// {/* <p>Using mustaches: {{ rawHtml }}</p> */}
// {/* <p>Using v-html directive: <span v-html="rawHtml"></span></p> */}

//attribute
//Mustache 语法不能在 HTML attribute 中使用，然而，可以使用 v-bind 指令：
{
  /* <div v-bind:id="dynamicId"></div> */
}

// 还可以使用JS表达式

//指令
{
  /* <p v-if="seen">现在你看到我了</p>; */
}

//参数
// 一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，v-bind 指令可以用于响应式地更新 HTML attribute：
{
  /* <a v-bind:href="url"> ... </a>; */
}
//将元素的href attribute与表达式URL的值绑定

//动态参数
//<a v-bind:[attributeName]="url"> ... </a>
//这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的组件实例有一个 data property attributeName，其值为 "href"，那么这个绑定将等价于 v-bind:href。

//修饰符
//<form v-on:submit.prevent="onSubmit">...</form>

// 缩写
// v-bind:href --> :href
// v-on:click --> @click
