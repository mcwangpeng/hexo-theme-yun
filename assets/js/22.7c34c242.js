(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{411:function(e,t,o){"use strict";o.r(t);var s=o(27),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"faq"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("ul",[o("li",[o("Badge",{attrs:{text:"dev",vertical:"middle"}}),e._v(" Only related to development.\n")],1)])]),e._v(" "),o("p",[e._v("Questions and suggestions are welcome at "),o("a",{attrs:{href:"https://github.com/YunYouJun/hexo-theme-yun/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Discussions and presentation are welcome at "),o("a",{attrs:{href:"https://github.com/YunYouJun/hexo-theme-yun/discussions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discussions"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("blockquote",[o("p",[e._v("If it is a general problem (such as BUG feedback, new feature suggestions), it is best to give feedback in the Issue, so that other people can participate in the discussion and reduce duplication.")])]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"self-checking-common-problem-solution"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#self-checking-common-problem-solution"}},[e._v("#")]),e._v(" Self-checking Common Problem Solution")]),e._v(" "),o("p",[e._v("Check if the file or warehouse name is right.")]),e._v(" "),o("p",[e._v("Check if the "),o("code",[e._v("url")]),e._v(" under "),o("code",[e._v("_config.yml")]),e._v(" in the "),o("code",[e._v("Hexo")]),e._v(" working directory is set correctly. (This part is automatically generated when Hexo is initialized)")]),e._v(" "),o("div",{staticClass:"language-yaml extra-class"},[o("pre",{pre:!0,attrs:{class:"language-yaml"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If your site is put in a subdirectory")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# set url as 'https://yoursite.com/child' and root as '/child/'")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("url")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" https"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//www.yunyoujun.cn\n"),o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("root")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /\n")])])]),o("p",[e._v("Check whether the theme configurations are done in the "),o("code",[e._v("yun.yml")]),e._v(" file and has been saved.\nCheck whether the following steps have been performed:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("hexo clean")]),e._v(": clear the local cache")]),e._v(" "),o("li",[o("code",[e._v("hexo g")]),e._v(": generate a new static file")]),e._v(" "),o("li",[o("code",[e._v("hexo s")]),e._v(": local viewing effect (if normal, use "),o("code",[e._v("hexo d")]),e._v(" to redeploy)")])]),e._v(" "),o("p",[e._v("Check whether the local browser cache have been forcibly refreshed (Windows: "),o("code",[e._v("Ctrl + F5")]),e._v(", Mac: "),o("code",[e._v("Shift + Cmd + R")]),e._v(").")]),e._v(" "),o("p",[e._v("Check if it is the latest version.")]),e._v(" "),o("p",[e._v("If you still have problems, you can push your project code as a Hexo branch to GitHub.")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://www.yunyoujun.cn/share/how-to-build-your-site/#%E4%B8%8E%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E5%BB%BA%E7%AB%8B%E5%85%B3%E8%81%94",target:"_blank",rel:"noopener noreferrer"}},[e._v("Associate with remote warehouse"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Use the GitHub source file address to ask questions by "),o("a",{attrs:{href:"https://github.com/YunYouJun/hexo-theme-yun/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISSUE"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://github.com/YunYouJun/hexo-theme-yun/discussions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discussions"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"hexo-server-the-article-only-renders-part-of-the-content"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hexo-server-the-article-only-renders-part-of-the-content"}},[e._v("#")]),e._v(" "),o("code",[e._v("hexo server")]),e._v(" :The article only renders part of the content "),o("Badge",{attrs:{text:"dev"}})],1),e._v(" "),o("p",[e._v("In the process of developing the theme, I found that only a part of a long article can be rendered, and the second half cannot be displayed normally.\nAt first, I thought it was a problem of "),o("code",[e._v("hexo-renderer-pug")]),e._v(". After a day of tossing around, I finally discovered that it seemed to be a problem of "),o("code",[e._v("hexo-browsersync")]),e._v(" during development.")]),e._v(" "),o("p",[e._v("Related Issue: "),o("a",{attrs:{href:"https://github.com/hexojs/hexo-browsersync/issues/15",target:"_blank",rel:"noopener noreferrer"}},[e._v("Problem with long pages"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"temporary-solution"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#temporary-solution"}},[e._v("#")]),e._v(" Temporary Solution")]),e._v(" "),o("p",[e._v("Set the following in the root directory of "),o("code",[e._v("_config.yml")])]),e._v(" "),o("div",{staticClass:"language-yaml extra-class"},[o("pre",{pre:!0,attrs:{class:"language-yaml"}},[o("code",[o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("server")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  compress"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n")])])]),o("blockquote",[o("p",[o("a",{attrs:{href:"https://github.com/hexojs/hexo-browsersync/issues/15#issuecomment-573492492",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/hexojs/hexo-browsersync/issues/15#issuecomment-573492492"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);