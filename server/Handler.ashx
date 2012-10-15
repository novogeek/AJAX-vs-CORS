<%@ WebHandler Language="VB" Class="Handler" %>

Imports System
Imports System.Web
Imports System.IO

Public Class Handler : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim str As String = context.Request.Params("name")
        
        Dim sw As StreamWriter
        Dim strDate As String
        strDate = context.Timestamp
        
        sw = New StreamWriter(context.Server.MapPath("logs.txt"), True)
        sw.WriteLine(strDate + " : " + str)
        
        sw.Flush()
        sw.Close()
        
        context.Response.ContentType = "text/plain"
        context.Response.Write("Hello " + str)
        
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class