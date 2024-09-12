import http from 'http'
import myDateTime from './date.js'
import getURL from './getURL.js'

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" })
    res.write(myDateTime() + "<br>")
    res.write(getURL.getPath(req)+"<br>")
    res.write(getURL.getParamsURL(req)+"<br>")
    res.write("Hello KTPM0l2l")
    res.end()
  }).listen(8080)
