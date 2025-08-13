<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Students with Score > 70</title>
      </head>
      <body>
        <h2>Students with Score Greater than 70</h2>
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Score</th>
          </tr>
          <xsl:for-each select="students/student[score &gt; 70]">
            <tr>
              <td><xsl:value-of select="name"/></td>
              <td><xsl:value-of select="rollno"/></td>
              <td><xsl:value-of select="score"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>