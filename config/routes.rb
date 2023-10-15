Rails.application.routes.draw do
  root to: "pages#home"
  get 'AloysiusHon/download', to: 'aloysius_hon#download_resume'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
