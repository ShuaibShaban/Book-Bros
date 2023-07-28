class Review < ApplicationRecord
    belongs_to :user
    belongs_to :book

    validates :title, :content, presence: true
end
