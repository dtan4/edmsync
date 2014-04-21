require "dropbox_sdk"

module Edmsync
  class Dropbox
    def initialize(access_token)
      @client = DropboxClient.new(access_token)
    end
  end
end
