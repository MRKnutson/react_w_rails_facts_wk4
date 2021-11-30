class Api::FactsController < ApplicationController
  before_action :set_fact, only: [:show, :destroy, :update]

  # get "/api/facts"
  def index
    # when working with axios, what we render is going to come back as res.data (res is a variable name in JS)
    # let res = axios.get('/api/facts')
    render json: Fact.all
  end

  # get "/api/facts/:id"
  def show
    render json: @fact
  end

  # post "/api/facts"
  def create
    @fact = Fact.new(fact_params)
    if (@fact.save)
      render json: @fact
    else
      render json: {errors: @fact.errors}, status: :unprocessable_entity
    end
  end

  # put/patch "/api/facts/:id"
  def update
    if (@fact.update(fact_params))
      render json: @fact
    else
      render json: {errors: @fact.errors}, status: :unprocessable_entity
    end
  end

  # delete "/api/facts/:id"
  def destroy
    render json: @fact.destroy
  end

  private
  def fact_params
    params.require(:fact).permit(:text, :stars, :source, :username)
  end

  def set_fact
    @fact = Fact.find(params[:id])
  end
end
