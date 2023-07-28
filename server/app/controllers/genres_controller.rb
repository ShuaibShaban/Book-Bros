class GenresController < ApplicationController

    # skip_before_action :authorize, only: [:index]
    

    def index
        genre = Genre.all
        render json: genre, status: :ok
    end
end
