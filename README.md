# Implementation Details
In this project I have kept backend and frontend separate so that it will be easy to maintain for both backend and fronted team. I have created API only rails applicaiton which communicates with a React app on different ports. And I have written unit tests using Rspec to make my code error-free.

I have used the following gems for different purposes:

- `devise` and `devise-jwt` for JWT based authentication.
- `pundit` and `rolify` for role based authorization.
- `will_paginate` for pagination.

# How application looks at fronend side
- Login Page
<img width="311" alt="Screenshot 2021-01-20 at 3 51 27 AM" src="https://user-images.githubusercontent.com/3329134/105737394-e430d400-5f5b-11eb-93e7-a7da68dc44c5.png">

- Mobile Phone Inventory List Page

<img width="311" alt="Screenshot 2021-01-20 at 3 51 27 AM" src="https://user-images.githubusercontent.com/3329134/105738134-b9934b00-5f5c-11eb-8be6-23b7ecd06600.png">

- Mobile Phone Inventory Creation Page

<img width="311" alt="Screenshot 2021-01-20 at 3 51 27 AM" src="https://user-images.githubusercontent.com/3329134/105738592-31fa0c00-5f5d-11eb-8ffc-2e80265d1ccb.png">

# How to run project locally
**Backend**
- clone repo and rename it.

- `cd renamed_folder_name`.
- `git checkout challenge`
- Do `bundle install`
- `rake db:create`
- `rake db:migrate`
- `rake db:seed` for creating default roles - Business Owner, Store Manager and Assistant.
- Login to rails console `rails c`
- Create three different users

  `user1 = User.create(email: 'your_first_email', password: 'your_password', password_confirmation: 'your_password')`
  `user1.add_role :business_owner`

  `user2 = User.create(email: 'your_second_email', password: 'your_password', password_confirmation: 'your_password')`
  `user2.add_role :store_manager`

  `user3 = User.create(email: 'your_third_email', password: 'your_password', password_confirmation: 'your_password')`
  `user3.add_role :assistant`
- Exit from rails console
- start server `rails s -p 3001`

**Frontend**
I have kept the frontend in the root directory of the project.

- Open new terminal and be in root directory only.
- `cd frontend`
- Install dependencies `npm install`
- run `npm start`. It will run on port 3000.
