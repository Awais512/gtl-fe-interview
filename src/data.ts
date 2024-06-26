import { Result } from "./columns";

export enum Quality {
  High = "high",
  Medium = "medium",
  Low = "low",
}

// // The numbering represents the order the events are expected to occur,
// // First is the baseline, then the follow-up, and finally the conclusion.
// // All event's may not be present, but when they are, the earlier event will always be present.
export enum Event {
  Baseline = "Baseline",
  FollowUp = "FollowUp",
  Conclusion = "Conclusion",
}

// please do not edit the data, unless to add further examples
export const data: Result[] = [
  {
    patientId: "87gd2",
    scannedAt: new Date("2021-08-03T12:00:00Z"),
    score: 0.81,
    event: Event.FollowUp,
    sampleQuality: Quality.Low,
    dateOfBirth: "1990-01-01",
  },
  {
    patientId: "87gd2",
    scannedAt: new Date("2021-08-01T12:00:00Z"),
    score: 0.92,
    event: Event.Baseline,
    sampleQuality: Quality.High,
    dateOfBirth: "1990-01-01",
  },
  {
    patientId: "87gd2",
    scannedAt: new Date("2021-08-08T12:00:00Z"),
    score: 0.43,
    event: Event.Conclusion,
    sampleQuality: Quality.Low,
    dateOfBirth: "1990-01-01",
  },
  {
    patientId: "js27h",
    scannedAt: new Date("2021-08-02T12:00:00Z"),
    score: 0.74,
    event: Event.Baseline,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1993-02-12",
  },
  {
    patientId: "9782e",
    scannedAt: new Date("2021-08-03T12:00:00Z"),
    score: 0.25,
    event: Event.Baseline,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1981-04-12",
  },
  {
    patientId: "9782e",
    scannedAt: new Date("2021-08-21T12:00:00Z"),
    score: 0.21,
    event: Event.FollowUp,
    sampleQuality: Quality.High,
    dateOfBirth: "1981-04-12",
  },
];
