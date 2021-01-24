class Api::V1::ApiController < ActionController::API
  include Pundit

  respond_to :json

  rescue_from JSON::ParserError,
              with: :bad_request_response

  rescue_from Pundit::NotAuthorizedError,
              with: :user_not_authorized

  protected

  def bad_request_response(exception)
    render json: {
      error: exception.message
    }, status: :bad_request
  end

  def user_not_authorized(exception)
    render json: {
      error: "You are not authorized to perform this action."
    }, status: :unauthorized
  end

end
