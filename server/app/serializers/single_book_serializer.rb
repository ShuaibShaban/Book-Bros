class SingleBookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :cover_image, :author
  has_many :reviews
  has_many :genres
end
