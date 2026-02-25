import { Pet } from "./Pet";
import { PetshopService } from "./PetshopServices";

export enum AppointmentStatus {
  PENDING = "PENDING", // 待处理（服务进行中）
  DONE = "DONE", // 服务完成（待支付）
  PENDING_PAYMENT = "PENDING_PAYMENT", // 待支付
  COMPLETED = "COMPLETED", // 已完成（已支付）
  CANCELED = "CANCELED", // 已取消
}

export type Appointment = {
  id: string;
  appointmentTime: Date;
  status: AppointmentStatus;
  pet: Pet;
  service?: PetshopService;
};
