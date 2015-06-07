class AddForeignKeyToActivity < ActiveRecord::Migration
  def change
    add_column :activities, :profile_id, :integer
  end
end
