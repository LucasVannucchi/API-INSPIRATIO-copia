import { Injectable } from "@nestjs/common";
import { childhoodAutismRatingScaleRepository } from "./childhoodAutismRatingScale.repository";

@Injectable()
export class childhoodAutismRatingScaleService {
  constructor(
    private readonly childhoodAutismRatingscaleRepository: childhoodAutismRatingScaleRepository
  ) {}

  async create(data: any) {
    return this.childhoodAutismRatingscaleRepository.create(data);
  }

  async findAll() {
    return this.childhoodAutismRatingscaleRepository.findAll();
  }

  async findById(id: string) {
    return this.childhoodAutismRatingscaleRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.childhoodAutismRatingscaleRepository.update(id, data);
  }

  async delete(id: string) {
    return this.childhoodAutismRatingscaleRepository.delete(id);
  }
}