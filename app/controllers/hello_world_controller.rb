# frozen_string_literal: true

class HelloWorldController < ApplicationController
  skip_before_action :authenticate_user!
  layout "hello_world"

  def index
    @hello_world_props = { name: "Stranger" }
  end
end
