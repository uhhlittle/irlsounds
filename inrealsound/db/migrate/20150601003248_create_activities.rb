class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.integer :profile_id
      t.string :name
      t.integer :duration

      t.timestamps null: false
    end
  end
end
