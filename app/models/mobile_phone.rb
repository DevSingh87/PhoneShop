class MobilePhone < ApplicationRecord
  validates :manufacturer, :model, :storage_capacity, :manufacturing_year, :color, :price,
            presence: true
  validates :manufacturing_year, :price, numericality: true
end
