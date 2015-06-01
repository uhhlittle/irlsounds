class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def index
    render layout: 'application', text: ''
  end
  
  def after_sign_in_path_for(resource)
  if current_user.profile.nil?
    new_profile_path(current_user.profile)
  else
    profile_path(current_user.profile)
  end
end
end
