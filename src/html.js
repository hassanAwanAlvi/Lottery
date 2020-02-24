import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
       <meta property="og:title" content="QUINIELA: 🆁🅴🆂🆄🅻🆃🅰🅳🅾🆂 - Al Instante - Resultados de Quiniela" /> 
       <meta property="og:image" content="https://www.quinielashoy.com/icons/qbg2.png" />

<script>var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(194283);</script>
<script async src="//static.getclicky.com/js"></script>


        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <script>
        {`
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-8834976657992551",
            enable_page_level_ads: true
        });
        `}
       </script>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
