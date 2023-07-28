class ReviewsController < ApplicationController
    def create
        review = user.reviews.create!(reviews_params)
        render json: review, status: :ok
    end

    def show
        review = user.reviews.find_by(id: params[:id])
        if review
            render json: review
        else
            render json: {error: "No such review"}, status: :not_found
        end
    end

    # Get all reviews
    def index
        book = Book.find(params[:book_id])
        reviews = book.reviews
        if reviews
            render json: reviews, status: :ok
        else
            render json: {error: "this book has no reviews"}
        end

        rescue ActiveRecord::RecordNotFound => e
            render json: {error: "Book does not exist"}

    end

    #update a review
    def update
        review = user.reviews.find_by(id: params[:id])
        if review
            review.update!(reviews_params)
            render json: review
        else
            render json: {error: "review not found"}, status: :not_found
        end
    end

    #delete an individual review
    def destroy
        review = user.reviews.find_by(id: params[:id])
        if review
            review.destroy
            head :no_content
        else
            render json: {error: "review not found"}, status: :not_found
        end
    end

    private
    def reviews_params
        params.permit(:title, :content, :book_id)
    end
end
