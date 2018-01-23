class Defaults::NewController < ApplicationController
  def new
    render locals: { data: data }
  end

  private

  def data
    categories_lists.merge(submit: defaults_path )
  end

  def categories_lists
    ::FrontendService::Defaults::CategoriesList.json
  end
end
