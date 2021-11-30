class Fact < ApplicationRecord
  validates :text, presence: :true
  validates :stars, numericality: :true
end
