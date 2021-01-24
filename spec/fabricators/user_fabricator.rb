Fabricator(:user) do
  email { Faker::Internet.email }
  password { Faker::Internet.password }

  after_save { |user| user.confirm; }
end

Fabricator(:store_manager, from: :user) do
  after_save { |user| user.add_role :store_manager }
end
