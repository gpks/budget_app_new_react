class HomeController < ApplicationController
  before_action :check_defaults
  def index
  end

  private

  def check_defaults
    if current_user.subcategories.empty?
      redirect_to defaults_path
    end
  end
end
