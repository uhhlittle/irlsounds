class ProfilesController < ApplicationController
# def show
#   @profile = Profile.find(params[:id])
# end

def show
  @profile = Profile.find(params[:id])

end

def new
  @profile = Profile.new
end

def create
  @profile = current_user.create_profile(profile_params)
  redirect_to profile_path(@profile)
end


def edit
  @profile = current_user.profile
end

def update
  @profile = current_user.profile
  @profile.update(profile_params)
  redirect_to profile_path(@profile)
end


  private

  def profile_params
    return params[:profile].permit(:user_id, :name, :location, :dob)
  end


end
