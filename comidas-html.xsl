<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
  <html>
    <body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">

      <xsl:for-each select="recomendador/comida">
        <xsl:sort select="nombre"/>
        <div style="background-color:teal;color:white;padding:4px">
          <span style="font-weight:bold">
            <xsl:value-of select="nombre"></xsl:value-of>
          </span>
        </div>
      </xsl:for-each>
      <xsl:for-each select="recomendador/comida">
          <div style="background-color:teal;color:white;padding:4px">
          <span style="font-weight:bold">
            <xsl:if test="calorias &gt; 10">
                <ul>
                  <li>
                    <xsl:value-of select="nombre"/>
                  </li>
                  <li>
                    <xsl:value-of select="ingredientes"/>
                  </li>
                </ul>
              </xsl:if>
           </span>
        </div> 
      </xsl:for-each>

      <xsl:apply-templates/>
    </body>
  </html>
  </xsl:template>
  <xsl:template match="comidas">
    <p>
      <xsl:apply-templates select="nombre"/>
      <xsl:apply-templates select="tiempo"/>
    </p>
  </xsl:template>
  <xsl:template match="nombre">
    Receta: <span style="color:#ff0000">
      <xsl:value-of select="."/>
    </span>
    <br/>
  </xsl:template>
  <xsl:template match="tiempo">
    Tiempo para realizar la receta: <span style="color:#00ff00">
      <xsl:value-of select="."/>
      <br></br>
    </span>
  </xsl:template>
</xsl:stylesheet>

