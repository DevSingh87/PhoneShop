require 'rails_helper'

RSpec.describe MobilePhone, type: :model do
  it { should validate_presence_of(:manufacturer) }
  it { should validate_presence_of(:model) }
  it { should validate_presence_of(:storage_capacity) }
  it { should validate_presence_of(:manufacturing_year) }
  it { should validate_presence_of(:color) }
  it { should validate_presence_of(:price) }

  # To validate numericality
  it { should validate_numericality_of(:manufacturing_year) }
  it { should validate_numericality_of(:price) }
end
