import{g as u}from"./index-mAeaCUKd.js";function d(e,a){for(var o=0;o<a.length;o++){const t=a[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const s=Object.getOwnPropertyDescriptor(t,r);s&&Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,l;function f(){if(l)return n;l=1,n=e,e.displayName="wasm",e.aliases=[];function e(a){a.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/}}return n}var i=f();const c=u(i),p=d({__proto__:null,default:c},[i]);export{p as w};
//# sourceMappingURL=wasm-XGBfNugC.js.map
