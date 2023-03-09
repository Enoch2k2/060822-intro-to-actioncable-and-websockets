class MessagesController < ApplicationController
  skip_before_action :authorize, only: :index
  def index
    messages = Message.all
    render json: messages, status: 200
  end

  def create
    message = current_user.messages.build(message_params)
    if message.save
      render json: message, status: 201
    else
      render json: { errors: message.errors.full_messages }, status: 422
    end
  end

  private
    def message_params
      params.permit(:content)
    end
end
