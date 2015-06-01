class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :location
      t.date :dob

      t.timestamps null: false
    end
  end
end
