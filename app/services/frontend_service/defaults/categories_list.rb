module FrontendService
  module Defaults
    class CategoriesList
      class << self
        def json
          { categories: prepare_categories }
        end

        def prepare_categories
          Category.all.includes(:subcategories).map do |category|
            prepare_category(category)
          end
        end

        def prepare_category(category)
          {
            name: category.name,
            id: category.id,
            subcategories: prepare_subcategories(category.subcategories)
          }
        end

        def prepare_subcategories(subcategories)
          subcategories.map do |subcategory|
            prepare_subcategory(subcategory)
          end
        end

        def prepare_subcategory(subcategory)
          {
            name: subcategory.name,
            id: subcategory.id
          }
        end
      end
    end
  end
end
