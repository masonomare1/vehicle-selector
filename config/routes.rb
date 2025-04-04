Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "vehicle_selector#index"

  resources :vehicle_selector

  namespace :api do
    namespace :v1 do
      resources :vehicle_makes do
        resources :vehicle_models
      end
    end
  end
end
