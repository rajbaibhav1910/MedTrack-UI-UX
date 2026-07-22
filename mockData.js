export const medications = [
  {
    id: 'med-1',
    name: 'Metformin',
    dose: '500mg',
    form: 'tablet',
    schedule: ['08:00', '20:00'],
    color: 'accent',
    refillDate: '2026-08-02',
    daysLeft: 13,
    condition: 'Type 2 diabetes',
  },
  {
    id: 'med-2',
    name: 'Lisinopril',
    dose: '10mg',
    form: 'tablet',
    schedule: ['08:00'],
    color: 'primary',
    refillDate: '2026-08-14',
    daysLeft: 25,
    condition: 'Blood pressure',
  },
  {
    id: 'med-3',
    name: 'Atorvastatin',
    dose: '20mg',
    form: 'tablet',
    schedule: ['21:00'],
    color: 'success',
    refillDate: '2026-07-25',
    daysLeft: 5,
    condition: 'Cholesterol',
  },
  {
    id: 'med-4',
    name: 'Vitamin D3',
    dose: '2000 IU',
    form: 'softgel',
    schedule: ['08:00'],
    color: 'alert',
    refillDate: '2026-09-01',
    daysLeft: 43,
    condition: 'Supplement',
  },
]

// 7-day adherence grid: true = taken, false = missed, null = upcoming
export const weekAdherence = {
  Mon: { 'med-1': true, 'med-2': true, 'med-3': true, 'med-4': true },
  Tue: { 'med-1': true, 'med-2': true, 'med-3': true, 'med-4': true },
  Wed: { 'med-1': true, 'med-2': false, 'med-3': true, 'med-4': true },
  Thu: { 'med-1': true, 'med-2': true, 'med-3': true, 'med-4': false },
  Fri: { 'med-1': true, 'med-2': true, 'med-3': true, 'med-4': true },
  Sat: { 'med-1': null, 'med-2': null, 'med-3': null, 'med-4': null },
  Sun: { 'med-1': null, 'med-2': null, 'med-3': null, 'med-4': null },
}

export const historyLog = [
  { date: '2026-07-19', time: '20:04', med: 'Metformin', status: 'taken' },
  { date: '2026-07-19', time: '08:02', med: 'Metformin', status: 'taken' },
  { date: '2026-07-19', time: '08:02', med: 'Lisinopril', status: 'taken' },
  { date: '2026-07-19', time: '21:00', med: 'Atorvastatin', status: 'taken' },
  { date: '2026-07-18', time: '20:15', med: 'Vitamin D3', status: 'missed' },
  { date: '2026-07-18', time: '08:00', med: 'Metformin', status: 'taken' },
  { date: '2026-07-17', time: '08:05', med: 'Lisinopril', status: 'missed' },
  { date: '2026-07-17', time: '21:02', med: 'Atorvastatin', status: 'taken' },
]

export const user = {
  name: 'Priya Sharma',
  adherenceRate: 91,
  streak: 6,
  nextDose: { med: 'Atorvastatin', time: '9:00 PM' },
}
