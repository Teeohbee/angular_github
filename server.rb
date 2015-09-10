require 'sinatra'

# set :public_folder, proc { File.join(root) }

get '/' do
  send_file 'public/index.html'
end
