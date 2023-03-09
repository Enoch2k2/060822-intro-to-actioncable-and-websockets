class Message < ApplicationRecord
  belongs_to :user

  after_create_commit { broadcast_message }

  private

    def broadcast_message
      ActionCable.server.broadcast("MessagesChannel", self.to_json(include: :user))
    end
end
