class CreateBookGenres < ActiveRecord::Migration[7.0]
  def change
    create_table :book_genres do |t|
      t.integer :book_id, null: false
      t.integer :genre_id, null: false

      t.timestamps
    end
  end
end
