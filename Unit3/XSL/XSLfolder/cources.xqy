for $x in doc("cources.xml")/cources/cource
where $x/fees>5000
return $x/title
