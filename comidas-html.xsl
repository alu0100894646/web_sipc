<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
  <html>
    <body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">
      
      <xsl:for-each select="recomendador/comida">
        <!--Ordenación a través de los nombres de las recetas-->
        <xsl:sort select="nombre"/> 
          <div style="background-color:teal;color:white;padding:4px">
          <span style="font-weight:bold">
            <!-- Utilizzación del condicional para que solo se muestren aquellas recetas cuyas calorías sean mayores que 10-->
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
          <div style="background-color:teal;color:white;padding:4px">
          <span style="font-weight:bold">
      <xsl:apply-templates/>
        </span>
        </div>
    </body>
  </html>
  </xsl:template>
<!-- Uso de plantillas-->
  <xsl:template match="recomendador/comida">
    
    <!-- Aplicación de las plantillas para que muestren el nombre, el timpo y las calorias en diferentes colores-->
    <xsl:apply-templates select="nombre"/>
    <xsl:apply-templates select="tiempo"/>
    <xsl:apply-templates select="calorias"/>
     </xsl:template>
  

  <xsl:template match="nombre">
    <!-- Uso de plantilla para mostrar el nombre de las recetas en mayusuculas-->
    <xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" /> 
    <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" /> 
     
    Receta: <span style="color:#D04444">
      <xsl:value-of select="translate(., $smallcase, $uppercase)"/>
    </span>
    <br/>
  </xsl:template>
  <xsl:template match="tiempo">
    Tiempo para realizar la receta: <span style="color:#071808">
      <xsl:value-of select="."/>
      <br></br>
    </span>
  </xsl:template>
  <xsl:template match="calorias">
      Kcal: <span style="color:#3CAC3F">
      <xsl:value-of select="."/>
    </span>
    <br/>

  </xsl:template>
</xsl:stylesheet>


