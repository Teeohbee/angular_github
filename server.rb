require 'sinatra'

# set :public_folder, proc { File.join(root) }

APIKEY = ENV['GITHUB_API_SECRET']

get '/' do
  send_file 'public/index.html'
end

get '/key' do
  { access_token: APIKEY }.to_json
end
