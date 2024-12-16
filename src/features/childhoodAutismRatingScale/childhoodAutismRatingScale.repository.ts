import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ICars } from "src/entities/childhoodAutismRatingScale"; 

@Injectable()
export class childhoodAutismRatingScaleRepository {
  constructor(
    @InjectModel('FunctionalIndependencyMetric') private readonly functionalIndependencyMetricModel: Model<ICars>
  ) {}

  async create(data: ICars): Promise<ICars> {
    return this.functionalIndependencyMetricModel.create(data);
  }

  async findAll(): Promise<ICars[]> {
    return this.functionalIndependencyMetricModel.find();
  }

  async findById(id: string): Promise<ICars> {
    return this.functionalIndependencyMetricModel.findById(id);
  }

  async update(id: string, data: ICars): Promise<ICars> {
    return this.functionalIndependencyMetricModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<ICars> {
    return this.functionalIndependencyMetricModel.findByIdAndDelete(id);
  }
}