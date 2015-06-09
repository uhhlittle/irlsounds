class Profile < ActiveRecord::Base
  belongs_to :user
  has_many :genres
  has_many :activities
end
