Rails.application.routes.draw do

  scope '/api/v1' do
    devise_for :users,
      :defaults => {
        :format => :json
      },
      :controllers => {
        :sessions => 'api/v1/sessions',
        :passwords => 'api/v1/passwords',
        :confirmations => 'api/v1/confirmations',
        :unlocks => 'api/v1/unlocks'
      }
  end

  namespace :api do
    namespace :v1 do
      #resource to come
    end
  end

end
