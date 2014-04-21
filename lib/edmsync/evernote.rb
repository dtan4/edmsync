module Edmsync
  class Evernote
    def initialize(token, sandbox)
      @token = token
      @client = EvernoteOAuth::Client.new(token: @token, sandbox: sandbox)
      @note_store = @client.note_store
    end
  end
end
