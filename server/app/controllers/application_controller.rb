class ApplicationController < ActionController::API
    include ActionController::Cookies
 rescue_from StandardError, with: :standard_error_finder

    before_action :authorize

    def user
        User.find(session[:uid])
    end

    def authorize
        render json: {error: "Login to proceed"}, status: :unauthorized unless session.include? :uid
    end

    private

    def standard_error_finder(invalid)
        render json: {errors: invalid.message}, status: :unprocessable_entity
    end
end
