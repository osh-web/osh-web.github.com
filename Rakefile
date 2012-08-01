# -*- coding: utf-8 -*-
require 'webrick'

desc 'serverを起動する port:8000'

task :preview do
  server = WEBrick::HTTPServer.new(
    Port: 8000,
    DocumentRoot: Dir::pwd
  )
  trap("INT") { server.shutdown }
  server.start
end
