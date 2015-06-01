class AddForeignKeyToGenre < ActiveRecord::Migration
  def change
    add_column :genres, :profile_id, :integer
  end
end
