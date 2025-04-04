module Api
  module V1
    class VehicleMakesController < ApplicationController
      def index
        @vehicle_makes = VehicleMake.all

        render json: { data: @vehicle_makes }
      end
    end
  end
end
