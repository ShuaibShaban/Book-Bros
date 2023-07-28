class BooksController < ApplicationController

  # skip_before_action :authorize, only: [:index]

wrap_parameters format: []

    rescue_from ActiveRecord::RecordInvalid, with: :not_valid_book
   
     def index
       all_books = Book.all
       render json: all_books, status: :ok
     end
   
     # GET /books/1
     def show
       render json: book,serializer: SingleBookSerializer,  status: :ok
     end
   
     # POST /books
     def create
       new_book = Book.create!(book_params)
      genres = params[:genre_id]
      genres.each do |genre|
        new_book.book_genres.create({genre_id: genre})
      end

       render json: new_book, status: :created
     end
   
   #   PATCH/PUT /books/1
     def update
       book.update!(book_params)
       render json: book
     end
   
     # DELETE /books/1
     def destroy
       book.destroy
       render json: {}, status: :no_content
     end
   
     private
       # Use callbacks to share common setup or constraints between actions.
       def book
         book = Book.find(params[:id])
       end
   
       # Only allow a list of trusted parameters through.
       def book_params
         params.permit(:title, :author, :description, :cover_image)
       end
   
       def not_valid_book(invalid)
           render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
       end
   
   end
   