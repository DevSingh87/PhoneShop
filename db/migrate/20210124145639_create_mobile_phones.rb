class CreateMobilePhones < ActiveRecord::Migration[6.1]
  def change
    create_table :mobile_phones, id: :uuid do |t|
      t.string :manufacturer
      t.string :model
      t.string :model_number
      t.string :storage_capacity
      t.integer :manufacturing_year
      t.string :color
      t.decimal :price

      t.timestamps
    end
  end
end
