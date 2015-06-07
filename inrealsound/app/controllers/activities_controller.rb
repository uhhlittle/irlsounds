class ActivitiesController < ApplicationController
  def index
    @activities = Activity.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @activities }
    end
  end

  def show
    @activity = Activity.find(params[:id])
    render json: @activity
  end

  def create
    Rails.logger.info(params)
    @activity = Activity.create(activity_params)
    render json: @activity
  end

  def update
    @activity = Activity.find(params[:id])
    @activity.update(activity_params)
    render json: @activity
  end

  def destroy
    @activity = Activity.find(params[:id])
    @activity.destroy
    render nothing: true
  end

private
def activity_params
  return params[:activity].permit(:name, :duration)
end
end
