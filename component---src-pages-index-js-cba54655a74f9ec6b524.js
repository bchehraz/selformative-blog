webpackJsonp([35783957827783],{233:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=a(1),l=n(r),d=a(20),o=n(d),u=a(16),i=n(u);a(54);var f={container:{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"90vw",margin:"0 auto",justifyContent:"space-between"},blogListingContainer:{maxWidth:"980px",flex:1}},m=function(e){var t=e.data;console.log(t);var a=t.allMarkdownRemark.edges;return l.default.createElement("div",{style:f.container},a.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e,t){var a=e.node,n=a.frontmatter.title;return 0===t?l.default.createElement("div",{className:"blog-post-preview-main",style:f.blogListingContainer,key:a.id},l.default.createElement("h1",null,l.default.createElement(o.default,{to:a.frontmatter.path},n)),l.default.createElement("h2",null,a.frontmatter.date),l.default.createElement(i.default,{sizes:a.frontmatter.featuredImage.childImageSharp.sizes}),l.default.createElement("p",{dangerouslySetInnerHTML:{__html:a.excerpt}})):l.default.createElement("div",{className:"blog-post-preview",style:f.blogListingContainer,key:a.id},l.default.createElement("h1",null,l.default.createElement(o.default,{to:a.frontmatter.path},n)),l.default.createElement("h2",null,a.frontmatter.date),l.default.createElement(i.default,{sizes:a.frontmatter.featuredImage.childImageSharp.sizes}),l.default.createElement("p",{dangerouslySetInnerHTML:{__html:a.excerpt}}))}))};t.default=m;t.pageQuery="** extracted graphql fragment **"},54:function(e,t){}});
//# sourceMappingURL=component---src-pages-index-js-cba54655a74f9ec6b524.js.map