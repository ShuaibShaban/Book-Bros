Rails.application.routes.draw do
  resources :genres, only: [:index]
  # resources :book_genres
  resources :books
  # resources :reviews, only:[:create]
  # resources :users, only: [:]


# user
  post '/users', to: 'users#create'
  post '/users/login', to: 'users#login'
  get '/users/logout', to: 'users#logout'
  get '/users/checklogin', to: 'users#check_logged_in'
  post '/users/update-password', to: 'users#update_password'
  post '/users/forgot-password', to: 'users#forgot_password'

  # Reviews
post '/books/:book_id/reviews', to: "reviews#create"
get '/books/:book_id/reviews/:id', to: "reviews#show"
get '/books/:book_id/reviews', to: "reviews#index"
delete '/books/:book_id/reviews/:id', to: "reviews#destroy"
put '/books/:book_id/reviews/:id', to: "reviews#update"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
