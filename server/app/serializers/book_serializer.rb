class BookSerializer < ActiveModel::Serializer
  attributes :id, :author, :title, :description, :cover_image
end
