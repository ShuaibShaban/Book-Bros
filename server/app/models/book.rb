class Book < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :book_genres, dependent: :destroy
    has_many :genres, through: :book_genres
    has_many :users, through: :reviews

    validates :title, :author, :description, presence: true
end
