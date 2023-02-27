export enum EnumHttpStatus {
  OK = 200,
  NG = 500,
}

/** 実行した処理 */
export enum EnumAttendanceProcess {
  start = 0,
  end = 1,
  restin = 2,
  restout = 3,
}

/** 現在の出勤状況 */
export enum EnumAttendanceStatus {
  leaving = 0,
  working = 1,
  breaking = 2,
}

/** 性別のセレクトボックス */
export const genderSelect = [
  { value: '1', view: '男' },
  { value: '2', view: '女' },
];
