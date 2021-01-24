Rails.application.routes.draw do

  scope '/api/v1' do
    devise_for :users,
      :defaults => {
        :format => :json
      },
      :controllers => {
        :sessions => 'api/v1/sessions'
      }
  end

  namespace :api do
    namespace :v1 do
      resources :mobile_phones, only: %i[index create]
    end
  end

end
