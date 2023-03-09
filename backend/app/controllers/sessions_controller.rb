class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def create
    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: 200
    else
      render json: { errors: ["Username or Password didn't match"]}, status: 422
    end
  end

  def destroy
    session.delete :user_id
  end
end
