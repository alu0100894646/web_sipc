<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
  <html>
    <body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">

      <xsl:for-each select="recomendador/comida">
        <div style="background-color:teal;color:white;padding:4px">
          <span style="font-weight:bold">
            <xsl:value-of select="nombre"></xsl:value-of>
          </span>
        </div>
      </xsl:for-each>
    </body>
  </html>
  </xsl:template>
</xsl:stylesheet>