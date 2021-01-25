require 'rails_helper'

RSpec.describe Api::V1::MobilePhonesController, type: :controller do
  before(:each) do
    allow(controller).to receive(:authenticate_user!).and_return(true)
    store_manager = Fabricate(:store_manager)
    controller.stub(:current_user).and_return store_manager
    @mobile_phone = Fabricate(:mobile_phone)
  end

  describe 'GET index' do
    it 'renders in the list of mobile phone' do
      get :index
      expect(response).to have_http_status(:success)
      hash_body = JSON.parse(response.body)
      expect(hash_body["mobile_phones"].count).to eq(1)
      expect(hash_body["mobile_phones"][0]["manufacturer"]).to eq(@mobile_phone.manufacturer)
    end
  end

  describe 'POST #create' do
    context 'valid mobile_phone_params' do
      it "creates a mobile phone inventory successfully" do
        expect {
          post :create,
          params: {
             mobile_phone: {
               manufacturer: 'Apple Inc.',
               model: "7 Plus",
               storage_capacity: "32GB",
               manufacturing_year: "2018",
               color: "Gold",
               price: "35000"
             }
          }
        }.to change{MobilePhone.count}.by(1)
        expect(response).to have_http_status(200)
        expect(JSON.parse(response.body)["manufacturer"]).to eq('Apple Inc.')
      end
    end

    context 'invalid mobile_phone_params' do
      it "it doesn't create a mobile phone inventory and give a validation error message" do
        expect {
          post :create,
          params: {
             mobile_phone: {
               manufacturer: '',
               model: "7 Plus",
               storage_capacity: "32GB",
               manufacturing_year: "2018",
               color: "Gold",
               price: "35000"
             }
          }
        }.to change{MobilePhone.count}.by(0)
        expect(response).to have_http_status(200)
        expect(JSON.parse(response.body)[0]).to eq("Manufacturer can't be blank")
      end
    end
  end
end
