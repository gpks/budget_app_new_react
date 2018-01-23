Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  devise_for :users
  root 'home#index'
  get 'defaults', to: 'defaults/new#new'
  post 'defaults', to: 'defaults/create#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

