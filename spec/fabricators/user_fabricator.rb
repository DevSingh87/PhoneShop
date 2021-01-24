Fabricator(:user) do
  email { Faker::Internet.email }
  password { Faker::Internet.password }

  after_save { |user| user.confirm; }
end
