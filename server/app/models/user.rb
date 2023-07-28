class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :books, through: :reviews

    validates :username, :password, :email, presence: true
    validates :password, length: {minimum: 5}
end
