class Defaults::CreateController < ApplicationController
  def create
    render json: { status: 'ok' }
  end

  private
end
