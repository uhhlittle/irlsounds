class GenresController < ApplicationController
  def index
    @genres = Genre.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @genres }
    end
  end

  def show
    @genre = Genre.find(params[:id])
    render json: @genre
  end

  def create
    Rails.logger.info(params)
    @genre = Genre.create(genre_params)
    render json: @genre
  end

  def update
    @genre = Genre.find(params[:id])
    @genre.update(genre_params)
    render json: @genre
  end

  def destroy
    @genre = Genre.find(params[:id])
    @genre.destroy
    render nothing: true
  end

private
def genre_params
  return params[:genre].permit(:id, :name, :activity)
end
end
