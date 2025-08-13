# HTML Basic
HTML is a text-based approach to describe how contains within HTML files is structured. This markup tells a web
browser how to display text,images and other forms of multimedia on a webpage.It is used to create electronic documents that are displayed on WWW.Each pages contains a series of connections to other pages called hyperlinks.

# HTML Documents
HTML documents is a file contaning hypertext markup language.HTML code is based on tags,or hidden keywords,which provides instructions for formatting the document.Tags tells the processing programs, often web browser,what to do with the text.
![html-structure](/Html%20and%20Css/HTML_Structure.png)

# HTML TAG REFERENCE
There are quite a lot of tags in HTML, and these tags are constantly being jostled about when new versions are released. Following are the major HTML tags.

Basic Structure
```
1.) <!DOCTYPE>:The DTD(Document Type Declaration),this tells your browser which version of HTML you are using.
2.) <html>....</html>
3.) <head>....</head>: Everything between these is mainly used to help your browser and search engines classify your page,optional but recommended.
4.) <title>...</title>: Everything between these tags appear in the blue bar at the top of the screen.
5.) <meta>: Group of tags that give page and creator information specially to the search engines.
6.) <base>: Changes default link target or relative link URL, useful if page is read on another server.
7.) <link>: Allows you to associate style sheets and a favorites icon to your page.
8.) <body>...</body>
```
Links
```
<a>..</a>: Makes the enclosed text or image a hyperlink to another file.
```
LISTS
```
1.) <ol>...</ol>:This tag create an ordered list,where each items is numbered in order.Container Tag.
2.) <ul>...</ul>:This tag create an unordered list,where each items is bulleted.Container Tag.
3.) <li>..</li>: Each list item begins with an li,and they are all placed in either an ol or ul.
4.) <dl>..</dl>: Creates a defination list.
5.) <dt>: Creates a defination term.
6.) <dd>: Creates a defination,which appears below its parent term and indented from the left.
```
MULTIMEDIA
```
1.) <img>
2.) <embed>: This tag adds a multimedia directly into your page,allowing the browser to play it with a plug-in.
3.) <script>...</script>
```
TABLES
```
1.) <table>...</table>: Used to place a table on web page,Container tag.
2.) <caption>...</caption>: It contains caption of the table,the title of sorts.It will appear accross the top unless specified otherwise.This tag shouldnot be contained in a tr or td.
3.) <th>..</th>
4.) <td>..</td>
5.) <thead>...</thead>:It defines the header part of a large table.Wrap the tags around the rows/cells you wish to define as the header.
6.) <tbody>...</tbody>:defines main body of complex table.
7.) <tfoot>...</tfoot>:Wrap this around the footer part of your table.
8.) <colgroup>: It allows to set attributes for the entire column.Each columns has to be defined sequentially.
```

### Frames
```
1.)<frameset>...</frameset>:Starts a new frame layout.When constructing a frame page,no body is used.Container Tag
<frame>->Defines a single frame within a frameset.
2.)<noframes>...</noframes>:If a visitor has an old browser which doesnot support frames you can leave a message or some contents between these tags.
3.)<iframe>...</iframe>:Places an inline or 'floating' frame.This can be used in anywhere on a normal page,ie.it doesnot need to be part of a frameset.
```

# HTML FORM tags
HTML Form is a document which stores information of a user on a webserver using interactive controls.An HTML form contains different kinds of information such as username,password etc.An HTML form facilates the user to enter data that is to be sent to the server for processing.

## FORM ATTRIBUTES
1.) action attribute:specifies the URL of a file that will process the input control when the form is submitted.
```
<form action="">
 First name:<input type="text" name="fname"><br>
 Last name:<input type="text" name="lname"><br>
</form>
```

2.) method attribute:defines the HTTP method for sending form-data to the action URL.Common HTTP method:GET,POST,PUT,PATCH,DELETE.
> Notes on the "get" method:
- This method appends the form data to the URL in name/value pairs.
- There is limit to how much data you can place in URL(varies between browsers).therefore,you canot be sure that all the form-data will be correctly transferred.
- Never use the "get" method to pass the sensitive information.

> Notes on the "post" method
- This method sends the form-data as an HTTP post transaction.
- The post method is more robust and secure then "get" and "post" doesnot have size limitations.

3.) onsubmit attribute:this attribute fires when a form is submitted.
```
<form action="/action_page.php" onsubmit="myFunction()">
  Enter name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>

<script>
function myFunction() {
  alert("The form was submitted");
}
</script>
```

4.) onreset attribute:It executes when the reset is clicked.
```
<form onreset="myFunction()">
  Enter name: <input type="text">
  <input type="reset">
</form>

<script>
function myFunction() {
  alert("The form was reset");
}
</script>
```

5.) enctype attribute:Specifies how the form data should be encoded when submitted to the server(only for forms with method="Post").The formenctype is used with type="Submit".
```
<form method="post"enctype="multipart/form-data">
 first Name:<input type="text" name="fname"><br>
 <input type="submit">
</form>
```

6.) accept-charset attribute:The accept-charset attribute specifies the character encodings that are to be used for the form submission.
```
<form action="/action_page.php" accept-charset="utf-8">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
</form>
```

7.) accept attribute:Specifies the type of file that the server accepts through a file upload.
> Note: The accept attribute can only be used with <input type="file">.
```
<form>
 <input type="file" name="pic" accept="image/jpeg">
 <input type="submit">
</from>
```

8.) target attribute:The target attribute specifies where to open the linked document.
```
<a target="_blank|_self|_parent|_top|framename">
```

9.) autofucus attribute:specifies that the input field should be automatically get focused when the page loads.
```
<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" autofocus><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit">
</form>
```

## Html List 
The types of list that cab be found in HTML are:
- unordered list
- ordered list 
- defination list

1.) unordered list: unordered list has various list item markers:disc,circle,square,none.
```
 <!-- unordered list -->
        <ul type="square">
            <li>Tag</li>
            <li>Element</li>
            <li>Attribute</li>
        </ul>
```

2.) ordered list:

# Html table
Defining tales in Html