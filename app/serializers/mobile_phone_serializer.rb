class MobilePhoneSerializer < ActiveModel::Serializer
  attributes :id, :manufacturer, :model, :model_number, :storage_capacity,
             :manufacturing_year, :color, :price, :created_at, :updated_at
end
