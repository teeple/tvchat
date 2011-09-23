set :application, "tvchat"

default_run_options[:pty] = true
set :repository,  "git@github.com:teeple/tvchat.git"

set :scm, :git
set :user, 'newbiz.uangel@gmail.com'
set :scm_passphrase, 'teeple'
set :branch, 'master'
set :deploy_via, :remote_cache
#set :scm_username, 'newbiz.uangel@gmail.com'
#set :scm_password, 'newbiz.123'

# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "your web-server here"                          # Your HTTP server, Apache/etc
role :app, "your app-server here"                          # This may be the same as your `Web` server
role :db,  "your primary db-server here", :primary => true # This is where Rails migrations will run
role :db,  "your slave db-server here"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end
