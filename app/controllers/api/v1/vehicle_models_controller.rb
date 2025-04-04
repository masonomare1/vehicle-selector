module Api
  module V1
    class VehicleModelsController < ApplicationController
      before_action :set_vehicle_make

      def index
        @vehicle_models = @vehicle_make.vehicle_models

        render json: { data: @vehicle_models }
      end

      private

      def set_vehicle_make
        @vehicle_make = VehicleMake.find(params[:vehicle_make_id])
      end
    end
  end
end
