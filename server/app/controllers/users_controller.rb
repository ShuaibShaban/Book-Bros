class UsersController < ApplicationController
    skip_before_action :authorize, only: [:login, :create, :check_logged_in, :forgot_password]


    def create
      new_user = User.create!(user_params)
        render json: new_user, status: :created
    end

    def login
        found_user = User.find_by(username: params[:username])
        if found_user&.authenticate(params[:password])
            session[:uid] = found_user.id
            render json: {message: "Logged in successfully", info: found_user.id}, status: :ok
        else
            render json: {message: "Invalid username or password"}, status: :unauthorized
        end
    end

    def logout
        session.delete :uid
        render json: {message: "Logged out successfully"}, status: :ok
    end

    def update_password
        user.update!(password: params[:password])
        render json: {message: "Password updated successfully"}, status: :ok
    end

    def forgot_password
        forgoten_user = User.find_by(username: params[:username])
        if forgoten_user
            forgoten_user.update!(password: params[:password])
            render json: {message: "Password updated successfully"}, status: :ok
        else
            render json: {message: "User not found"}, status: :not_found
        end
    end

    def check_logged_in
        if session.include? :uid
            render json: user, status: :ok
        else
            render json: {message: "You are not logged in"}, status: :unauthorized
        end
    end



    private
    def user_params
        params.permit(:username, :password, :email, :profile_image)
    end


end
