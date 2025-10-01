<%@ Language=VBScript %>
<%
Response.Buffer = True 
Dim objXMLHTTP, xml, command, aicc_loc, version, session_id, aicc_data, postbody 
 
'get passed params depending on method sent' 
if(Request.Querystring("aicc_loc") <> "") then 
aicc_loc=Request.Querystring("aicc_loc") 
command=Request.Querystring("command") 
version=Request.Querystring("version") 
session_id=Request.Querystring("session_id") 
aicc_data=Request.Querystring("aicc_data") 
else 
aicc_loc=Request.form("aicc_loc") 
command=Request.form("command") 
version=Request.form("version") 
session_id=Request.form("session_id") 
aicc_data=Request.form("aicc_data") 
end if 
 
' Build the post body string' 
postbody = "command=" + Server.URLEncode(command) + "&version=" + Server.URLEncode(version) + "&session_id=" + Server.URLEncode(session_id)
if aicc_data <> "" then 
postbody = postbody + "&aicc_data=" + Server.URLEncode(aicc_data)
end if 
 
' Create an xmlhttp object:' 
Set xml = Server.CreateObject("Microsoft.XMLHTTP") 
' Or, for version 3.0 of XMLHTTP, use:' 
' Set xml = Server.CreateObject("MSXML2.ServerXMLHTTP")' 
 
' Opens the connection to the remote server.' 
xml.Open "POST", aicc_loc, False 
xml.setRequestHeader "Content-Type", "application/x-www-form-urlencoded" 
 
'Actually Sends the request and returns the data:' 
xml.Send postbody 
 
'Send back the response' 
Response.Write xml.responseText 
 
Set xml = Nothing 
%>
