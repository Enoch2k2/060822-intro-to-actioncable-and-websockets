class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  has_many :messages, dependent: :destroy

  has_secure_password
end
