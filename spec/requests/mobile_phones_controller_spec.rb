require 'rails_helper'
require 'devise/jwt/test_helpers'

RSpec.describe Api::V1::MobilePhonesController, type: :request do
  let(:user) { Fabricate(:user) }
  let(:url) { '/api/v1/mobile_phones' }
  let(:headers) do
    {
      'Accept' => 'application/json',
      'Content-Type' => 'application/json'
    }
  end
  let(:auth_headers) { Devise::JWT::TestHelpers.auth_headers(headers, user) }

  context 'when user has permissions' do
    before do
      get url, headers: auth_headers
    end

    it 'returns 200' do
      expect(response).to have_http_status(200)
    end

  end

  context 'when user does not have permissions' do
    before do
      get url, headers: headers
    end

    it 'returns unathorized status' do
      expect(response).to have_http_status(401)
    end
  end
end
