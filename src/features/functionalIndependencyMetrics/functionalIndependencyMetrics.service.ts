import { Injectable } from "@nestjs/common";
import { FunctionalIndependencyMetricsRepository } from "./functionalIndependencyMetrics.repository";

@Injectable()
export class FunctionalIndependencyMetricsService {
  constructor(
    private readonly functionalIndependencyMetricsRepository: FunctionalIndependencyMetricsRepository
  ) {}

  async create(data: any) {
    return this.functionalIndependencyMetricsRepository.create(data);
  }

  async findAll() {
    return this.functionalIndependencyMetricsRepository.findAll();
  }

  async findById(id: string) {
    return this.functionalIndependencyMetricsRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.functionalIndependencyMetricsRepository.update(id, data);
  }

  async delete(id: string) {
    return this.functionalIndependencyMetricsRepository.delete(id);
  }
}