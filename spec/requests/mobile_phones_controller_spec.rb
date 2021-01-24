require 'rails_helper'
require 'devise/jwt/test_helpers'

RSpec.describe Api::V1::MobilePhonesController, type: :request do
  describe 'GET /api/v1/mobile_phones' do
    let(:user) { Fabricate(:user) }
    let(:store_manager) { Fabricate(:store_manager) }
    let(:url) { '/api/v1/mobile_phones' }
    let(:headers) do
      {
        'Accept' => 'application/json',
        'Content-Type' => 'application/json'
      }
    end
    let(:auth_headers) { Devise::JWT::TestHelpers.auth_headers(headers, user) }
    let(:store_manager_auth_headers) { Devise::JWT::TestHelpers.auth_headers(headers, store_manager) }

    context 'when store_manager is logged in' do
      before do
        get url, headers: store_manager_auth_headers
      end

      it 'returns 200' do
        expect(response).to have_http_status(200)
      end

    end

    context 'when normal user is logged in' do
      before do
        get url, headers: auth_headers
      end

      it 'returns 401 unauthorized' do
        expect(response).to have_http_status(401)
      end
    end

    context 'when no user is not logged in' do
      before do
        get url, headers: headers
      end

      it 'returns 401 unauthorized' do
        expect(response).to have_http_status(401)
      end
    end
  end

  describe 'POST /api/v1/mobile_phones' do
    let(:user) { Fabricate(:user) }
    let(:store_manager) { Fabricate(:store_manager) }
    let(:url) { '/api/v1/mobile_phones' }
    let(:headers) do
      {
        'Accept' => 'application/json',
      }
    end
    let(:auth_headers) { Devise::JWT::TestHelpers.auth_headers(headers, user) }
    let(:store_manager_auth_headers) { Devise::JWT::TestHelpers.auth_headers(headers, store_manager) }

    let(:params) {
      {
        mobile_phone: {
          manufacturer: 'Apple Inc.',
          model: "7 Plus",
          storage_capacity: "32GB",
          manufacturing_year: "2018",
          color: "Gold",
          price: "35000"
          }
        }
      }

    context 'when store_manager is logged in' do
      before do
        post url, params: params, headers: store_manager_auth_headers
      end

      it 'returns 200' do
        expect(response).to have_http_status(200)
      end

    end

    context 'when normal user is logged in' do
      before do
        post url, params: params, headers: auth_headers
      end

      it 'returns 401 unauthorized' do
        expect(response).to have_http_status(401)
      end
    end

    context 'when no user is not logged in' do
      before do
        post url, params: params, headers: headers
      end

      it 'returns 401 unauthorized' do
        expect(response).to have_http_status(401)
      end
    end
  end

end
