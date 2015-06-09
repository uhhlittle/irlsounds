class AddColumnToGenre < ActiveRecord::Migration
  def change
    add_column :genres, :activity, :string
  end
end
