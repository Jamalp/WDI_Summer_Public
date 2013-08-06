AjaxTodo::Application.routes.draw do
	# STEP 4 - Create routes required for TasksController
  root to: 'tasks#index', as: 'home'
  post '/create' => 'tasks#create'
  delete '/destroy/:id' => 'tasks#destroy'
  put '/complete/:id' => 'tasks#complete'
end
