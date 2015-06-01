class Genre < ActiveRecord::Base
  belongs_to :profile
  has_many
end
