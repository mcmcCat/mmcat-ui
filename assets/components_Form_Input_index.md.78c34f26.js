import{d as y,h as c,y as v,C as e,c as i,k as l,H as d,w as b,Q as n,o as u,_ as m}from"./chunks/framework.8950c85b.js";const F=n(`<h1 id="input-输入框" tabindex="-1" data-v-a0bd1186>Input 输入框 <a class="header-anchor" href="#input-输入框" aria-label="Permalink to &quot;Input 输入框&quot;" data-v-a0bd1186>​</a></h1><p data-v-a0bd1186>通过鼠标或键盘输入内容，是最基础的表单域的包装</p><h2 id="基本使用" tabindex="-1" data-v-a0bd1186>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-a0bd1186>​</a></h2><div class="tip custom-block" data-v-a0bd1186><p class="custom-block-title" data-v-a0bd1186>.lazy</p><p data-v-a0bd1186>默认情况下，<code data-v-a0bd1186>v-model</code> 会在每次 <code data-v-a0bd1186>input</code> 事件后更新数据 (IME 拼字阶段的状态例外)。你可以添加 <code data-v-a0bd1186>lazy</code> 修饰符来改为在每次 <code data-v-a0bd1186>change</code> 事件后更新数据。</p><div class="language-vue vp-adaptive-theme" data-v-a0bd1186><button title="Copy Code" class="copy" data-v-a0bd1186></button><span class="lang" data-v-a0bd1186>vue</span><pre class="shiki github-dark vp-code-dark" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#6A737D;" data-v-a0bd1186>&lt;!-- 在 &quot;change&quot; 事件后同步更新而不是 &quot;input&quot; --&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;</span><span style="color:#85E89D;" data-v-a0bd1186>mc-input</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>v-model</span><span style="color:#E1E4E8;" data-v-a0bd1186>.</span><span style="color:#B392F0;" data-v-a0bd1186>lazy</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186>lazyValue</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#6A737D;" data-v-a0bd1186>&lt;!-- 在 &quot;change&quot; 事件后同步更新而不是 &quot;input&quot; --&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;</span><span style="color:#22863A;" data-v-a0bd1186>mc-input</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>v-model</span><span style="color:#24292E;" data-v-a0bd1186>.</span><span style="color:#6F42C1;" data-v-a0bd1186>lazy</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;</span><span style="color:#24292E;" data-v-a0bd1186>lazyValue</span><span style="color:#032F62;" data-v-a0bd1186>&quot;</span><span style="color:#24292E;" data-v-a0bd1186> /&gt;</span></span></code></pre></div></div>`,4),g={class:"example"},h={class:"item"},q={class:"item"},C=n(`<details class="details custom-block" data-v-a0bd1186><summary data-v-a0bd1186>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-a0bd1186><button title="Copy Code" class="copy" data-v-a0bd1186></button><span class="lang" data-v-a0bd1186>vue</span><pre class="shiki github-dark vp-code-dark" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>div</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>class</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;example&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>    &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>mc-input</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>v-model</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>placeholder</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;Basic usage&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>    &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>mc-input</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>v-model.lazy</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;lazyValue&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>placeholder</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;Lazy usage&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  &lt;/</span><span style="color:#85E89D;" data-v-a0bd1186>div</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;/</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  &lt;</span><span style="color:#22863A;" data-v-a0bd1186>div</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>class</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;example&quot;</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>    &lt;</span><span style="color:#22863A;" data-v-a0bd1186>mc-input</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>v-model</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>placeholder</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;Basic usage&quot;</span><span style="color:#24292E;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>    &lt;</span><span style="color:#22863A;" data-v-a0bd1186>mc-input</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>v-model.lazy</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;lazyValue&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>placeholder</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;Lazy usage&quot;</span><span style="color:#24292E;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  &lt;/</span><span style="color:#22863A;" data-v-a0bd1186>div</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;/</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span></code></pre></div></details><h2 id="前缀和后缀" tabindex="-1" data-v-a0bd1186>前缀和后缀 <a class="header-anchor" href="#前缀和后缀" aria-label="Permalink to &quot;前缀和后缀&quot;" data-v-a0bd1186>​</a></h2><p data-v-a0bd1186>要在输入框中添加图标，你可以使用 <code data-v-a0bd1186>prefix</code> 和 <code data-v-a0bd1186>suffix</code> 命名的插槽 。另外，也可以直接使用 <code data-v-a0bd1186>prefix</code> 和 <code data-v-a0bd1186>suffix</code> 属性插入 <code data-v-a0bd1186>String</code>。</p>`,3),B={class:"example"},f={class:"item"},_={class:"item"},k=n(`<details class="details custom-block" data-v-a0bd1186><summary data-v-a0bd1186>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-a0bd1186><button title="Copy Code" class="copy" data-v-a0bd1186></button><span class="lang" data-v-a0bd1186>vue</span><pre class="shiki github-dark vp-code-dark" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  </span><span style="color:#6A737D;" data-v-a0bd1186>&lt;!-- slot --&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>mc-input</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>v-model</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>placeholder</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;slots&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>    &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186> #</span><span style="color:#B392F0;" data-v-a0bd1186>prefix</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>      &lt;</span><span style="color:#FDAEB7;font-style:italic;" data-v-a0bd1186>User</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;" data-v-a0bd1186>User</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>    &lt;/</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>    &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186> #</span><span style="color:#B392F0;" data-v-a0bd1186>suffix</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>      &lt;</span><span style="color:#FDAEB7;font-style:italic;" data-v-a0bd1186>Edit</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;" data-v-a0bd1186>Edit</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>    &lt;/</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  &lt;/</span><span style="color:#85E89D;" data-v-a0bd1186>mc-input</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  </span><span style="color:#6A737D;" data-v-a0bd1186>&lt;!-- props --&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>mc-input</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>v-model</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>prefix</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;￥&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>suffix</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;RMB&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>placeholder</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;props&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;/</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  </span><span style="color:#6A737D;" data-v-a0bd1186>&lt;!-- slot --&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  &lt;</span><span style="color:#22863A;" data-v-a0bd1186>mc-input</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>v-model</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>placeholder</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;slots&quot;</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>    &lt;</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186> #</span><span style="color:#6F42C1;" data-v-a0bd1186>prefix</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>      &lt;</span><span style="color:#B31D28;font-style:italic;" data-v-a0bd1186>User</span><span style="color:#24292E;" data-v-a0bd1186>&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;" data-v-a0bd1186>User</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>    &lt;/</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>    &lt;</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186> #</span><span style="color:#6F42C1;" data-v-a0bd1186>suffix</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>      &lt;</span><span style="color:#B31D28;font-style:italic;" data-v-a0bd1186>Edit</span><span style="color:#24292E;" data-v-a0bd1186>&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;" data-v-a0bd1186>Edit</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>    &lt;/</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  &lt;/</span><span style="color:#22863A;" data-v-a0bd1186>mc-input</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  </span><span style="color:#6A737D;" data-v-a0bd1186>&lt;!-- props --&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  &lt;</span><span style="color:#22863A;" data-v-a0bd1186>mc-input</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>v-model</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>prefix</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;￥&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>suffix</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;RMB&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>placeholder</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;props&quot;</span><span style="color:#24292E;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;/</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span></code></pre></div></details><h2 id="尺寸" tabindex="-1" data-v-a0bd1186>尺寸 <a class="header-anchor" href="#尺寸" aria-label="Permalink to &quot;尺寸&quot;" data-v-a0bd1186>​</a></h2><p data-v-a0bd1186>使用 <code data-v-a0bd1186>size</code> 属性改变输入框大小。 除了默认大小外，还有另外两个选项： <code data-v-a0bd1186>large</code> , <code data-v-a0bd1186>small</code>。</p>`,3),D={class:"example"},x={class:"item"},A={class:"item"},V={class:"item"},w=n(`<details class="details custom-block" data-v-a0bd1186><summary data-v-a0bd1186>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-a0bd1186><button title="Copy Code" class="copy" data-v-a0bd1186></button><span class="lang" data-v-a0bd1186>vue</span><pre class="shiki github-dark vp-code-dark" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>mc-input</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>v-model</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>size</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;large&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>placeholder</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;large&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>mc-input</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>v-model</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>placeholder</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;default&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>mc-input</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>v-model</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>size</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;small&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>placeholder</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;small&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;/</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  &lt;</span><span style="color:#22863A;" data-v-a0bd1186>mc-input</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>v-model</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>size</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;large&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>placeholder</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;large&quot;</span><span style="color:#24292E;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  &lt;</span><span style="color:#22863A;" data-v-a0bd1186>mc-input</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>v-model</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>placeholder</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;default&quot;</span><span style="color:#24292E;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  &lt;</span><span style="color:#22863A;" data-v-a0bd1186>mc-input</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>v-model</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>size</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;small&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>placeholder</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;small&quot;</span><span style="color:#24292E;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;/</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span></code></pre></div></details><h2 id="一键清空" tabindex="-1" data-v-a0bd1186>一键清空 <a class="header-anchor" href="#一键清空" aria-label="Permalink to &quot;一键清空&quot;" data-v-a0bd1186>​</a></h2><p data-v-a0bd1186>使用 <code data-v-a0bd1186>allow-clear</code> 属性即可得到一个可一键清空的输入框</p>`,3),z={class:"example"},U=n(`<details class="details custom-block" data-v-a0bd1186><summary data-v-a0bd1186>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-a0bd1186><button title="Copy Code" class="copy" data-v-a0bd1186></button><span class="lang" data-v-a0bd1186>vue</span><pre class="shiki github-dark vp-code-dark" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>mc-input</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>v-model</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>allow-clear</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>placeholder</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;input allow clear&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;/</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  &lt;</span><span style="color:#22863A;" data-v-a0bd1186>mc-input</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>v-model</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>allow-clear</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>placeholder</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;input allow clear&quot;</span><span style="color:#24292E;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;/</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span></code></pre></div></details><h2 id="密码框" tabindex="-1" data-v-a0bd1186>密码框 <a class="header-anchor" href="#密码框" aria-label="Permalink to &quot;密码框&quot;" data-v-a0bd1186>​</a></h2><p data-v-a0bd1186>使用 <code data-v-a0bd1186>password</code> 属性即可得到一个可切换显示隐藏的密码框</p>`,3),P={class:"example"},S=n(`<details class="details custom-block" data-v-a0bd1186><summary data-v-a0bd1186>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-a0bd1186><button title="Copy Code" class="copy" data-v-a0bd1186></button><span class="lang" data-v-a0bd1186>vue</span><pre class="shiki github-dark vp-code-dark" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>mc-input</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>v-model</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>password</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>allow-clear</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>placeholder</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;password&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;/</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  &lt;</span><span style="color:#22863A;" data-v-a0bd1186>mc-input</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>v-model</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>password</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>allow-clear</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>placeholder</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;password&quot;</span><span style="color:#24292E;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;/</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span></code></pre></div></details><h2 id="禁用状态" tabindex="-1" data-v-a0bd1186>禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;" data-v-a0bd1186>​</a></h2><p data-v-a0bd1186>通过 <code data-v-a0bd1186>disabled</code> 属性指定是否禁用 <code data-v-a0bd1186>input</code> 组件</p>`,3),I={class:"example"},M=n(`<details class="details custom-block" data-v-a0bd1186><summary data-v-a0bd1186>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-a0bd1186><button title="Copy Code" class="copy" data-v-a0bd1186></button><span class="lang" data-v-a0bd1186>vue</span><pre class="shiki github-dark vp-code-dark" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>  &lt;</span><span style="color:#85E89D;" data-v-a0bd1186>mc-input</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>v-model</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>disabled</span><span style="color:#E1E4E8;" data-v-a0bd1186> </span><span style="color:#B392F0;" data-v-a0bd1186>placeholder</span><span style="color:#E1E4E8;" data-v-a0bd1186>=</span><span style="color:#9ECBFF;" data-v-a0bd1186>&quot;disabled&quot;</span><span style="color:#E1E4E8;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#E1E4E8;" data-v-a0bd1186>&lt;/</span><span style="color:#85E89D;" data-v-a0bd1186>template</span><span style="color:#E1E4E8;" data-v-a0bd1186>&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-a0bd1186><code data-v-a0bd1186><span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>  &lt;</span><span style="color:#22863A;" data-v-a0bd1186>mc-input</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>v-model</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;value&quot;</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>disabled</span><span style="color:#24292E;" data-v-a0bd1186> </span><span style="color:#6F42C1;" data-v-a0bd1186>placeholder</span><span style="color:#24292E;" data-v-a0bd1186>=</span><span style="color:#032F62;" data-v-a0bd1186>&quot;disabled&quot;</span><span style="color:#24292E;" data-v-a0bd1186> /&gt;</span></span>
<span class="line" data-v-a0bd1186><span style="color:#24292E;" data-v-a0bd1186>&lt;/</span><span style="color:#22863A;" data-v-a0bd1186>template</span><span style="color:#24292E;" data-v-a0bd1186>&gt;</span></span></code></pre></div></details>`,1),O=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/Form/Input/index.md","filePath":"components/Form/Input/index.md"}'),N={name:"components/Form/Input/index.md"},L=y({...N,setup(R){const s=c(""),p=c("");return v(()=>{console.log("value:",s.value)}),v(()=>{console.log("lazyValue:",p.value)}),(H,a)=>{const o=e("mc-input"),r=e("User"),E=e("Edit");return u(),i("div",null,[F,l("div",g,[l("div",h,[d(o,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=t=>s.value=t),placeholder:"Basic usage"},null,8,["modelValue"])]),l("div",q,[d(o,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=t=>p.value=t),modelModifiers:{lazy:!0},placeholder:"Lazy usage"},null,8,["modelValue"])])]),C,l("div",B,[l("div",f,[d(o,{modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=t=>s.value=t),placeholder:"slots"},{prefix:b(()=>[d(r)]),suffix:b(()=>[d(E)]),_:1},8,["modelValue"])]),l("div",_,[d(o,{modelValue:s.value,"onUpdate:modelValue":a[3]||(a[3]=t=>s.value=t),prefix:"￥",suffix:"RMB",placeholder:"props"},null,8,["modelValue"])])]),k,l("div",D,[l("div",x,[d(o,{modelValue:s.value,"onUpdate:modelValue":a[4]||(a[4]=t=>s.value=t),size:"large",placeholder:"large"},null,8,["modelValue"])]),l("div",A,[d(o,{modelValue:s.value,"onUpdate:modelValue":a[5]||(a[5]=t=>s.value=t),placeholder:"default"},null,8,["modelValue"])]),l("div",V,[d(o,{modelValue:s.value,"onUpdate:modelValue":a[6]||(a[6]=t=>s.value=t),size:"small",placeholder:"small"},null,8,["modelValue"])])]),w,l("div",z,[d(o,{modelValue:s.value,"onUpdate:modelValue":a[7]||(a[7]=t=>s.value=t),"allow-clear":"",placeholder:"input allow  clear"},null,8,["modelValue"])]),U,l("div",P,[d(o,{modelValue:s.value,"onUpdate:modelValue":a[8]||(a[8]=t=>s.value=t),password:"","allow-clear":"",placeholder:"password"},null,8,["modelValue"])]),S,l("div",I,[d(o,{modelValue:s.value,"onUpdate:modelValue":a[9]||(a[9]=t=>s.value=t),disabled:"",placeholder:"disabled"},null,8,["modelValue"])]),M])}}});const Q=m(L,[["__scopeId","data-v-a0bd1186"]]);export{O as __pageData,Q as default};