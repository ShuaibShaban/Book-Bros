class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.text :description
      t.string :cover_image, default: "https://static.vecteezy.com/system/resources/previews/008/659/112/original/eps10-grey-book-or-diary-solid-icon-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"
      t.timestamps
    end
  end
end
